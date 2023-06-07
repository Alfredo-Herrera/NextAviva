export type CreditBureauInquiriesType = {
    id: string,
    name: string,
    age: string,
    inquiries: string,
    creditLines: string,
    scores: string,
    address: string,
    request: any,
    response: any,
    rawRequest: any,
    rawResponse: any
};

export type CreditBureauAuthorizationsType = {
    id: string,
    name: string;
    requestedDate: Date;
    termsAndConditionsApprovalDate?: Date;
    approvalDate?: Date;
    pinApprovalDate?: Date;
    pinNumber: string;
    pinExpiration?: Date;
    phoneNumber?: string;
    phoneNumberAcceptWhatsApp?: boolean;
    phoneNumberAcceptSms?: boolean;
    email?: string;
    address: string;
    idTypeInfo: string;
    idType: string;
    captureNipAttempt: number;
    captureNipMaxReached: boolean;
};

export type PhoneScoreInquiriesType = {
    id: string,
    countryCode: string,
    phone: string,
    scores: string,
    request: any,
    response: any,
    rawRequest: any,
    rawResponse: any
};