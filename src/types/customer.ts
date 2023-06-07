import { InfoTab, ResponsePagination } from './general';

export class CustomerResponseDto extends ResponsePagination<Customer> {
  tabs: InfoTab[] = [];
}

export interface Customer {
  id: string;
  primaryId: string;
  firstSessionId: string;
  totalLoan: number;
  personalInformation: PersonalModel;
  addressHistory: AddressModel[];
  employmentHistory: CustomerEmploymentInfo[];
  bankAccounts: BankAccountInfo[];
  ids: IdEmployee[];
  active: boolean;
  creationTime: string;
}

export interface PersonalModel {
  idNumber: string | null;
  idType: string | null;
  fullName: string;
  firstName: string | null;
  secondName: string | null;
  firstLastName: string | null;
  secondLastName: string | null;
  birthDate: string | null;
  civilStatus: string | null;
  phoneWhatsapp: string | null;
  phoneSMS: string | null;
  gender: GenderModel;
  nationality: string | null;
  currentAddress: AddressModel | null;
  currentEmployment: CustomerEmploymentInfo | null;
  addressConfirmation: AddressConfirmationModel | null;
  mainPhotoUri: string | null;
}

export enum GenderModel {
  Unknow = 0,
  Male = 1,
  Female = 2,
}

export interface AddressModel {
  street: string | null;
  noExterior: string | null;
  noInterior: string | null;
  colony: string | null;
  municipality: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zip: string | null;
  notes: string | null;
  lat: number | null;
  lon: number | null;
  created: string | null;
  isCurrent: boolean | null;
}

export interface CustomerEmploymentInfo {
  companyName: string | null;
  positionName: string | null;
  hireDate: string | null;
  endDate: string | null;
  monthsOfService: number | null;
  jobCategory: string | null;
  address: AddressModel | null;
  incomes: IncomeInfo[];
  created: string;
  isCurrent: boolean | null;
}

export interface IncomeInfo {
  netIncome: number;
  source: string;
  currency: string;
  frequency: string;
  senderName: string | null;
  relate: string | null;
}

export interface AddressConfirmationModel {
  userIdModified: string | null;
  lastModifiedDate: string | null;
  documentType: string | null;
  address: AddressModel | null;
}

export interface BankAccountInfo {
  accountNumber: string | null;
  cLABE: string | null;
  bank: string;
  acceptDeposits: boolean | null;
}

export interface IdEmployee {
  idType: string | null;
  idNumber: string | null;
  expirationDate: string | null;
  issuedDate: string | null;
  issuedByEntity: string | null;
  issuedByCountry: string | null;
  notes: string | null;
}

export type CustomerKiosk = {
  kioskId: string;
  kioskName: string;
  stations: CustomerStation[];
};

export type CustomerStation = {
  id: string;
  name: string;
  kioskName: string;
  deviceId: string;
};

export type KioskStationAssigned = {
  idKiosk: string;
  kioskName: string;
  idStation: string;
  stationName: string;
};

export enum IdCustomerEnum {
  None,
  INE,
  CveElector,
  SocialSecurity,
  RFC,
  CURP,
  BirthCertificate,
  Passport,
}
