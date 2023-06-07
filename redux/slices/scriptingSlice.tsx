import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Interview, InterviewQuestion, InterviewQuestionAnswered, InterviewQuestionAnsweredError, QuestionUpdate } from "src/shared/@types/scripting"
import scriptingAPI from "src/shared/services/scriptingService"
import documentAPI from "src/shared/services/documentService"
import { NewDocument } from "src/shared/@types/document"

export interface ScriptingState {
    interview: {
        error: any,
        errorDocument: any,
        loading: boolean,
        interviewInfo: Interview,
        indexQuestion: number,
        idCode: string | undefined,
        questionId: string | undefined,
        sessionId: string,
    }
}

const initialState: ScriptingState = {
    interview: {
        error: null,
        errorDocument: null,
        loading: false,
        interviewInfo: {
            id: '',
            sessionId: '',
            scriptName: '',
            questions: [],
            hiddenQuestions: [],
            hiddenSections: []
        },
        indexQuestion: 0,
        idCode: '',
        questionId: '',
        sessionId: ''

    }
}

function ModifyQuestions(questions: InterviewQuestion[], hiddenQuestions: string[], hiddenSections: string[], loading?: boolean, responseActionCommand?: any) {
    if (!Array.isArray(questions)) {
        return;
    }
    questions.forEach(question => {

        if (loading !== undefined) {
            question.loading = loading;
        }
        const idCode = hiddenQuestions.find(item => item === question.idCode);
        if (idCode) {
            question.visible = false;
        } else {
            if (question.visible === false) {
                question.showForConditional = true;
            }
            question.visible = true;
        }
        if (responseActionCommand) {
            question.responseActionCommand = responseActionCommand;
        }

        ModifyQuestions(question.childQuestions, hiddenQuestions, hiddenSections, loading, responseActionCommand);
    });
}

function ModifyQuestionsByUpdate(questionsUpdated: QuestionUpdate[], questions: InterviewQuestion[], hiddenQuestions: string[], hiddenSections: string[], loading?: boolean, error?: any) {
    if (!Array.isArray(questions)) {
        return;
    }

    questionsUpdated.forEach(questionUpdated => {
        questions.forEach(question => {
            if (question.questionId === questionUpdated.questionId || question.idCode === questionUpdated.questionIdCode) {
                question.valueText = questionUpdated.answer;
                question.checked = questionUpdated.checked;
                question.error = error;
                question.update = questionUpdated;

                if (question.isMulti) {
                    question.valueMulti = questionUpdated.answer?.split('|') ?? [];
                }
                if (loading !== undefined) {
                    question.loading = loading;
                }

                ModifyQuestions(question.childQuestions, hiddenQuestions, hiddenSections, loading);
            } else {
                ModifyQuestionsByUpdate(questionsUpdated, question.childQuestions, hiddenQuestions, hiddenSections, loading, error)
            }
        });
    });
}

export const scriptingSlice = createSlice({
    name: 'scripting',
    initialState,
    reducers: {
        createInterview: (state, action: PayloadAction<boolean>) => {
            state.interview.loading = action.payload;
            state.interview.interviewInfo = {} as Interview;
        },
        createInterviewSuccess: (state, action: PayloadAction<Interview>) => {
            state.interview.loading = false;
            state.interview.error = false;
            state.interview.sessionId = action.payload.sessionId;
            state.interview.interviewInfo.id = action.payload.id;
            state.interview.interviewInfo.sessionId = action.payload.sessionId;
            state.interview.interviewInfo.scriptName = action.payload.scriptName;
            ModifyQuestions(action.payload.questions, action.payload.hiddenQuestions, action.payload.hiddenSections, false, false);
            state.interview.interviewInfo.questions = action.payload.questions;
            state.interview.interviewInfo.hiddenQuestions = action.payload.hiddenQuestions;
            state.interview.interviewInfo.hiddenSections = action.payload.hiddenSections;

            action.payload.questions.forEach((item, index) => {
                if (item.valueText !== null && item.valueText !== undefined) {
                    state.interview.indexQuestion = index + 1;
                    state.interview.idCode = item.idCode;
                }
            });
        },
        createInterviewError: (state, action: PayloadAction<any>) => {
            state.interview.loading = false;
            ModifyQuestions(action.payload.questions, action.payload.hiddenQuestions, action.payload.hiddenSections, false, false);
            state.interview.error = action.payload;

        },
        updateQuestion: (state, action: PayloadAction<QuestionUpdate[]>) => {
            state.interview.loading = false;
            ModifyQuestionsByUpdate(action.payload, state.interview.interviewInfo.questions, state.interview.interviewInfo.hiddenQuestions, state.interview.interviewInfo.hiddenSections, true, undefined)
        },
        updateQuestionSuccess: (state, action: PayloadAction<InterviewQuestionAnswered>) => {
            state.interview.loading = false;
            state.interview.error = false;
            ModifyQuestions(state.interview.interviewInfo.questions, action.payload.interview.hiddenQuestions, action.payload.interview.hiddenSections, false, false);
        },
        updateQuestionError: (state, action: PayloadAction<InterviewQuestionAnsweredError>) => {
            state.interview.loading = false;
            state.interview.error = action.payload;
            ModifyQuestionsByUpdate(action.payload.questionsUpdated, state.interview.interviewInfo.questions, state.interview.interviewInfo.hiddenQuestions, state.interview.interviewInfo.hiddenSections, false, action.payload.error);
        },
        setCurrentQuestion: (state, action: PayloadAction<{ index: number, idCode: string, questionId: string }>) => {
            state.interview.indexQuestion = action.payload.index;
            state.interview.idCode = action.payload.idCode;
            state.interview.questionId = action.payload.questionId;
        },
        documentSuccess: (state, action: PayloadAction) => {
            state.interview.errorDocument = false;
        },
        documentError: (state, action: PayloadAction<any>) => {
            state.interview.errorDocument = action.payload;
        },

    },
});

export const createInterviewAction = (sessionId: string, scriptCategoryId: string, extraParams?: {}) => async (dispatch) => {
    dispatch(createInterview(true))
    try {
        const response = await scriptingAPI.createInterview({ categoryId: scriptCategoryId, sessionId: sessionId, extraParams: extraParams });
        dispatch(createInterviewSuccess(response.data))
    } catch (error) {
        dispatch(createInterviewError(error))
        console.log(`API Request Error: ${error.message}`);
    }
}

export const setCurrentQuestionAction = (index: number, idCode: string, questionId: string) => async (dispatch) => {
    dispatch(setCurrentQuestion({ index, idCode, questionId }));
}

export const updateQuestionAction = (interviewId: string, questions: QuestionUpdate[]) => async (dispatch) => {
    dispatch(updateQuestion(questions))
    try {
        const response = await scriptingAPI.updateQuestion(interviewId, questions);
        dispatch(updateQuestionSuccess({ questionsUpdated: questions, interview: response.data }));
    } catch (error) {
        dispatch(updateQuestionError({ questionsUpdated: questions, error: error }))
        console.log(`API Request Error: ${error.message}`);
    }
}

export const SaveDocumentAction = (saveModel: NewDocument) => async (dispatch) => {
    try {
        await documentAPI.addDocument(saveModel);
        dispatch(documentSuccess());
    } catch (error) {
        // snackbar.error(`API Request Error: ${error.message}`);
        dispatch(documentError(error));
        console.log(`API Request Error: ${error.message}`);
        throw error;
    }
}

export const {
    createInterview,
    createInterviewSuccess,
    createInterviewError,
    updateQuestion,
    setCurrentQuestion,
    updateQuestionSuccess,
    updateQuestionError,
    documentError,
    documentSuccess
} = scriptingSlice.actions

export default scriptingSlice.reducer