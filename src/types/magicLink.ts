import { Customer, PersonalModel } from './customer';
import {
  IDocument,
  IHistory,
  InfoTab,
  IOcrDocument,
  IOcrDocumentDetail,
  IRecording,
  IScripting,
  ISpeech,
  ResponsePagination,
} from './general';
import { LoanApplicationInfo } from './loanApplication';
import {
  CreditBureauAuthorizationsType,
  CreditBureauInquiriesType,
  PhoneScoreInquiriesType,
} from './sessionDetailExternalData';

export class MagicLinkSessionResponseDto extends ResponsePagination<MagicLinkSessionDto> {
  tabs: MagicLinkSessionTab[] = [];
}

export class MagicLinkSessionResponseWithCustomerDto extends ResponsePagination<MagicLinkSessionWithCustomerDto> {
  tabs: MagicLinkSessionTab[] = [];
}

export interface MagicLinkSessionWithCustomerDto extends MagicLinkSessionDto {
  customer: PersonalModel;
}

export interface MagicLinkSessionTab extends InfoTab {}

export interface MagicLinkHistoryInfoDto {
  id: string;
  linkId: string | null;
  sessionId: string | null;
  actionDescription: string;
  actionDate: Date;
  questionId?: string;
  location?: string;
}

export interface MagicLinkSessionDto {
  id: string;
  sessionId: string;
  interviewId: string;
  customerId: string | null;
  customerName: string | null;
  linkCreated: Date;
  linkOpened: Date;
  linkTerminated: Date;
  magicLinkType: string;
  link: string;
  agent?: string;
  duration: number;
  status: string;
}

export interface QuestionDocument {
  questionId: string;
  error: any;
  loading: boolean;
  documents: LinkSessionDocument[];
}

export type MagicLinkSessionDetail = {
  id: string;
  magicLinkType: MagicLinkType;
  sessionId: string;
  interviewId: string;
  customerId: string | null;
  linkCreated?: Date;
  linkOpened?: Date;
  linkTerminated?: Date;
  link?: string;
  agent?: string;
  duration: number;
  customer: {
    error: any;
    loading: boolean;
    customer: Customer | undefined;
  };
  questionDocuments: QuestionDocument[];
  speech: LinkSessionSpeech[];
  history: {
    error: any;
    loading: boolean;
    history: MagicLinkHistoryInfoDto[];
  };
  scripting: {
    error: any;
    loading: boolean;
    scripting: LinkSessionScripting | undefined;
  };
  loanApplication: {
    error: any;
    loading: boolean;
    loanInfo: LoanApplicationInfo | undefined;
  };
  creditBureauInquiry: {
    error: any;
    loading: boolean;
    creditBureauInquiries: CreditBureauInquiriesType[];
  };
  CreditBureauAuthorization: {
    error: any;
    loading: boolean;
    CreditBureauAuthorizations: CreditBureauAuthorizationsType[];
  };
  PhoneScoreInquiry: {
    error: any;
    loading: boolean;
    PhoneScoreInquiries: PhoneScoreInquiriesType[];
  };
};

export interface LinkSessionHistory extends IHistory {}

export interface LinkSessionDocument extends IDocument {}

export interface LinkSessionRecording extends IRecording {}

export interface LinkSessionSpeech extends ISpeech {}

export interface LinkSessionOcrDocument extends IOcrDocument {}

export interface LinkSessionOcrDocumentDetail extends IOcrDocumentDetail {}

export interface LinkSessionScripting extends IScripting {}

export enum LinkCheckStatus {
  None,
  NotFound,
  Active,
  Inactive,
  Expired,
}

export type ResponsePinMatchedType = {
  isMatched: boolean;
  isAttempMaxReached: boolean;
  isPinExpired: boolean;
  attempt: number;
  tokens: Token[];
};

export type MagicLink = {
  id: number;
  customerId: number;
  sessionId: string;
  referenceSessionId: string;
  scriptCategoryId: string;
  interviewId: string;
  pinNumber: string;
  linkStatus: string;
  magicLinkType: string;
  isClosed: boolean;
  loanId?: number;
  link: string;
  kioskId?: string;
  stationId?: string;
  shortCode?: string;
};

export type MagicLinkEvent = {
  sessionId?: string;
  actionCategory?: string;
  actionDescription?: string;
  actionData?: {};
};

export type LinkCheckResult = {
  status: string;
  interviewId: string;
  sessionId: string;
  linkId: string;
  shortCode: string;
};

export type Token = {
  api: string;
  accessToken: string;
  expiresOn: string;
};

export enum ActionLinkCategory {
  None,
  Created,
  SentToCustomer,
  Opened,
  PinSent,
  PinAttemp,
  PinCapturedSuccessfully,
  Authenticated,
  MediaAdded,
  QuestionAnswered,
  Closed,
  NotFound,
  PaymentOrderAttemp,
  PaymentOrderCreated,
  PaymentOrderAmountChanged,
  PaymentOrderCanceled,
}

export interface MagicLinkCreateModel {
  customerId?: string;
  loanId?: string;
  referencedLoanApplicationId?: string;
  magicLinkType: MagicLinkType;
  source: String;
  sendLink?: boolean;
  sessionId?: string;
  kioskId?: string;
  stationId?: string;
}

export interface MagicLinkTypeDto {
  type: string;
  scriptCategoryId: string;
  condition: MagicLinkTypeConditionModel;
}

export interface MagicLinkTypeConditionModel {
  forContinueSession: boolean;
  forApproval: boolean;
}

export enum MagicLinkType {
  None,
  ATGRenewal,
  ATGExtension,
  ATGPayment,
  ATGPreCheckIn,
}

export enum LinkCreationSource {
  None,
  AOS,
  HubSpot,
  ABS,
}
