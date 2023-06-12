import { PublishInBusMessage } from './call';
import { NotificationLevel } from './general';

export interface ResponseCommandProp {
    notificationLevel: NotificationLevel;
    responseCommand: any;
}

export interface Interview {
    id: string;
    sessionId: string;
    scriptName: string;
    questions: InterviewQuestion[];
    metadata: InterviewMetadata[];
    hiddenQuestions: string[];
    hiddenSections: string[];
}

export interface InterviewUpdateModel {
    id: string;
    sessionId: string;
    scriptName: string;
    changedQuestions: QuestionUpdate[];
    hiddenQuestions: string[];
    hiddenSections: string[];
}

export interface CreateInterview {
    sessionId: string;
    categoryId: string;
    extraParams?: {};
    hideQuestions?: boolean;
}
export interface InterviewQuestionAnsweredError {
    questionsUpdated: QuestionUpdate[];
    error: any;
}

export interface InterviewQuestionAnswered {
    questionsUpdated?: QuestionUpdate[];
    interview: InterviewUpdateModel;
}

export interface InterviewQuestionCommandActionResponse {
    questionsUpdated: string[];
    response: any;
}

export interface QuestionValueUpdateOCR {
    QuestionIdCode: string;
    Answer: string;
    Checked: boolean;
}

export interface MetadataValueUpdateOCR {
    Name: string;
    Content: string;
}

export interface InterviewMetadata {
    Id?: number;
    Name: string;
    Content: string;
}

export interface InterviewQuestion {
    loading: boolean;
    error: any;
    ordinal: number;
    title: string;
    questionId: string;
    idCode?: string;
    sectionId?: string;
    sectionIDCode?: string;
    sectionName: string;
    description?: string;
    intent?: string;
    emotion: QuestionEmotion;
    componentCaption?: string;
    componentType: string;
    componentOptions?: string;
    refreshSectionName: string;
    isMulti: boolean;
    childQuestions: InterviewQuestion[];
    valueText?: string;
    checked: boolean;
    valueMulti: string[];
    showForConditional: boolean;
    actionButton?: string;
    actionButtonName?: string;
    update: QuestionUpdate;
    visible?: boolean;
    responseActionCommand?: any;
    uncheckable: boolean;
    validationExpression?: string;
    mediaOption?: string;
    mediaType?: string;
    mediaValue?: string;
    isByOcr?: boolean;
}

export interface ScriptingItemProp {
    question: InterviewQuestion;
    interviewId: string;
    updateQuestion(question: QuestionUpdate[]): Promise<void>;
    showModal(title: string, content: string, notificationLevel: string): void;
    update: QuestionUpdate;
    loading: boolean;
    index: number;
    isChild?: boolean | null;
}

export interface ScriptingBaseProp {
    interview: Interview | undefined;
}

export interface QuestionUpdate {
    questionId: string;
    questionIdCode?: string;
    answer?: string;
    control?: string;
    checked: boolean;
    sentiment?: AnswerSentiment;
    thinkingTimeInSeconds?: number;
    answerTime?: number;
    dateAsked: string;
    answeredByRole: UserRole;
    location?: string;
    nextQuestion?: string;
    isByOcr?: boolean;
}

export interface ActionCommandInput {
    command: string;
    sessionId: string;
    interviewId: string;
    questionId: string;
    control: ControlCommandModel;
}

export interface ControlCommandModel {
    type: string;
    value?: string | undefined;
}

export interface ActionCommandOutputModel {
    title: string;
    message: string;
    success: boolean;
    action: string;
    notification: string;
    notificationLevel: string;
}

export interface NotificationModel {
    Id: string;
    title: string;
    message: string;
    action?: string;
    retry?: PublishInBusMessage;
    notificationLevel: 'success' | 'info' | 'warning' | 'error' | undefined;
}

export interface ModalDataProp {
    isOpen: boolean;
    title?: string;
    content?: any;
    notificationLevel?: string;
}

export interface InterviewQuestionPlainModel {
    ordinal: number;
    title: string;
    questionId: string;
    iDCode?: string;
    sectionIDCode?: string;
    sectionName: string;
    description?: string;
    intent?: string;
    fieldName?: string;
    emotion?: QuestionEmotion;
    componentCaption?: string;
    componentType?: string;
    componentOptions?: string;
    isMulti: boolean;
    valueText?: string;
    valueMulti: string[];
    checked: boolean;
    actionButton?: string;
    actionButtonName?: string;
    location?: string;
}

export interface QuestionOCR {
    questionIdCode: string;
    answer: string;
    checked: boolean;
}

export interface MetadataOCR {
    name: string;
    content: string;
}

export interface ValidationExpression {
    type: string;
    value: string;
    message: string;
    params: string[];
}

export interface ConfigMediaOption {
    autoplay: boolean;
}

export enum NotificationType {
    Inline,
    Popup,
    Snackbar,
}

export enum QuestionEmotion {
    Neutral,
    Excited,
    Questioning,
}

export enum ControlType {
    None,
    RadiobuttonList,
    Checkbox,
    CheckboxList,
    DropDownList,
    TextBox,
    TextBoxNumber,
    TextBoxMultiLine,
    DropDownListMultiSelect,
    DatePicker,
    TimePicker,
    DateTimePicker,
    Label,
    ActionButton,
    AddressTextBox,
    PhoneBoxNumber,
    DocumentPhoto,
    ReferenceField,
    FacePhoto,
    Documents,
    TakeVideo,
    TakeAudio,
    CheckboxListMap,
    ValidatePin,
    CreditAuthInquiry,
    ValidatePhone,
    PermissionCheck,
    ContinueInterview,
    FinalQuestion = 50,
    FinalQuestionResponse = 51,
}

export enum UserRole {
    Undetermined, // Imposible to determine; This case should never happen; only if an error ocurred.
    OperatorInBehalf, // Operator answer the question after user tells the answer
    Operator, // Operator answer the question without asking the user (obvious questions)
    Customer, // Customer answer the question (when customer have the ability to interact with the app)
    Supervisor, // A Supervisor answer the question.
    SystemInBehalf, // System answer the question after interpret customer answer.
    System, // System automatically answer the question because an obvious answer is determined.
    Other, // Other cases.
}

export enum AnswerSentiment {
    Undetermined,
    Neutral,
    Positive,
    Negative,
}

export enum MediaType {
    None,
    Imagen,
    Video,
}

export const WellKnownScriptingQuestionsID = {
    ID_name: 'Q8',
    ID_lastname: 'Q9',
    ID_secondlastname: 'Q9_1',
    ID_address: 'Q11',
    ID_curp: 'Q10',
    ID_continueInterview: 'QPC10',
};

export const KeyInterviewMetadata = {
    currentQuestion: 'currentQuestion',
    nextQuestion: 'nextQuestion',
};
