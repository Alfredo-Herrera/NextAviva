import axios, { AxiosRequestConfig } from 'axios';
import JSONbigint from 'json-bigint';

import { GRAPH_API } from '../config/config';
import { getTokenSessionKeyByBaseURL, saveTokenByBaseURL } from './azureAD';
import { isValidToken } from './jwt';

function buildFormData(formData: any, data: any, parentKey: any) {
  if (
    data &&
    typeof data === 'object' &&
    !(data instanceof Date) &&
    !(data instanceof Blob)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? '' : data;
    formData.append(parentKey, value);
  }
}

const JSONToFormData = (data: any) => {
  const formData = new FormData();
  buildFormData(formData, data, undefined);
  return formData;
};

// ----------------------------------------------------------------------

const axiosGraph = axios.create({
  baseURL: GRAPH_API,
  timeout: 10000,
});

const axiosInstance = axios.create({
  timeout: 500000,
});

axiosGraph.interceptors.request.use(
  (request) => CheckForToken(request, 'accessToken'),
  (error) => Promise.reject(error)
);

axiosGraph.interceptors.response.use(
  (response) => response,
  async (error) =>
    ApiRequestError(error, 'accessToken', (res: any) => axiosGraph(res), [
      '404',
    ])
);

// **********************************************************************************************************
// This will handle BigIntegers
// https://github.com/axios/axios/issues/3440
// request interceptor, preventing the response the default behaviour of parsing the response with JSON.parse

axiosInstance.interceptors.request.use((request) => {
  request.transformResponse = [(data) => data];
  return request;
});

// response interceptor parsing the response data with JSONbigint, and returning the response
axiosInstance.interceptors.response.use((response) => {
  if (typeof response.data === 'string' && response.data) {
    try {
      response.data = JSONbigint({
        storeAsString: true,
        protoAction: 'preserve',
      }).parse(response.data);
    } catch (e) {
      console.error('parsing Error' + e);
    }
  }
  return response;
});

// **********************************************************************************************************

axiosInstance.interceptors.request.use(
  (request) => {
    if (request.baseURL !== undefined)
      return CheckForToken(
        request,
        getTokenSessionKeyByBaseURL(request.baseURL)
      );
    else return request;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.config?.baseURL)
      return ApiRequestError(
        error,
        getTokenSessionKeyByBaseURL(error.config.baseURL),
        (res: any) => axiosInstance(res)
      );
    else
      return ApiRequestError(error, undefined, (res: any) =>
        axiosInstance(res)
      );
  }
);

// **********************************************
// Manage HttpRequest token request if is needed.
// **********************************************
async function CheckForToken(
  request: AxiosRequestConfig<any>,
  tokenSessionKey: string
): Promise<any> {
  const token = localStorage.getItem(tokenSessionKey);
  if (request?.headers) {
    if (token && isValidToken(token)) {
      request.headers.Authorization = `Bearer ${token}`;
      return request;
    } else {
      const accountUser = localStorage.getItem('user');
      // there is no user account therefore there is no login, no token is checked
      if (accountUser === null || !accountUser || accountUser === undefined)
        return request;
      await saveTokenByBaseURL(request?.baseURL ?? '', tokenSessionKey);
      return CheckForToken(request, tokenSessionKey);
    }
  }
  return;
}

// **********************************************
// Manage HttpRequest errors and refreshToken for 401 and 403 errors.
// **********************************************
async function ApiRequestError(
  error: any,
  tokenSessionKey: string | undefined,
  retryAxios: any,
  doNotShow: string[] = []
) {
  console.log('ApiRequestError', error);
  const originalRequest = error.config;
  if (
    (error?.response?.status === 403 || error?.response?.status === 401) &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true;
    if (tokenSessionKey !== undefined) {
      await saveTokenByBaseURL(originalRequest.baseURL, tokenSessionKey);
    }

    return retryAxios(originalRequest);
  }
  throw error;
}

export { axiosGraph, axiosInstance, JSONToFormData };
