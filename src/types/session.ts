import {
  IDocument,
  IHistory,
  InfoTab,
  IOcrDocument,
  IOcrDocumentDetail,
  IRecording,
  IScripting,
  ISearchDocument,
  ISpeech,
  ResponsePagination,
} from './general';
import { LoanApplicationInfo } from './loanApplication';
import {
  CreditBureauAuthorizationsType,
  CreditBureauInquiriesType,
  PhoneScoreInquiriesType,
} from './sessionDetailExternalData';

export class SessionResponseDto extends ResponsePagination<Session> {
  tabs: SessionTab[] = [];
}

export type Session = {
  id: string;
  sessionRequested: Date;
  sessionAccepted: Date;
  sessionTerminated: Date;
  sessionExpired?: Date;
  callDuration: number;
  holdTime: number;
  requestHoldTime: number;
  atentionTime: number;
  kioskId: string;
  kioskName: string;
  stationId: string;
  stationName: string;
  agentId: string;
  agentName: string;
  status: string;
  tags: string;
  customerId?: string;
  customerName?: string;
};

export interface SessionTab extends InfoTab {}

export type SessionDetail = {
  id: string;
  requested?: Date;
  accepted?: Date;
  terminated?: Date;
  callDuration: number;
  holdTime: number;
  kiosk?: SessionKiosk;
  station?: SessionStation;
  agent?: SessionAgent;
  document: {
    error: any;
    loading: boolean;
    documents: SessionDocument[];
  };
  recordings: SessionRecording[];
  speech: SessionSpeech[];
  history: SessionHistory[];
  scripting: {
    error: any;
    loading: boolean;
    scripting: SessionScripting | undefined;
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

export type SessionKiosk = {
  id: string;
  name: string;
  direction: string;
  country: string;
  state: string;
};

export type SessionStation = {
  id: string;
  name: string;
  information: string;
  deviceName: string;
  deviceId: string;
  capabilities: string;
  enabled: boolean;
};

export type SessionAgent = {
  id: string;
  information: string;
  userName: string;
};

export interface SessionHistory extends IHistory {}

export interface SessionDocument extends IDocument {}

export interface SessionRecording extends IRecording {}

export interface SessionSpeech extends ISpeech {}

export interface SessionOcrDocument extends IOcrDocument {}

export interface SessionOcrDocumentDetail extends IOcrDocumentDetail {}

export interface searchDocument extends ISearchDocument {}

export interface SessionScripting extends IScripting {}
