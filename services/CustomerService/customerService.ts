import { Customer, CustomerResponseDto } from '@/types/customer';
import { DecisionLoanApplicationDtoList } from '@/types/customerManagement';
import { DecisionProgramUpdateDto } from '@/types/decision';
import { DecisionTestRunAllListDto } from '@/types/decisionOutput';
import {
  LoanInfo,
  LoanResponseDto,
  LoanResponseWithCustomerDto,
} from '@/types/loan';
import {
  LoanApplicationInfo,
  LoanApplicationResponseDto,
} from '@/types/loanApplication';
import { CUSTOMER_API } from '../../config/config';
import { axiosInstance } from '../../utils/axios';

export const customerAPI = {
  GetLoanApplicationInfoBySessionId: (sessionId: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<LoanApplicationInfo>(
      `LoanApplication/SearchBySessionId/${sessionId}`
    );
  },

  GetLoansApplicationInfoByCustomerId: (customerId: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<LoanApplicationInfo[]>(
      `LoanApplication/SearchByCustomerId/${customerId}`
    );
  },

  SearchLoanApplicationInfo: (filter?: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<LoanApplicationResponseDto>(
      `LoanApplication/SearchLoans${filter}`
    );
  },

  SearchDecisionLoanApplicationInfo: (filter?: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<DecisionLoanApplicationDtoList>(
      `LoanDecision/LoanApplication/Search${filter}`
    );
  },

  PostLoanDecisionProgramRun: (
    program: DecisionProgramUpdateDto,
    loanApplicationIds: string[]
  ) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.post<DecisionTestRunAllListDto>(
      `LoanDecision/Decide/Program/Run`,
      { ProgramInfo: program, LoanApplicationIds: loanApplicationIds }
    );
  },

  GetCustomers: (filter?: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.post<CustomerResponseDto>(
      `/Customer/SearchCustomers${filter}`
    );
  },

  GetCustomerDetail: (idCustomer: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<Customer>(`/Customer/Detail/${idCustomer}`);
  },

  GetPersonalInformationDetail: (idCustomer: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<Customer>(
      `/Customer/${idCustomer}/PersonalInformation`
    );
  },

  GetLoanApplicationDetail: (idLoan: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<LoanApplicationInfo>(
      `/LoanApplication/Detail/${idLoan}`
    );
  },

  GetLoans: (filter?: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<LoanResponseDto>(`Loan/Search/${filter}`);
  },

  GetLoansWithCustomer: (filter?: string) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<LoanResponseWithCustomerDto>(
      `Loan/SearchWithCustomer/${filter}`
    );
  },

  GetLoanInfo: (loanId: number) => {
    axiosInstance.defaults.baseURL = CUSTOMER_API;
    return axiosInstance.get<LoanInfo>(`/Loan/${loanId}`);
  },
};
