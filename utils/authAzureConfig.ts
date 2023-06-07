import { Configuration, LogLevel } from '@azure/msal-browser';

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig: Configuration = {
  auth: {
    authority: `${process.env.REACT_APP_AZURE_AUTHORITY}${process.env.REACT_APP_AZURE_TENANT}`,
    clientId: `${process.env.REACT_APP_AZURE_CLIENT}`,
    redirectUri: `${process.env.REACT_APP_AZURE_REDIRECT_URI}`,
    postLogoutRedirectUri: `${process.env.REACT_APP_AZURE_REDIRECT_LOGOUT_URI}`,
  },
  cache: {
    cacheLocation: 'localStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    tokenRenewalOffsetSeconds: 600, // update token 10 minutes before
    loggerOptions: {
      loggerCallback: (
        level: LogLevel,
        message: string,
        containsPii: boolean
      ): void => {
        if (containsPii) {
          return;
        }
        // switch (level) {
        //     case LogLevel.Error:
        //         console.error(message);
        //         return;
        //     case LogLevel.Info:
        //         console.info(message);
        //         return;
        //     case LogLevel.Verbose:
        //         console.debug(message);
        //         return;
        //     case LogLevel.Warning:
        //         console.warn(message);
        //         return;
        // }
      },
    },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: ['User.Read'], //,
};

export const edgeRequest = {
  scopes: [`api://${process.env.REACT_APP_EDGE_APPID}/access_as_user`],
};

export const videoRequest = {
  scopes: [`api://${process.env.REACT_APP_VIDEO_APPID}/access_as_user`],
};

export const documentRequest = {
  scopes: [
    `api://${process.env.REACT_APP_DOCUMENT_APPID}/User.Read`,
    `api://${process.env.REACT_APP_DOCUMENT_APPID}/User.Save`,
    `api://${process.env.REACT_APP_DOCUMENT_APPID}/User.Delete`,
  ],
};

export const scriptRequest = {
  scopes: [`api://${process.env.REACT_APP_SCRIPT_APPID}/Interviewers`],
};

export const orchRequest = {
  scopes: [`api://${process.env.REACT_APP_ORCH_APPID}/access_as_user`],
};

export const verifyRequest = {
  scopes: [`api://${process.env.REACT_APP_VERIFY_APPID}/creditreport_as_user`],
};

export const customerRequest = {
  scopes: [`api://${process.env.REACT_APP_CUSTOMER_APPID}/User.Read`],
};

export const paymentRequest = {
  scopes: [`api://${process.env.REACT_APP_PAYMENT_APPID}/Payments.Read`],
};
/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
  graphMeEndpoint: 'Enter_the_Graph_Endpoint_Herev1.0/me',
};
