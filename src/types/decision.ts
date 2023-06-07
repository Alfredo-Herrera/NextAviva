import { ResponsePagination } from './general';

export class ResponseListDto extends ResponsePagination<DecisionProgramDto> {
  tabs: ProgramTab[] = [];
}

export interface AddProgramResult {
  id: string;
  programName: string;
  version: number;
}

export interface RuleParamsInfo {
  name: string;
  expression: string;
}

export enum RuleExpressionType {
  LambdaExpression,
}

export interface RuleActionsInfo {
  onSuccess: RuleActionInfo;
  onFailure: RuleActionInfo;
}

export interface RuleRunInfo {
  startDate: string | null;
  finishDate: string | null;
  rule: RuleInfo;
  instanceID: number;
  isSuccess: boolean;
  inputs: { [key: string]: any };
  exceptionMessage: string;
  childRulesRunResult: RuleRunInfo[];
  actionResult: RuleActionRunInfo;
}

export interface RuleActionInfo {
  name: string;
  context: { [key: string]: any };
}

export interface RuleActionRunInfo {
  output: any;
  exception: any;
  results: RuleRunInfo[];
}

export interface RuleInfo {
  ordinal: number;
  name: string;
  operator: string;
  errorMessage: string;
  localParams: RuleParamsInfo[];
  expression: string;
  enabled: boolean;
  rules: RuleInfo[];
  ruleExpressionType: RuleExpressionType;
  actions: RuleActionsInfo;
  successEvent: string;
}

export interface WorkflowInfo {
  name: string;
  globalParams: RuleParamsInfo[];
  ruleSet: RuleInfo[];
}

export interface MatrixInfo {
  iD: string;
  vectorX: string[];
  vectorY: string[];
  rows: string[][];
}

// To add new program
export interface DecisionProgramAddNewDto {
  programName: string;
  version: number;
  category: string;
  expireDate?: string;
  mainWorkFlowName: string;
  matrixes: MatrixInfo[];
  workFlows: WorkflowInfo[];
}

// To add update program
export interface DecisionProgramUpdateDto {
  programName: string;
  category: string;
  expireDate?: string;
  mainWorkFlowName: string;
  matrixes: MatrixInfo[];
  workFlows: WorkflowInfo[];
}

// To display in the list
export interface DecisionProgramDto {
  id: string;
  programName: string;
  version: number;
  category: string;
  createdDate?: string;
  expireDate?: string;
  creator?: string;
  mainWorkFlowName: string;
}

export interface DecisionProgramInfo {
  id: string;
  programName: string;
  version: number;
  category: string;
  createdDate?: string;
  expireDate?: string;
  creator?: string;
  mainWorkFlowName: string;
  matrixes: MatrixInfo[];
  workFlows: WorkflowInfo[];
}

export type ProgramTab = {
  value: string;
  label: Date;
  color: Date;
  count: Date;
};

export interface DecisionProvider {
  id: string;
  providerName: string;
  comments: string;
  resultProvider: string; // Enum ResultProvider,
  resultProviderTitle: string;
  extendData?: boolean;
}

export interface BuildFileResult {
  decisionApproved?: boolean;
  shortCode?: string;
  errors: MessageInfo[];
  messages: MessageInfo[];
}

export interface MessageInfo {
  title: string;
  message: string;
}

export enum ResultProvider {
  Unknow,
  Low,
  Medium,
  High,
  VeryHigh,
}

export type DecisionEditorProps = {
  readonly?: boolean;
  modeEditor: string;
  onChangeEditor?: (currentJson: any) => void;
};

export enum DecisionEditorMode {
  Code = 'code',
  View = 'view',
  Tree = 'tree',
  Text = 'text',
}
