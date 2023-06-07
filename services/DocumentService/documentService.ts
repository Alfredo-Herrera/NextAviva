import { axiosInstance, JSONToFormData } from '../utils/axios';
import { DOCUMENT_API } from '../config';
import { DocumentOCR, NewDocument, ResponseDocument } from 'src/shared/@types/document';
import { SessionDocument } from 'src/shared/@types/session';
import { FileContent } from 'src/shared/@types/call';

export const documentAPI = {
    addDocument: (saveModel: NewDocument) => {
        axiosInstance.defaults.baseURL = DOCUMENT_API;
        const formData = JSONToFormData(saveModel);
        return axiosInstance.post<ResponseDocument>(`/Document`, formData);
    },
    getDocument: (id: string) => {
        axiosInstance.defaults.baseURL = DOCUMENT_API; 
        return axiosInstance.get<ResponseDocument>(`/Document/${id}`);
    },
    downloadDocument: (id: string) => {
        axiosInstance.defaults.baseURL = DOCUMENT_API; 
        return axiosInstance.get<FileContent>(`/Document/${id}/download`);
    },
    updateDocument: (id: string, model: NewDocument ) => {
        const formData = JSONToFormData(model);
        axiosInstance.defaults.baseURL = DOCUMENT_API;
        return axiosInstance.put(`/Document/${id}`, formData); 
    },
    deleteDocument: (id: string) => {
        axiosInstance.defaults.baseURL = DOCUMENT_API; 
        return axiosInstance.delete(`/Document/${id}`);
    },
    searchDocumentsBySession: (sessionId: string) => {
        axiosInstance.defaults.baseURL = DOCUMENT_API;
        return axiosInstance.post<SessionDocument[]>(`/Document/SearchBySession/${sessionId}`);
    },
    searchDocumentsByQuestion: (interviewId: string, questionId: string) => {
        axiosInstance.defaults.baseURL = DOCUMENT_API;
        return axiosInstance.post<SessionDocument[]>(`/Document/Interview/${interviewId}/Question/${questionId}`);
    },
    getDocumentDetail: (documentId: string) => {
        axiosInstance.defaults.baseURL = DOCUMENT_API;
        return axiosInstance.get<SessionDocument>(`/Document/${documentId}/details`);
    },
    runDocumentOCR: (documentId: string) => {
        axiosInstance.defaults.baseURL = DOCUMENT_API;
        return axiosInstance.post<DocumentOCR>(`/Document/${documentId}/ocr`);
    }
}

export default documentAPI;