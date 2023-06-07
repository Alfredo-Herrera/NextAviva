import { snackbar } from '@/atoms/Snackbar';
import {
  CreateOrderDto,
  OrderInfoDto,
  PaymentProviderInfo,
} from '@/types/payment';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { paymentAPI } from '../../services/PaymentService/paymentService';

export interface PaymentState {
  payments: {
    error: any;
    loading: boolean;
    paymentsInfo: PaymentProviderInfo[] | undefined;
  };
  order: {
    error: any;
    loading: boolean;
    orderInfo: OrderInfoDto | undefined;
  };
}

const initialState: PaymentState = {
  payments: {
    error: null,
    loading: false,
    paymentsInfo: undefined,
  },
  order: {
    error: null,
    loading: false,
    orderInfo: undefined,
  },
};

export const paymentSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    setPayments: (state, action: PayloadAction<boolean>) => {
      state.payments.loading = action.payload;
      state.payments.error = false;
      state.payments.paymentsInfo = undefined;
    },
    setPaymentsSuccess: (
      state,
      action: PayloadAction<PaymentProviderInfo[]>
    ) => {
      state.payments.loading = false;
      state.payments.error = false;
      state.payments.paymentsInfo = action.payload;
    },
    setPaymentsError: (state, action: PayloadAction<any>) => {
      state.payments.loading = false;
      state.payments.error = action.payload;
    },
    createOrder: (state, action: PayloadAction<boolean>) => {
      state.order.loading = action.payload;
      state.order.error = false;
      state.order.orderInfo = undefined;
    },
    createOrderSuccess: (state, action: PayloadAction<OrderInfoDto>) => {
      state.order.loading = false;
      state.order.error = false;
      state.order.orderInfo = action.payload;
    },
    createOrderError: (state, action: PayloadAction<any>) => {
      state.order.loading = false;
      state.order.error = action.payload;
    },
    getOrder: (state, action: PayloadAction<boolean>) => {
      state.order.loading = action.payload;
      state.order.error = false;
      state.order.orderInfo = undefined;
    },
    getOrderSuccess: (
      state,
      action: PayloadAction<OrderInfoDto | undefined>
    ) => {
      state.order.loading = false;
      state.order.error = false;
      state.order.orderInfo = action.payload;
    },
    getOrderError: (state, action: PayloadAction<any>) => {
      state.order.loading = false;
      state.order.error = action.payload;
    },
    getActiveOrder: (state, action: PayloadAction<boolean>) => {
      state.order.loading = action.payload;
      state.order.error = false;
      state.order.orderInfo = undefined;
    },
    getActiveOrderSuccess: (
      state,
      action: PayloadAction<OrderInfoDto | undefined>
    ) => {
      state.order.loading = false;
      state.order.error = false;
      state.order.orderInfo = action.payload;
    },
    getActiveOrderError: (state, action: PayloadAction<any>) => {
      state.order.loading = false;
      state.order.error = action.payload;
    },
  },
});

export const GetPaymentProvidersAction = () => async (dispatch: any) => {
  dispatch(setPayments(true));
  try {
    const response = await paymentAPI.GetPaymentProviders();
    dispatch(setPaymentsSuccess(response.data));
  } catch (error: any) {
    dispatch(setPaymentsError(error));
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

export const CreateOrderAction =
  (model: CreateOrderDto) => async (dispatch: any) => {
    dispatch(createOrder(true));
    try {
      const response = await paymentAPI.CreateOrder(model);
      dispatch(createOrderSuccess(response.data));
    } catch (error: any) {
      dispatch(createOrderError(error));
      const objError = JSON.parse(error?.response?.data ?? '{}');
      snackbar.error(
        `${objError?.detail ?? 'Ha ocurrido un error al crear la orden :('}`
      );
    }
  };

export const GetOrderAction = (orderId: number) => async (dispatch: any) => {
  dispatch(getOrder(true));
  try {
    const response = await paymentAPI.GetOrder(orderId);
    dispatch(getOrderSuccess(response.data));
  } catch (error: any) {
    dispatch(getOrderError(error));
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

export const GetActiveOrderAction =
  (accountId: number) => async (dispatch: any) => {
    dispatch(getActiveOrder(true));
    try {
      const response = await paymentAPI.GetActiveOrdersByAccount(accountId);
      const totOrders = response?.data?.length ?? 0;
      if (totOrders > 1)
        snackbar.error(
          `La cuenta ${accountId} no puede tiene mas de una orden activa, contactar con sistemas!`
        );
      else if (totOrders == 0) dispatch(getActiveOrderSuccess(undefined));
      else {
        //dispatch(getActiveOrderError({message : "Error"}))
        dispatch(getActiveOrderSuccess(response.data[0]));
      }
    } catch (error: any) {
      dispatch(getActiveOrderError(error));
      snackbar.error(`API Request Error: ${error.message}`);
    }
  };

/// Missing state handling? error handling
export const CancelOrderAction = (orderId: number) => async (dispatch: any) => {
  try {
    const response = await paymentAPI.CancelOrder(orderId);
    return response.status;
  } catch (error: any) {
    snackbar.error(`API Request Error: ${error.message}`);
  }
};

export const {
  getOrder,
  getOrderSuccess,
  getOrderError,
  setPayments,
  setPaymentsSuccess,
  setPaymentsError,
  createOrder,
  createOrderSuccess,
  createOrderError,
  getActiveOrder,
  getActiveOrderSuccess,
  getActiveOrderError,
} = paymentSlice.actions;

export default paymentSlice.reducer;
