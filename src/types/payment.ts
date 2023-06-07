import { AccountInfo } from "./account";

export type PaymentType = 'paypal' | 'credit_card' | 'cash_oxxo'| 'cash_stores' | 'spei';

export type IconOption ={
    src: string;
    width?: string;
    height?: string;
}

export type PaymentOption = {
    value: PaymentType;
    title: string;
    description: string;
    icons: IconOption[];
  };
  
export type CardOption = {
    value: string;
    label: string;
};

export enum ProviderName {
    Unknown,
    OpenPay,
    Conekta
}


export interface PaymentProviderInfo {
    id: string;
    name: string;
    logoUrl: string;
    defaultEmail: string;
    defaultPaymentEmail: string;
    description: string;
    active: boolean;
    defaultCurrency: string;
    methods: PaymentProviderMethodInfo[];
    settings: EntitySettingModel[];
}

export interface PaymentProviderMethodInfo {
    title: string;
    description: string;
    active: boolean;    
    method: string;
    settings: EntitySettingModel[];
    commisions: CommisionModel[];
    icons: IconOption[];
}

export enum PaymentMethodValues {
    Unknown,
    Store,
    Card,
    Spei
}

export enum WellKnownCurrencyCodesValues {
    MXN,
    USD
}

export interface EntitySettingModel {
    name: string;
    value: string | null;
}

export interface CommisionModel {
    code: string;
    concept: string | null;
    amount: number | null;
    percentage: number | null;
}

export interface CreateOrderDto {
    customer: BasicCustomerInfo;
    providerName: string;
    method: PaymentMethodValues;
    fixedAmount: number | null;
    minAmount: number | null;
    maxAmount: number | null;
    currency: WellKnownCurrencyCodesValues;
    dueDate: string | null;
    accountId: number;
}

export interface BasicCustomerInfo {
    customerId: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

export interface OrderInfo {
    id: number;
    active: boolean;
    authorization: string;
    router: GeneralOrderRouter;
    payments: PaymentInfo[];
    refunds: PaymentInfo[];
    customer: BasicCustomerInfo;
    status: OrderStatus;
    amount: number;
    currency: string;
    description: string | null;
    accountId: number;
    dueDate: string | null;
}

export interface OrderInfoDto extends  OrderInfo {
    Account: AccountInfo | null;
}

export interface PaymentInfo {
    origination: TransactionOrigination;
    transactionId: number;
    providerName: string;
    providerReference: string | null;
    paidOn: string;
    paidAmount: number;
    fees: PaymentFeeInfo | null;
    currency: string;
    authNumber: string;
    method: PaymentMethodValues;
    errorMessage: string | null;
    description: string | null;
    success: boolean;
}

export enum TransactionOrigination {
    None = 0,
    WebHook,
    Api
}

export interface PaymentFeeInfo {
    conceptId: string;
    conceptName: string;
    amount: number;
    tax: number;
    currency: string;
    total: number;
}

export interface OrderRouter {
    orderId: string;
    status: string;
    method: PaymentMethodValues;
    providerId: string;
    providerName: string;
    error: string;
    exchangeRate: ExchangeRateInfo | null;
    lastUpdated: string;
}

export interface OrderRouterStoreDto extends OrderRouter {
    reference: string;
    urlBarcode: string;
    urlStore: string;
    urlReceipt: string;
}

export interface OrderRouterSpeiDto extends OrderRouter {
    bankName: string;
    clabe: string;
    agreement: string;
    name: string;
    urlConfirm: string;
    urlReceipt: string;
}

export interface OrderRouterBankDto extends OrderRouter {
    urlRedirect: string;
}

export interface GeneralOrderRouter extends OrderRouterStoreDto,OrderRouterSpeiDto,OrderRouterBankDto {
}

export enum OrderStatus {
    Unknown,
    InProgress,
    Completed,
    Refunded,
    ChargebackPending,
    ChargebackAccepted,
    ChargebackAdjustment,
    ChargePending,
    Cancelled,
    Failed
}

export interface ExchangeRateInfo {
    fromCurrency: string;
    toCurrency: string;
    date: string | null;
    value: number;
}

export interface HelpPaymentSpei {
    stepsDescription?: string;
    contact?: string;
}

export interface GeneralSettingPayment {
    phone?: string;
    email?: string;
    beneficiary? : string;
}