import { CUSTOMER_API } from '../../config/config';
import {
  LinkCheckResult,
  MagicLink,
  MagicLinkCreateModel,
  MagicLinkEvent,
  MagicLinkHistoryInfoDto,
  MagicLinkSessionDto,
  MagicLinkSessionResponseWithCustomerDto,
  MagicLinkType,
  MagicLinkTypeDto,
  ResponsePinMatchedType,
  Token,
} from '../../src/types/magicLink';
import { axiosInstance } from '../../utils/axios';

export const linkAPI = {
  CreateLink: (model: MagicLinkCreateModel) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.post<MagicLink>('MagicLink', model);
  },

  GetLinkSessions: (types: MagicLinkType[], filter?: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    let typesStr = '';
    if (types) {
      typesStr = types
        .map((type) => `mainFilter=${MagicLinkType[type]}`)
        .join('&');
    }
    if (filter?.length ?? 0 > 0) filter += '&' + typesStr;
    else filter = '?' + typesStr;
    return axiosInstance.get<MagicLinkSessionResponseWithCustomerDto>(
      `MagicLink/SearchWithCustomer/${filter}`
    );
  },

  GetLinkSessionDetail: (linkId: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<MagicLinkSessionDto>(
      `MagicLink/${linkId}/Session`
    );
  },

  GetLinkHistoryDetail: (linkId: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<MagicLinkHistoryInfoDto[]>(
      `MagicLink/${linkId}/History`
    );
  },

  linkCheck: (linkId: string, types: MagicLinkType[]) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    let typesStr = '';
    if (types) {
      typesStr = types
        .map((type) => `allowedTypes=${MagicLinkType[type]}`)
        .join('&');
      if (typesStr.length > 0) typesStr = '?' + typesStr;
    }
    return axiosInstance.get<string>(`MagicLink/${linkId}/Check` + typesStr);
  },

  sendNotification: (linkId: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<boolean>(`MagicLink/${linkId}/SendNotification`);
  },

  isPinMatched: (pin: string, linkId: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<ResponsePinMatchedType>(
      `MagicLink/${linkId}/PinMatched/${pin}`
    );
  },

  updateAccessControl: (linkId: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.put(`MagicLink/${linkId}/AccessControl`);
  },

  getLink: (linkId: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<MagicLink>(`MagicLink/${linkId}`);
  },

  getLinkByType: (type: MagicLinkType) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<MagicLinkTypeDto>(`MagicLink/${type}/type`);
  },

  assignSession: (linkId: string, sessionId: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.put(`MagicLink/${linkId}/assignSession/${sessionId}`);
  },

  assignInterview: (linkId: string, interviewId: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.put(
      `MagicLink/${linkId}/assignInterview/${interviewId}`
    );
  },

  assignOrder: (linkId: string, orderId?: number) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.put(`MagicLink/${linkId}/assignOrder/${orderId}`);
  },

  terminate: (linkId: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.put(`MagicLink/${linkId}/terminate`);
  },

  event: (linkId: string, event: MagicLinkEvent) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.post(`MagicLink/${linkId}/event`, event);
  },

  tokens: () => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<Token[]>(`MagicLink/Token`);
  },
  sendVerificationCode: (phone: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<string>(`MagicLink/SendVerificationCode/${phone}`);
  },
  getLinkByShortCode: (shortCode: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<LinkCheckResult>(
      `MagicLink/${shortCode}/Check/ShortCode`
    );
  },
};
