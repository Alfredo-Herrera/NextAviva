import { snackbar } from '@/atoms/Snackbar';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { customerAPI } from '../../services/CustomerService/customerService';
import { linkAPI } from '../../services/LinkService/linkService';
import { Customer } from '../../src/types/customer';
import { LoanInfo } from '../../src/types/loan';
import {
  MagicLink,
  MagicLinkEvent,
  MagicLinkType,
} from '../../src/types/magicLink';

export interface MagicLinkState {
  checkUrlMagicLink: {
    error: any;
    loading: boolean;
    linkStatus: string | undefined;
  };
  magicLink: {
    Id?: number;
    error: any;
    loading: boolean;
    sessionId: string | undefined;
    interviewId: string | undefined;
    magicLinkType: string | undefined;
    referenceSessionId: string | undefined;
    scriptCategoryId: string | undefined;
    isClosed: boolean | undefined;
    loanId?: number;
    orderId?: number;
    customerId?: number;
    kioskId?: string;
    stationId?: string;
    shortCode?: string;
  };
  loanInfo: {
    error: any;
    loading: boolean;
    loanInfo?: LoanInfo;
  };
  customer: {
    error: any;
    loading: boolean;
    customerInfo?: Customer;
  };
  linkId: string | undefined;
  numDeviceCam: number;
}

const initialState: MagicLinkState = {
  checkUrlMagicLink: {
    error: null,
    loading: false,
    linkStatus: undefined,
  },
  magicLink: {
    Id: undefined,
    error: null,
    loading: false,
    sessionId: undefined,
    interviewId: undefined,
    referenceSessionId: undefined,
    scriptCategoryId: undefined,
    isClosed: undefined,
    magicLinkType: undefined,
    loanId: undefined,
    shortCode: undefined,
  },
  loanInfo: {
    error: null,
    loading: false,
    loanInfo: undefined,
  },
  customer: {
    error: null,
    loading: false,
    customerInfo: undefined,
  },
  linkId: undefined,
  numDeviceCam: 1,
};
export const magicLinkSlice = createSlice({
  name: 'magicLink',
  initialState,
  reducers: {
    checkUrlMagicLinkInfo: (state, action: PayloadAction<boolean>) => {
      state.checkUrlMagicLink.loading = action.payload;
      state.checkUrlMagicLink.error = false;
      state.checkUrlMagicLink.linkStatus = undefined;
    },
    checkUrlMagicLinkInfoSuccess: (state, action: PayloadAction<string>) => {
      state.checkUrlMagicLink.loading = false;
      state.checkUrlMagicLink.error = false;
      state.checkUrlMagicLink.linkStatus = action.payload;
    },
    checkUrlMagicLinkInfoError: (state, action: PayloadAction<any>) => {
      state.checkUrlMagicLink.loading = false;
      state.checkUrlMagicLink.error = action.payload;
    },
    magicLinkInfo: (state, action: PayloadAction<boolean>) => {
      state.magicLink.loading = action.payload;
      state.magicLink.error = false;
      state.magicLink.sessionId = undefined;
    },
    magicLinkInfoSuccess: (state, action: PayloadAction<MagicLink>) => {
      state.magicLink.Id = action.payload.id;
      state.magicLink.loading = false;
      state.magicLink.error = false;
      state.magicLink.customerId = action.payload.customerId;
      state.magicLink.loanId = action.payload.loanId;
      state.magicLink.sessionId = action.payload.sessionId;
      state.magicLink.interviewId = action.payload.interviewId;
      state.magicLink.scriptCategoryId = action.payload.scriptCategoryId;
      state.magicLink.referenceSessionId = action.payload.referenceSessionId;
      state.magicLink.isClosed = action.payload.isClosed;
      state.magicLink.magicLinkType = action.payload.magicLinkType;
      state.magicLink.stationId = action.payload.stationId;
      state.magicLink.kioskId = action.payload.kioskId;
      state.magicLink.shortCode = action.payload.shortCode;
    },
    magicLinkInfoError: (state, action: PayloadAction<any>) => {
      state.magicLink.loading = false;
      state.magicLink.error = action.payload;
    },
    setLoanInfo: (state, action: PayloadAction<boolean>) => {
      state.loanInfo.loading = action.payload;
      state.loanInfo.error = false;
      state.loanInfo.loanInfo = undefined;
    },
    setLoanInfoSuccess: (state, action: PayloadAction<LoanInfo>) => {
      state.loanInfo.loading = false;
      state.loanInfo.error = false;
      state.loanInfo.loanInfo = action.payload;
    },
    setLoanInfoError: (state, action: PayloadAction<any>) => {
      state.loanInfo.loading = false;
      state.loanInfo.error = action.payload;
    },
    setCustomerInfo: (state, action: PayloadAction<boolean>) => {
      state.customer.loading = action.payload;
      state.customer.error = false;
      state.customer.customerInfo = undefined;
    },
    setCustomerInfoSuccess: (state, action: PayloadAction<Customer>) => {
      state.customer.loading = false;
      state.customer.error = false;
      state.customer.customerInfo = action.payload;
    },
    setCustomerInfoError: (state, action: PayloadAction<any>) => {
      state.customer.loading = false;
      state.customer.error = action.payload;
    },
    setLinkId: (state, action: PayloadAction<string | undefined>) => {
      state.linkId = action.payload;
    },
    setNumDeviceCam: (state, action: PayloadAction<number>) => {
      state.numDeviceCam = action.payload;
    },
    setShorCode: (state, action: PayloadAction<string>) => {
      state.magicLink.shortCode = action.payload;
    },
  },
});

export const CheckUrlMagicLinkInfoAction =
  (linkId: string, types: MagicLinkType[]) => async (dispatch: any) => {
    dispatch(checkUrlMagicLinkInfo(true));
    try {
      const response = await linkAPI.linkCheck(linkId, types);
      dispatch(checkUrlMagicLinkInfoSuccess(response.data));
    } catch (error: any) {
      dispatch(checkUrlMagicLinkInfoError(error));
      snackbar.error(`API Request Error: ${error.message}`);
    }
  };

export const MagicLinkInfoAction =
  (linkId: string) => async (dispatch: any) => {
    dispatch(magicLinkInfo(true));
    try {
      const response = await linkAPI.getLink(linkId);
      dispatch(magicLinkInfoSuccess(response.data));
    } catch (error: any) {
      dispatch(magicLinkInfoError(error));
      snackbar.error(`API Request Error: ${error.message}`);
    }
  };

export const GetLoanInfoAction = (loanId: number) => async (dispatch: any) => {
  dispatch(setLoanInfo(true));
  try {
    const response = await customerAPI.GetLoanInfo(loanId);
    dispatch(setLoanInfoSuccess(response.data));
  } catch (error: any) {
    dispatch(setLoanInfoError(error));
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

export const GetCustomerInfoAction =
  (customerId: number) => async (dispatch: any) => {
    dispatch(setCustomerInfo(true));
    try {
      const response = await customerAPI.GetPersonalInformationDetail(
        customerId.toString()
      );
      dispatch(setCustomerInfoSuccess(response.data));
    } catch (error: any) {
      dispatch(setCustomerInfoError(error));
      snackbar.error(`API Request Error: ${error.message}`);
    }
  };

export const SendNotificationAction = async (linkId: string) => {
  try {
    const response = await linkAPI.sendNotification(linkId);
    return response.data;
  } catch (error: any) {
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

export const IsPinMatchedAction = async (pin: string, linkId: string) => {
  try {
    const response = await linkAPI.isPinMatched(pin, linkId);
    return response.data;
  } catch (error: any) {
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

// Set Link as Opened
export const UpdateAccessControlAction = async (linkId: string) => {
  try {
    const response = await linkAPI.updateAccessControl(linkId);
    return response.data;
  } catch (error: any) {
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

export const AssignSessionAction = async (
  linkId: string,
  sessionId: string
) => {
  try {
    const response = await linkAPI.assignSession(linkId, sessionId);
    return response.data;
  } catch (error: any) {
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

export const AssignOrderAction =
  (linkId: string, orderId?: number) => async (dispatch: any) => {
    try {
      const response = await linkAPI.assignOrder(linkId, orderId);
      return response.status;
    } catch (error: any) {
      snackbar.error(`API Request Error: ${error.message}`);
    }
  };

export const AssignInterviewAction = async (
  linkId: string,
  interviewId: string
) => {
  try {
    const response = await linkAPI.assignInterview(linkId, interviewId);
    return response.data;
  } catch (error: any) {
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

export const TerminateAction = async (linkId: string) => {
  try {
    await linkAPI.terminate(linkId);
  } catch (error: any) {
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

export const EventAction = async (linkId: string, event: MagicLinkEvent) => {
  try {
    const response = await linkAPI.event(linkId, event);
    return response.data;
  } catch (error: any) {
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

export const SetLinkIdAction =
  (linkId: string | undefined) => (dispatch: any) => {
    dispatch(setLinkId(linkId));
  };

export const SetNumDeviceCamAction = (numDevice: number) => (dispatch: any) => {
  dispatch(setNumDeviceCam(numDevice));
};

export const setShorCodeAction =
  (shorCode: string) => async (dispatch: any) => {
    dispatch(setShorCode(shorCode));
  };

export const TokenAction = async () => {
  try {
    const response = await linkAPI.tokens();
    if (response.data?.length > 0)
      localStorage.setItem('tokens', JSON.stringify(response.data));

    response.data.map((token) => {
      localStorage.setItem(token.api, token.accessToken);
    });
  } catch (error: any) {
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

export const {
  checkUrlMagicLinkInfo,
  checkUrlMagicLinkInfoSuccess,
  checkUrlMagicLinkInfoError,
  magicLinkInfo,
  magicLinkInfoSuccess,
  magicLinkInfoError,
  setLinkId,
  setNumDeviceCam,
  setLoanInfo,
  setLoanInfoSuccess,
  setLoanInfoError,
  setCustomerInfo,
  setCustomerInfoSuccess,
  setCustomerInfoError,
  setShorCode,
} = magicLinkSlice.actions;

export default magicLinkSlice.reducer;
