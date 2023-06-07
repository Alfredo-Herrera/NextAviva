import { AccountInfoResponseDto } from '@/types/account';
import {
  CreateOrderDto,
  OrderInfoDto,
  PaymentProviderInfo,
} from '@/types/payment';
import { PAYMENT_API } from '../../config/config';
import { axiosInstance } from '../../utils/axios';

export const paymentAPI = {
  GetPaymentProviders: () => {
    axiosInstance.defaults.baseURL = PAYMENT_API;
    return axiosInstance.get<PaymentProviderInfo[]>(`Provider`);
  },
  CreateOrder: (model: CreateOrderDto) => {
    axiosInstance.defaults.baseURL = PAYMENT_API;
    return axiosInstance.post<OrderInfoDto>(`Order`, model);
  },
  GetOrder: (orderId: number) => {
    axiosInstance.defaults.baseURL = PAYMENT_API;
    return axiosInstance.get<OrderInfoDto>(`Order/${orderId}`);
  },
  GetActiveOrdersByAccount: (accountId: number) => {
    axiosInstance.defaults.baseURL = PAYMENT_API;
    return axiosInstance.get<OrderInfoDto[]>(
      `Order/Account/${accountId}/active`
    );
  },
  CancelOrder: (orderId: number) => {
    axiosInstance.defaults.baseURL = PAYMENT_API;
    return axiosInstance.put(`Order/${orderId}/Cancel`);
  },
  GetAccounts: (filter?: string) => {
    axiosInstance.defaults.baseURL = PAYMENT_API;
    return axiosInstance.get<AccountInfoResponseDto>(
      `Account/Search/${filter}`
    );
  },
};
