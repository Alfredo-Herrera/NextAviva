import { NotificationLevel } from './general';

export type CreditCustomerResponsePinMatchedType = {
  isMatched: boolean;
  isAttempMaxReached: boolean;
  isPinExpired: boolean;
  attempt: number;
};

export type CreditCustomerAuthResponseType = {
  authorization: CreditCustomerAuthorizationType;
};

export type CreditCustomerResponseType = {
  customer: CreditCustomerDataType;
  address: CreditCustomerAddressType;
};

export type CreditCustomerDataType = {
  id: string;
  name: string;
  lastName: string;
  secondLastName: string;
  gender: string;
  maritalStatus: string;
  bornDate: Date;
  CURP: string;
  RFC: string;
};

export type CreditCustomerAddressType = {
  id: string;
  street: string;
  exteriorNumber: number;
  interiorNumber: number;
  cp: string;
  phoneNumber: string;
  email: string;
  colony: string;
  municipality: string;
  city: string;
  state: string;
  acceptWhatsapp: boolean;
  acceptSMS: boolean;
};

export type CreditCustomerAuthorizationType = {
  id: string;
  sessionId: string;
  interviewId?: string;
  termsAndConditionsApprovalDate: string;
  approvalDate: string;
  rejectedDate: string;
  pinApprovalDate: string;
  phoneNumber: string;
  phoneNumberAcceptWhatsApp: boolean;
  phoneNumberAcceptSms: boolean;
  customerAddress: string;
  customerEmail: string;
  customerFullName: string;
  customerId: string;
  customerIdType: string;
  streetNumber: string;
  colony: string;
  city: string;
  state: string;
  captureNipAttempt: number;
  captureNipMaxReached: boolean;
  kioskId: string;
  stationId: string;
  source?: string;
  location?: string;
};

export type AuthorizedCreditConsultationType = {
  questionId: string;
  sessionId: string;
  authorized: boolean;
  result: string;
  notificationLevel: NotificationLevel;
};

export type ValidationMessageContainerType = {
  showValidation: boolean;
  isSuccess: boolean;
};
