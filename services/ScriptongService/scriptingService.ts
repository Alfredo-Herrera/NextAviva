import { SessionScripting } from 'src/shared/@types/session';
import { ActionCommandInput, ActionCommandOutputModel, CreateInterview, Interview, InterviewUpdateModel, QuestionUpdate } from '../@types/scripting';
import { SCRIPT_API } from '../config';
import { axiosInstance } from '../utils/axios';

export const scriptingAPI = {

    getInterview: (id: string | undefined) => {
        axiosInstance.defaults.baseURL = SCRIPT_API;
        return axiosInstance.get<Interview>(`scripting/Interview/${id}`);
    },
    createInterview: (model: CreateInterview) => {
        axiosInstance.defaults.baseURL = SCRIPT_API;
        return axiosInstance.post<Interview>(`scripting/Interview`, model);
    },
    updateQuestion: (id: string | undefined, questionUpdate: QuestionUpdate[]) => {
        axiosInstance.defaults.baseURL = SCRIPT_API;
        return axiosInstance.put<InterviewUpdateModel>(`scripting/Interview/${id}`, questionUpdate);
    },
    actionButton: (model: ActionCommandInput) => {
        axiosInstance.defaults.baseURL = SCRIPT_API;
        return axiosInstance.post<ActionCommandOutputModel>(`scripting/ActionCommand`, model);
    },
    interviewPlainAnswer: (id: string | undefined) => {
        axiosInstance.defaults.baseURL = SCRIPT_API;
        return axiosInstance.get<SessionScripting>(`scripting/Interview/Session/${id}/plain/Answer`);
    }
}

export default scriptingAPI;