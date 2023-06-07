import { ProgramTab } from './decision';
import { ResponsePagination } from './general';

export class ResponseListInputDto extends ResponsePagination<DecisionInputDto> {
  tabs: ProgramTab[] = [];
}

export interface AddInputResult {
  id: string;
  inputName: string;
}

export interface DecisionInputAddNewDto {
  inputName: string;
  call: Call;
  loanRequest: LoanRequest;
  customer: Customer;
  dataPoints: DataPoints;
  validation: { [key: string]: any };
}

export interface DecisionInputUpdateDto {
  inputName: string;
  call: Call;
  loanRequest: LoanRequest;
  customer: Customer;
  dataPoints: DataPoints;
  validation: { [key: string]: any };
}

export interface DecisionInputDto {
  id: string;
  inputName: string;
  createdDate?: string | null;
  creator?: string | null;
  updateDate?: string | null;
  updater?: string | null;
}

export interface DecisionInputInfo {
  id: string;
  inputName: string;
  createdDate?: string | null;
  creator?: string | null;
  updateDate?: string | null;
  updater?: string | null;
  call: Call;
  loanRequest: LoanRequest;
  customer: Customer;
  dataPoints: DataPoints;
  validation: { [key: string]: any };
}

export interface DecisionInput {
  call: Call;
  loanRequest: LoanRequest;
  customer: Customer;
  dataPoints: DataPoints;
  validation: { [key: string]: any };
}

export interface Address {
  street: string;
  noExterior: string;
  noInterior: string | null;
  city: string | null;
  state: string;
  colony: string;
  municipality: string;
  country: string;
  gPos: GPos | null;
  notes: string | null;
  propertyType: string | null;
  monthsLivingHere: number | null;
}

export interface BankAccount {
  cardNumber: string | null;
  bank: string;
  acceptDeposits: string | null;
  clabe: string | null;
}

export interface Buro {
  persona: Persona;
  fico: Score;
  fis: Score;
  lines: Line[];
}

export interface Call {
  kioskID: string;
  stationID: string;
  request: string;
  start: string | null;
  end: string | null;
  agentID: string;
  script: Script | null;
}

export interface CommunicationPreference {
  priority: number;
  whatsApp: string | null;
  email: string | null;
}

export interface Contact {
  priority: number;
  phoneCall: string | null;
  whatsApp: string | null;
  email: string | null;
}

export interface CurrentEmployment {
  companyName: string | null;
  positionName: string | null;
  monthsOfService: number | null;
  jobCategory: string | null;
  address: Address | null;
  incomes: Income[];
  senderName: string | null;
  relate: string | null;
}

export interface Customer {
  formerAnalysis: FormerAnalysis | null;
  firstName: string | null;
  lastName: string | null;
  secondLastName: string | null;
  birthDate: string | null;
  phoneNumber: string | null;
  id: Id[];
  address: Address | null;
  education: Education | null;
  bankAccounts: BankAccount[];
  communicationPreferences: CommunicationPreference[];
  currentEmployment: CurrentEmployment[];
  previousEmployments: PreviousEmployment[];
  references: Reference[] | null;
}

export interface DataPoints {
  tiaxa: Tiaxa;
  buro: Buro;
}

export interface Education {
  maxLevel: string;
}

export interface Face {
  sentiment: string;
  note: string | null;
}

export interface FormerAnalysis {
  previousCustomer: string;
  previousInterviewed: string;
  interviews: string[];
}

export interface GPos {
  lat: number;
  lon: number;
}

export interface Id {
  idType: string;
  idNumber: string;
  expiration: string | null;
}

export interface Income {
  netIncome: number;
  source: string;
  currency: string;
  frequency: string;
}

export interface Lender {
  type: string;
  name: string;
}

export interface Line {
  status: string;
  type: string | null;
  openDate: string | null;
  cvePrevencion: string | null;
  balance: number | null;
  pastDueBalance: number | null;
  mop: string | null;
  mops: string[] | null;
  currency: string;
  lender: Lender;
  closedDate: string | null;
}

export interface LoanRequest {
  amount: number;
  currency: string | null;
  proposal: string | null;
}

export interface Persona {
  nationality: string | null;
}

export interface PreviousEmployment {
  companyName: string;
  positionName: string | null;
  netIncome: number;
  source: string | null;
  currency: string | null;
  frequency: string | null;
  monthsOfService: number | null;
}

export interface Reference {
  fullName: string;
  relate: string | null;
  contact: Contact[] | null;
  address: Address | null;
}

export interface Score {
  value: number | null;
  reasons: string[];
}

export interface Script {
  reference: string;
  transcript: Transcript[];
}

export interface Tiaxa {
  resultCode: string | null;
  score_risk: number | null;
  score_nohit: number | null;
  score_phone: number | null;
  score_fraud: number | null;
}

export interface Transcript {
  ts: string;
  q: string;
  a: string;
  intent: string | null;
  sentiment: number | null;
  face: Face | null;
}
