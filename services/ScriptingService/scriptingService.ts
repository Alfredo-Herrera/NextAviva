import { CreditCustomerResponseType } from '@/types/credit';
import {
  ActionCommandInput,
  ActionCommandOutputModel,
  CreateInterview,
  Interview,
  InterviewMetadata,
  InterviewUpdateModel,
  QuestionUpdate,
} from '@/types/scripting';
import { SessionScripting } from '@/types/session';
import { SCRIPT_API } from '../../config/config';
import { axiosInstance } from '../../utils/axios';

export const scriptingAPI = {
  getCustomerDataByInterview: (interviewId: string | undefined) => {
    axiosInstance.defaults.baseURL = SCRIPT_API;
    return axiosInstance.get<CreditCustomerResponseType>(
      `CustomScripting/Interview/${interviewId}/CustomerData`
    );
  },
  getInterview: (id: string | undefined) => {
    axiosInstance.defaults.baseURL = SCRIPT_API;
    return axiosInstance.get<Interview>(`scripting/Interview/${id}`);
  },
  createInterview: (model: CreateInterview) => {
    axiosInstance.defaults.baseURL = SCRIPT_API;
    return axiosInstance.post<Interview>(`scripting/Interview`, model);
  },
  updateQuestion: (
    id: string | undefined,
    questionUpdate: QuestionUpdate[]
  ) => {
    axiosInstance.defaults.baseURL = SCRIPT_API;
    return axiosInstance.put<InterviewUpdateModel>(
      `scripting/Interview/${id}`,
      questionUpdate
    );
  },
  updateMetadata: (
    id: string | undefined,
    metadataUpdate: InterviewMetadata[]
  ) => {
    axiosInstance.defaults.baseURL = SCRIPT_API;
    return axiosInstance.put<InterviewUpdateModel>(
      `scripting/Interview/${id}/Metadata`,
      metadataUpdate
    );
  },
  actionButton: (model: ActionCommandInput) => {
    axiosInstance.defaults.baseURL = SCRIPT_API;
    return axiosInstance.post<ActionCommandOutputModel>(
      `scripting/ActionCommand`,
      model
    );
  },
  interviewPlainAnswer: (id: string | undefined) => {
    axiosInstance.defaults.baseURL = SCRIPT_API;
    return axiosInstance.get<SessionScripting>(
      `scripting/Interview/Session/${id}/plain/Answer`
    );
  },
  copyAnswer: (interviewId: string | undefined) => {
    axiosInstance.defaults.baseURL = SCRIPT_API;
    return axiosInstance.post(`scripting/Interview/${interviewId}/CopyAnswer`);
  },
};

export default scriptingAPI;
