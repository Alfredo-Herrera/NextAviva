import { InfoTab, ResponsePagination } from "./general";

export class AccountInfoResponseDto extends ResponsePagination<AccountInfo>{
    tabs: InfoTab[] = [];
}

export interface AccountInfo {
    id: string;
    active: boolean;
    accountType: AccountType;
    status: AccountStatus;
    balance: number;
    linkedTo: AccountLinkTo | null;
    fundingTo: AccountManagedBy | null;
    creationTime: string;
}

export enum AccountType {
    Unknown,
    Master,
    Regular,
    Savings,
    Guarantee,
    Checking
}

export enum AccountStatus {
    Unknown,
    Open,
    Locked,
    Closed
}

export interface AccountLinkTo {
    itemId: number | null;
    itemType: AccountLinkItemType;
}

export enum AccountLinkItemType {
    Unknown,
    Customer,
    Loan
}

export interface AccountManagedBy {
    linkType: LinkManagementValues;
    managedAccountId: string | null;
}

export enum LinkManagementValues {
    None = 0,
    LoanPro = 1,
    Pomelo = 2
}