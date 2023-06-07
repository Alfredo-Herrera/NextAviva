import { InfoTab, ResponsePagination } from "./general";


export class DecisionLoanApplicationDtoList extends ResponsePagination<DecisionLoanApplicationDto>{
    tabs: InfoTab [] = [];    
}

export type DecisionLoanApplicationDto = {
    id: string;
    sessionId: string;
    interviewId: string;
    kioskId: string;
    kioskName: string;
    idType: string;
    idNumber: string;
    firstName: string;
    secondName: string;
    firstLastName: string;
    secondLastName: string;
    askedLoanAmount?: number;
    source?: string;
    paymentday?: string;
    approvedByDecision?: boolean;
    approved?: boolean;
    outputBag?: any;
};

export type SessionAD = {
    token: string | null,
    user: string | null
}