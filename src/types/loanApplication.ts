import { InfoTab, ResponsePagination } from "./general";
import { KioskModel } from "./kiosk";

export class LoanApplicationResponseDto extends ResponsePagination<LoanApplicationInfo>{
    tabs: InfoTab[] = [];
}

export type LoanApplicationSource = {
    sessionId: string;
    interviewId: string;
    kiosk: KioskModel;
};

export type DecisionInput = {
    call: any;
};


export type LoanApplicationInfo = {
    id: string;
    customerId: string;
    firstSource: LoanApplicationSource;
    lastSource: LoanApplicationSource;
    sources: LoanApplicationSource[];
    customerData: LoanCustomerData;
    customerAddress: LoanCustomerAddress;
    decisionInput: any;
    decisionOutput: any;
    decisionDate: Date;
    approvedByDecision: boolean;
    approved: boolean;
};


export type LoanCustomerData = {
    name: string;
    phone: string;
    idType: string;
    idNumber: string;
    birthDate: Date;
    gender: string;
};

export type LoanCustomerAddress = {
    street: string;
    noExterior: string;
    noInterior: string;
    colony: string;
    municipality: string;
    city: string;
    state: string;
    country: string;
    zip: string;
};
