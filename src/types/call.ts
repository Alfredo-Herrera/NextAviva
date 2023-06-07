import { CallPartyType, DocumentType } from "./enums";

export const CustomerCallCommands = {
  StartBureauAuthorization: "StartBureauAuthorization",
  CloseBureauAuthorization: "CloseBureauAuthorization",
  AuthorizedCreditConsultation: "AuthorizedCreditConsultation",
  NotAuthorizedCreditConsultation: "NotAuthorizedCreditConsultation",
  UpdateQuestionsValue: "UpdateQuestionsValue",
  AddDecisionProvider: "AddDecisionProvider",
  UpdateDecisionProvider: "UpdateDecisionProvider",
  ReplaceDecisionProvider: "ReplaceDecisionProvider",
  ShowValidationMessage: "ShowValidationMessage",
  StartFinalMessage: "StartFinalMessage",
  UpdateFinalMessage: "UpdateFinalMessage",
  EndsFinalMessage: "EndsFinalMessage",
  ClearValidationMessage: "ClearValidationMessage",
  ApprovalScreen: "ApprovalScreen",
  RejectedScreen: "RejectedScreen",
  ShowQuestionMessage: "ShowQuestionMessage"
}

export type PublishInBusMessage = {
  Message: any,
  Type: string
}

export type RunDataPoint = {
  DataPoint: string,
  SessionId: string,
  InterviewId: string
};

export type CallCredential = {
  callId: string,
  token: string,
  userId: string
};

export type SessionCall = {
  callId: string,
  kioskEmail: string,
  kioskId: string,
  kioskToken: string,
  agentId: string,
  agentToken: string,
  statusCall: number
};

export type GridProps = {
  id: string;
  kioskId: string;
  status: string;
  agent: string;
  holdTime: number;
  atentionTime: number;
  kioskName: string;
  stationId: string;
  sessionId: string;
  sessionRequested: Date;
  sessionAccepted: Date;
};

export interface initSessionResponse {
  sessionId: string,
  status: string
}

export interface sessionResponse {
  id: string,
  requested: string,
  accepted: string,
  terminated: string,
  expired: string,
  information: string,
  kioskId: string,
  kioskName: string,
  stationId: string,
  stationName: string,
  agentId: string,
  agentName: string,
  status: string,
  recordingStatus: string
}

export interface communicationData {
  userId: string,
  token: string
}

export interface joinSessionResponse {
  sessionId: string,
  agentId: string,
  callerParams: communicationData,
  agentParams: communicationData,
  status: string
}

export interface callSessionEvent {
  eventType: string,
  eventData: string,
  eventDetails: string,
}

export interface newSpeechRequest {
  speakerId?: string
  deviceId?: string,
  callParty: CallPartyType,
  speechText: string,
  duration: number,
  offset: number,
  confidence: number,
  language: string,
  languageConfidence?: number
}

export interface newSpeechResponse {
  id: string
}

export interface PreviewImageModel {
  image: any
  imageBase64: string,
  documentType: DocumentType,
}

export interface ImageMessageModel {
  imageId: string,
  documentType: DocumentType,
  sessionId: string
}

export interface FileContent {
  contentType: string,
  enableRangeProcessing: boolean,
  fileContents: string,
  fileDownloadName: string
}

export interface CoverImageModel {
  imageCover: string,
  contentType?: string,
  extension?: string
}

export interface InfraUpdateModel {
  callId?: string,
  serverCallId?: string
}

export enum CallSessionSource {
  AOS = 0,
  ATG = 1
}