import { snackbar } from '@/atoms/Snackbar';
import {
  AuthenticationResult,
  EventMessage,
  EventType,
  InteractionRequiredAuthError,
  PopupEvent,
  PublicClientApplication,
} from '@azure/msal-browser';
import {
  CUSTOMER_API,
  DOCUMENT_API,
  EDGE_API,
  GRAPH_API,
  ORCH_API,
  PAYMENT_API,
  SCRIPT_API,
  VERIFY_API,
  VIDEO_API,
} from '../config/config';
import { linkAPI } from '../services/LinkService/linkService';
import { SessionAD } from '../src/types/customerManagement';
import { SessionSourceEnum } from '../src/types/general';
import { Token } from '../src/types/magicLink';
import {
  customerRequest,
  documentRequest,
  edgeRequest,
  loginRequest,
  msalConfig,
  orchRequest,
  paymentRequest,
  scriptRequest,
  verifyRequest,
  videoRequest,
} from './authAzureConfig';

enum TokenSessionKey {
  EdgeApi,
  DocumentApi,
  VideoApi,
  ScriptApi,
  OrchApi,
  VerifyApi,
  CustomerApi,
  PaymentApi,
}

const msalInstance = new PublicClientApplication(msalConfig);
let popupWindow: Window | undefined;

msalInstance.addEventCallback((message: EventMessage) => {
  if (message.eventType === EventType.POPUP_OPENED) {
    // Save the popup window for focusing later
    popupWindow = (message.payload as PopupEvent)?.popupWindow;
    popupWindow?.focus();
  }

  if (message.eventType === EventType.LOGOUT_SUCCESS) {
    popupWindow = undefined;
  }
});

const setSession = (accessToken: AuthenticationResult | null) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken.accessToken);
    localStorage.setItem('user', JSON.stringify(accessToken.account));
  } else {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }
};

const getSession = (): SessionAD => ({
  token: localStorage.getItem('accessToken'),
  user: localStorage.getItem('user'),
});

const getScopeByBaseURL = (baseURL: string) => {
  const scopes: string[] = [];
  if (baseURL === GRAPH_API) {
    return loginRequest.scopes;
  } else if (baseURL === EDGE_API) {
    return edgeRequest.scopes;
  } else if (baseURL === VIDEO_API) {
    return videoRequest.scopes;
  } else if (baseURL === DOCUMENT_API) {
    return documentRequest.scopes;
  } else if (baseURL === SCRIPT_API) {
    return scriptRequest.scopes;
  } else if (baseURL === ORCH_API) {
    return orchRequest.scopes;
  } else if (baseURL === VERIFY_API) {
    return verifyRequest.scopes;
  } else if (baseURL === CUSTOMER_API) {
    return customerRequest.scopes;
  } else if (baseURL === PAYMENT_API) {
    return paymentRequest.scopes;
  }

  return scopes;
};

const getTokenSessionKeyByBaseURL = (baseURL: string) => {
  const scopes: string = 'accessToken';
  if (baseURL === EDGE_API) {
    return TokenSessionKey[TokenSessionKey.EdgeApi];
  } else if (baseURL === VIDEO_API) {
    return TokenSessionKey[TokenSessionKey.VideoApi];
  } else if (baseURL === DOCUMENT_API) {
    return TokenSessionKey[TokenSessionKey.DocumentApi];
  } else if (baseURL === SCRIPT_API) {
    return TokenSessionKey[TokenSessionKey.ScriptApi];
  } else if (baseURL === ORCH_API) {
    return TokenSessionKey[TokenSessionKey.OrchApi];
  } else if (baseURL === VERIFY_API) {
    return TokenSessionKey[TokenSessionKey.VerifyApi];
  } else if (baseURL === CUSTOMER_API) {
    return TokenSessionKey[TokenSessionKey.CustomerApi];
  } else if (baseURL === PAYMENT_API) {
    return TokenSessionKey[TokenSessionKey.PaymentApi];
  }
  return scopes;
};

const refreshToken = (
  scopes: string[]
): Promise<AuthenticationResult | void | undefined> => {
  const account = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') || '')
    : undefined;

  const request = {
    account: account,
    scopes: scopes,
    forceRefresh: false,
  };

  return msalInstance
    .acquireTokenSilent(request)
    .then((response) => {
      // In case the response server has an empty accessToken field
      // throw an error to initiate token acquisition
      console.log('msalInstance.acquireTokenSilent', response);
      if (!response.accessToken || response.accessToken === '') {
        throw new InteractionRequiredAuthError();
      }
      return response;
    })
    .catch((error) => {
      console.log(
        'msalInstance.acquireTokenSilent->catch->Silent token acquisition fails. Acquiring token using popup. \n',
        error
      );
      if (error instanceof InteractionRequiredAuthError) {
        // fallback to interaction when silent call fails
        if (!popupWindow) {
          return retryLoginWithPopup(request);
        } else {
          return;
        }
      } else {
        snackbar.error(
          `No se pudo recuperar la sesión,
                                     por favor cierre y vuelva a iniciar sesión`,
          5000
        );
        setSession(null);
        redirectPageLogin();
      }
    });
};

const saveTokenByBaseURL = async (baseURL: string, tokenSessionKey: string) => {
  if (
    localStorage.getItem('tokens') ||
    process.env.REACT_APP_BUILD_TARGET ===
      SessionSourceEnum[SessionSourceEnum.ATG]
  ) {
    await refreshTokenForClient();
  } else {
    const token = await refreshToken(getScopeByBaseURL(baseURL));
    if (!token || token === undefined) {
      snackbar.error(`Ocurrió un error, por favor actualice la pagina`, 5000);
      console.log('Unable to retrieve token');
      // throw new Error('Unable to retrieve token');
    } else {
      localStorage.setItem(tokenSessionKey, token.accessToken);
    }
  }
};

const retryLoginWithPopup = (request: any, setToken?: boolean) =>
  msalInstance
    .acquireTokenPopup(request)
    .then((response) => {
      console.log('retryLoginWithPopup->acquireTokenPopup', response);
      if (setToken) {
        setSession(response);
        window.location.href = '/';
      }
      return response;
    })
    .catch((error) => {
      console.log(
        'retryLoginWithPopup->catch->Error opening popup window',
        error
      );
      if (error) {
        if (error.toString().includes('Error opening popup window')) {
          snackbar.warning(
            `Se ha intentado abrir la pantalla de authenticacion y se ha bloqueado`,
            10000,
            {
              textButton: 'Iniciar Sesión Aquí',
              action: () => {
                retryLoginWithPopup(request, true);
              },
            }
          );
        } else {
          snackbar.error(
            `No se pudo recuperar la sesión,
                         por favor cierre y vuelva a iniciar sesión`,
            5000
          );
          redirectPageLogin();
        }
      }
    });

const redirectPageLogin = () => {
  setTimeout(() => {
    setSession(null);
    window.location.href = '/';
  }, 5000);
};

const refreshTokenForClient = async () => {
  const tokenStorage = localStorage.getItem('tokens');

  if (tokenStorage) {
    const tokens: Token[] = JSON.parse(tokenStorage);

    tokens.map((token) => {
      localStorage.removeItem(token.api);
    });

    localStorage.removeItem('tokens');
  }

  const { data } = await linkAPI.tokens();
  if (data?.length > 0) {
    localStorage.setItem('tokens', JSON.stringify(data));

    data.map((token: { api: string; accessToken: string }) => {
      localStorage.setItem(token.api, token.accessToken);
    });
  }
};

export {
  setSession,
  getScopeByBaseURL,
  saveTokenByBaseURL,
  getTokenSessionKeyByBaseURL,
  refreshToken,
  getSession,
};
