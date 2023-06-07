import { ProgramTab } from './decision';
import { ResponsePagination } from './general';

export class ResponseOutputListDto extends ResponsePagination<DecisionOutputInfo> {
  tabs: ProgramTab[] = [];
}

export interface DecisionOutputInfo {
  id: string;
  runInfo: any;
}

export interface DecisionOutputModel {
  runInfo: any;
  approval?: string;
  testRate?: string;
  creditLimit?: number;
  customerSegment?: string;
  loanDuration?: string;
  riskLevel?: string;
  summaryTraceRules?: string[];
}

export class DecisionTestRunAllListDto extends ResponsePagination<DecisionTestRunUpdateDto> {
  tabs: ProgramTab[] = [];
}

export class DecisionTestRunListDto extends ResponsePagination<DecisionTestRunDto> {
  tabs: ProgramTab[] = [];
}

export interface DecisionTestRunDto {
  id: string;
  inputId?: string;
  programId?: string;
  testName?: string;
  createdDate?: string | null;
  creator?: string | null;
  updateDate?: string | null;
  updater?: string | null;
  status?: string;
}

export interface DecisionTestRunInfo {
  id: string;
  inputId?: string;
  programId?: string;
  testName?: string;
  createdDate?: string | null;
  creator?: string | null;
  updateDate?: string | null;
  updater?: string | null;
  outputBag: { [key: string]: any };
  validation: { [key: string]: any };
  workFlowRunInfo: any;
  diff?: boolean | null;
  status?: string;
}

export interface DecisionTestRunUpdateDto {
  id: string;
  inputId: string;
  programId: string;
  testName?: string;
  outputBag: { [key: string]: any };
  validation: { [key: string]: any };
  diff?: boolean | null;
  status?: string;
}

export interface DecisionTestRunAddNewDto {
  id: string;
  inputId: string;
  programId: string;
  testName?: string;
  outputBag: { [key: string]: any };
  validation: { [key: string]: any };
}

export interface AddTestRunResult {
  id: string;
  inputId?: string;
  programId?: string;
}
