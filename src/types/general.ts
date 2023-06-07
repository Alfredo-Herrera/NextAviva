import { AlertColor } from '@mui/material';
import { InterviewQuestionPlainModel } from './scripting';

export const ThresholdConst = {
  Video: 1024,
  Audio_Document_Image: 512,
  Default: 256,
};

export const InactivityTimeConst = {
  Agent: 1800000,
  Kiosk: 3600000,
};

export const GenericAvatar = {
  src: 'data:image/jpeg;base64,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n0rxf4J6IdY+JVjIy5hsVa6c444GF/8AHiK+uaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr5l/aG8PfYfFdprUSYi1CHbIQOPMTj/ANB219NVwfxb8MHxP4AvYok33dp/pUGBySoOR+K5FAHx5RRRQAUUUUAFW9Ou20/UrS9Qbmt5klA9SpB/pVSigD7q8P6/YeJtGt9U02dZbeZQeDkoccqfQg8Yrn/iZ4usfCvg6+aeVPtdzC8NtDn5nZgRnHoM5zXyLp2tappDM2m6jd2Zb7xgmZM/XBqG91C81Kcz311NczHrJM5c/maAKtFFFABRRRQAUUVa0+xn1PUbawtkLz3EixxqO5JwKAPor9nbw8bTw9f65KmJL2URRE9fLTr/AOPH9K9rrK8OaND4e8O2GkQY2WkKx5H8RA5P4nJrVoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkYZGDyO4paKAPjv4seEW8IeNrmGJNthdk3FqR0Ck8r+B4+mK4SvsP4reC4/GXhCaNAq39mDPaueOR1X6EcfXFfHpGKAEooooAKKKKACiiigAooooAKKKKACvav2f/B51HXZvEtzHm2sMx2+4cNMRyf+Ag/ma8l0bSp9c1mz0u12ie6mWKMucAEnvX2r4W8O2nhXw7Z6PZD93bpgtjBkb+Jj7k0AbI6UtFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAY3iy6Fj4Q1m6zjyrKZgffYcV8M19lfFm5+yfC7XnzgtAIwf8AeYD+tfGtABRRRQAUUUUAFFFFABRRRQAUUUUAbHhW6Nl4t0e5Bx5V7C2fbeK+56+BYJTDPHKOqMGH4GvvGwnFzp9tODkSxI4P1ANAFmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK5DxX8SPDXg5/I1S9P2soHFtEhdyD0PoBx3NAHPfHy6+z/AAxmjBwbi6ij+oyW/wDZa+UK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',
};

export const TabsPageValue = {
  Aos: {
    CallDetail: 'detalle_de_llamada',
    ExternalData: {
      Tittle: 'datos_externos',
      CreditBureauInquiries: 'consultas_de_buro_con_resultados',
      CreditBureauAuthorizations: 'authorizaciones_buro',
      TiaxaInquiries: 'consultas_de_tiaxa_con_resultados',
      PalencaInquiries: 'consultas_de_palenca_con_resultados',
    },
    CreditApplications: 'solicitudes_de_credito',
    Customer: {
      PersonalInformation: 'informacion_personal',
      AddressHistory: 'historial_direcciones',
      EmploymentHistory: 'historial_empleos',
      ListAddress: 'direcciones',
      ListEmployments: 'empleos',
      BankAccounts: 'cuentas_banco',
      Ids: 'identificaciones_clave',
    },
    CustomerDetail: {
      AditionalInfoCustomer: 'informacion_adicional_cliente',
      LoanApplications: 'creditos_solicitados',
      SessionCalls: 'sesion_llamadas',
    },
    LoanApplicationDetail: {
      AditionalInfoLoan: 'informacion_adicional',
      SessionCalls: 'sesion_llamadas',
    },
    LoanDetail: {
      AditionalInfoLoan: 'informacion_adicional',
      PaymentsLink: 'link_pagos',
      Accounts: 'cuentas',
    },
    PaymentOrder: {
      AditionalInfoLoan: 'informacion_adicional',
    },
    PaymentDetail: {
      AditionalInfo: 'informacion_adicional',
      PaymentsLink: 'payment_order',
      Accounts: 'OrdernesDePago',
    },
  },
  AosToGo: {
    SessionDetail: 'detalle_sesion',
    ExternalData: {
      Tittle: 'datos_externos',
      CreditBureauInquiries: 'consultas_de_buro_con_resultados',
      CreditBureauAuthorizations: 'authorizaciones_buro',
      TiaxaInquiries: 'consultas_de_tiaxa_con_resultados',
      PalencaInquiries: 'consultas_de_palenca_con_resultados',
    },
    CreditApplications: 'solicitudes_de_credito',
    LoanApplicationDetail: {
      SessionLinks: 'sesion_aos_to_go',
      SessionLinksRenewal: 'propuestas_de_renovacion',
    },
    LoanDetail: {
      SessionLinks: 'sesion_aos_to_go',
    },
  },
};

export class ResponsePagination<T> {
  result: T[];

  page: number;

  rowsPerPage: number;

  totalRows: number;

  constructor() {
    this.result = [];
    this.page = 0;
    this.rowsPerPage = 0;
    this.totalRows = 0;
  }
}

export type OrderDirection = 'asc' | 'desc';

export type Filters = {
  page: number;
  rowsPerPage: number;
  startDate: Date | null;
  endDate: Date | null;
  filterName: string;
  order: OrderDirection;
  orderBy: string;
  tab?: string;
};

export type Datafilters = {
  rawFilters: string;
  filters: Filters;
};

export type AddressFieldType = {
  street: string;
  insideNumber: string;
  outdoorNumber: string;
  suburb: string;
  reference: string;
  city: string;
  municipality: string;
  state: string;
  zipCode: string;
  country: string;
};

export type ReferenceFieldType = {
  name?: string;
  lastName?: string;
  fullName?: string;
  phone?: string;
  streetNumber?: string;
  suburb?: string;
  city?: string;
  municipality?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  address?: string;
  whatsApp?: boolean;
  relationship?: string;
  checkLife?: boolean;
  checkAuthorizationContact?: boolean;
  checkAuthorizationPromotion?: boolean;
};

export type ConfigReferenceFieldProp = {
  nameField?: boolean;
  lastNameField?: boolean;
  fullNameField?: boolean;
  phoneField?: boolean;
  addressLargeField?: boolean;
  addressShort?: boolean;
  whatsApp?: boolean;
  relationship?: boolean;
  relationshipOption?: string[];
  checkLife?: boolean;
  checkAuthorizationContact?: boolean;
  checkAuthorizationPromotion?: boolean;
};

export enum NotificationLevel {
  Success,
  Warning,
  Error,
  Info,
}

export type GroupByValue = {
  Id: string;
  Name: string;
  objectName?: string;
};

export type InfoTab = {
  value: string;
  label: Date;
  color: Date;
  count: Date;
};

export type OperationResult = {
  message?: string;
  level?: AlertColor | undefined;
  visible: boolean;
};

export enum InternetConnectionOutPutType {
  Modal,
}

export enum MediaStorageType {
  Byte,
  Kilobyte,
  Megabyte,
}

export interface FileValidation {
  types?: string[];
  resizeToMaxWidth: number;
  resizeToMaxHeight: number;
  resizeToMinWidth?: number;
  resizeToMinHeight?: number;
  maxDocSize?: number; // size in kb
  maxDocuments?: number;
  photo?: boolean;
  selectFile?: boolean;
  selectCam?: 'user' | 'environment';
}

export interface VideoValidation {
  timer: number;
  autoplay?: boolean;
  resizeToMaxWidth: number;
  resizeToMaxHeight: number;
  resizeToMinWidth?: number;
  resizeToMinHeight?: number;
}

export enum EventType {
  Log,
  Success,
  Warnig,
  Error,
}

export interface IHistory {
  id: string;
  eventType: string;
  eventData: string;
  eventDetails: string;
  effectiveDate: Date;
}

export interface IDocument {
  id: string;
  name: string;
  description: string;
  contentType?: string;
  category: string;
  categoryId: string;
  imageUrl: string;
  size: string;
  ocrs: IOcrDocument[];
  date: Date;
}

export interface IRecording {
  id: string;
  blobName: string;
  url: string;
  urlCoverImage?: string;
  status: string;
  size: string;
  statusDate: Date;
}

export interface ISpeech {
  id: string;
  callParty: string;
  deviceId: string;
  effectiveDate: Date;
  speechText: string;
}

export interface IOcrDocument {
  documentId: string;
  details: IOcrDocumentDetail[];
}

export interface IOcrDocumentDetail {
  id: string;
  fieldName: string;
  value: string;
  certainly: number;
}

export interface ISearchDocument {
  documentId?: string;
  metadata: {};
}

export type AzCognitiveTokenResponse = {
  token: string;
  region: string;
  expiration: Date;
};

export interface IScripting {
  id: string;
  sessionId: string;
  scriptName: string;
  questions: InterviewQuestionPlainModel[];
}

export enum SessionSourceEnum {
  AOS,
  ATG,
}
