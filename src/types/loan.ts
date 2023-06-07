import { LinkManagementValues } from "./account";
import { PersonalModel } from "./customer";
import { InfoTab, ResponsePagination } from "./general";

export class LoanResponseDto extends ResponsePagination<LoanInfoDto>{
    tabs: InfoTab[] = [];
}

export class LoanResponseWithCustomerDto extends ResponsePagination<LoanInfoWithPersonaDto>{
    tabs: InfoTab[] = [];
}

export interface LoanInfoWithPersonaDto extends LoanInfoDto {
    customer: PersonalModel;
}

export interface LoanInfoDto {
    id: string;
    customerId: string;
    loanApplicationId: string;
    closedDate: string;
    contractDate: string;
    loanAmount: number;
    payOffAmount: number;
    principalBalance: number;
    stopLight: StopLight;
    loanType: LoanType;
    paymentTerms: number;
    loanFrecuency: PaymentFrecuency;
    status: LoanStatus;
    lastSync: string;
}

export interface LoanInfo {
    id: string;
    customerId: string;
    loanApplicationId: string;
    closedDate: string | null;
    contractDate: string;
    setupInfo: SetupInfo;
    dueInfo: DueInfo;
    lastPaymentInfo: PaymentsInfo;
    nextPaymentInfo: PaymentsInfo;
    statusInfo: StatusInfo;
    accounts: AccountInfoRef[];
    managedBy: LinkManagementValues;
    managedAccountId: string | null;
    settings: EntitySettingModel[];
    lastSync: SyncInfo;
    creationTime: string;
    lastModificationTime: string | null;
}

export interface SetupInfo {
    loanType: LoanType;
    loanAmount: number;
    paymentFrequency: PaymentFrecuency;
    paymentTerms: number;
    interestRate: number;
    interestRateType: InterestRateType;
}

export enum LoanType {
    Unknown,
    Installment
}

export enum PaymentFrecuency {
    Unknown,
    Annually,
    Monthly,
    Biweekly,
    Weekly,
    Daily
}

export enum InterestRateType {
    Unknown,
    Annually,
    Monthly,
    Daily
}

export interface DueInfo {
    dayPastDue: number;
    delinquentBucket: number;
    duePni: number;
}

export interface PaymentsInfo {
    amount: number;
    date: string;
    info: string | null;
}

export interface StatusInfo {
    payOffAmount: number;
    principalBalance: number;
    stopLight: StopLight;
    isActive: boolean;
    currentStatus: LoanStatus;
    currentSubStatus: LoanSubStatus;
}

export enum StopLight {
    Unknown,
    Red,
    Yellow,
    Green
}

export enum LoanStatus {
    Unknown,
    Application,
    Open,
    Closed
}

export enum LoanSubStatus {
    Unknown,
    ApplicationReceived,
    PaidOff,
    Performing,
    EarlyPayoff,
    ChargedOff
}

export interface AccountInfoRef {
    accountId: number;
    type: AccountType;
}

export enum AccountType {
    Unknown,
    Master,
    Regular,
    Savings,
    Guarantee,
    Checking
}

export interface EntitySettingModel {
    name: string;
    value: string | null;
}

export interface SyncInfo {
    date: string;
    message: string | null;
    direction: string | null;
}