import { snackbar } from '@/atoms/Snackbar'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MagicLinkEvent, MagicLinkType } from 'src/shared/@types/magicLink'
import { linkAPI } from 'src/shared/services/linkService'

export interface MagicLinkState {
    checkUrlMagicLink: {
        error: any,
        loading: boolean,
        linkStatus: string | undefined
    },
    magicLink: {
        error: any,
        loading: boolean,
        sessionId: string | undefined,
        referenceSessionId: string | undefined,
        scriptCategoryId: string | undefined,
        isClosed: boolean | undefined
    },
    linkId: string | undefined,
    numDeviceCam: number,
}

const initialState: MagicLinkState = {
    checkUrlMagicLink: {
        error: null,
        loading: false,
        linkStatus: undefined,
    },
    magicLink: {
        error: null,
        loading: false,
        sessionId: undefined,
        referenceSessionId: undefined,
        scriptCategoryId: undefined,
        isClosed: undefined
    },
    linkId: undefined,
    numDeviceCam: 1
}
export const magicLinkSlice = createSlice({
    name: 'magicLink',
    initialState,
    reducers: {
        checkUrlMagicLinkInfo: (state, action: PayloadAction<boolean>) => {
            state.checkUrlMagicLink.loading = action.payload;
            state.checkUrlMagicLink.error = false;
            state.checkUrlMagicLink.linkStatus = undefined;
        },
        checkUrlMagicLinkInfoSuccess: (state, action: PayloadAction<string>) => {
            state.checkUrlMagicLink.loading = false;
            state.checkUrlMagicLink.error = false;
            state.checkUrlMagicLink.linkStatus = action.payload;
        },
        checkUrlMagicLinkInfoError: (state, action: PayloadAction<any>) => {
            state.checkUrlMagicLink.loading = false;
            state.checkUrlMagicLink.error = action.payload;
        },
        magicLinkInfo: (state, action: PayloadAction<boolean>) => {
            state.magicLink.loading = action.payload;
            state.magicLink.error = false;
            state.magicLink.sessionId = undefined;
        },
        magicLinkInfoSuccess: (state, action: PayloadAction<{ sessionId: string, referenceSessionId: string, scriptCategoryId: string, isClosed: boolean }>) => {
            state.magicLink.loading = false;
            state.magicLink.error = false;
            state.magicLink.sessionId = action.payload.sessionId;
            state.magicLink.scriptCategoryId = action.payload.scriptCategoryId;
            state.magicLink.referenceSessionId = action.payload.referenceSessionId;
            state.magicLink.isClosed = action.payload.isClosed;
        },
        magicLinkInfoError: (state, action: PayloadAction<any>) => {
            state.magicLink.loading = false;
            state.magicLink.error = action.payload;
        },
        setLinkId: (state, action: PayloadAction<string | undefined>) => {
            state.linkId = action.payload;
        },
        setNumDeviceCam: (state, action: PayloadAction<number>) => {
            state.numDeviceCam = action.payload;
        }
    },
})

export const CheckUrlMagicLinkInfoAction = (linkId: string, types: MagicLinkType[]) => async (dispatch) => {
    dispatch(checkUrlMagicLinkInfo(true))
    try {
        const response = await linkAPI.linkCheck(linkId, types);
        dispatch(checkUrlMagicLinkInfoSuccess(response.data))
    } catch (error) {
        dispatch(checkUrlMagicLinkInfoError(error))
        snackbar.error(`API Request Error: ${error.message}`);
    }
}

export const MagicLinkInfoAction = (linkId: string) => async (dispatch) => {
    dispatch(magicLinkInfo(true))
    try {
        const response = await linkAPI.getLink(linkId);
        dispatch(magicLinkInfoSuccess({
            sessionId: response.data.sessionId,
            referenceSessionId: response.data.referenceSessionId,
            scriptCategoryId: response.data.scriptCategoryId,
            isClosed: response.data.isClosed
        }))
    } catch (error) {
        dispatch(magicLinkInfoError(error))
        snackbar.error(`API Request Error: ${error.message}`);
    }
}

export const SendNotificationAction = async (linkId: string) => {
    try {
        const response = await linkAPI.sendNotification(linkId);
        return response.data;
    } catch (error) {
        snackbar.error(`API Request Error: ${error.message}`);
    }
}

export const IsPinMatchedAction = async (pin: string, linkId: string) => {
    try {
        const response = await linkAPI.isPinMatched(pin, linkId);
        return response.data;
    } catch (error) {
        snackbar.error(`API Request Error: ${error.message}`);
    }
}

// Set Link as Opened
export const UpdateAccesControlAction = async (linkId: string) => {
    try {
        const response = await linkAPI.updateAccesControl(linkId);
        return response.data;
    } catch (error) {
        snackbar.error(`API Request Error: ${error.message}`);
    }
}

export const AssignSessionAction = async (linkId: string, sessionId: string) => {
    try {
        const response = await linkAPI.assignSession(linkId, sessionId);
        return response.data;
    } catch (error) {
        snackbar.error(`API Request Error: ${error.message}`);
    }
}

export const AssignInterviewAction = async (linkId: string, interviewId: string) => {
    try {
        const response = await linkAPI.assignInterview(linkId, interviewId);
        return response.data;
    } catch (error) {
        snackbar.error(`API Request Error: ${error.message}`);
    }
}

export const TerminateAction = async (linkId: string) => {
    try {
        await linkAPI.terminate(linkId);
    } catch (error) {
        snackbar.error(`API Request Error: ${error.message}`);
    }
}

export const EventAction = async (linkId: string, event: MagicLinkEvent) => {
    try {
        const response = await linkAPI.event(linkId, event);
        return response.data;
    } catch (error) {
        snackbar.error(`API Request Error: ${error.message}`);
    }
}

export const SetLinkIdAction = (linkId: string | undefined) => (dispatch) => {
    dispatch(setLinkId(linkId))
}

export const SetNumDeviceCamAction = (numDevice: number) => (dispatch) => {
    dispatch(setNumDeviceCam(numDevice))
}

export const TokenAction = async () => {
    try {
        const response = await linkAPI.tokens();
        if (response.data?.length > 0)
            localStorage.setItem('tokens', JSON.stringify(response.data));

        response.data.map((token) => {
            localStorage.setItem(token.api, token.accessToken);
        });

    } catch (error) {
        snackbar.error(`API Request Error: ${error.message}`);
    }
}

export const
    {
        checkUrlMagicLinkInfo,
        checkUrlMagicLinkInfoSuccess,
        checkUrlMagicLinkInfoError,
        magicLinkInfo,
        magicLinkInfoSuccess,
        magicLinkInfoError,
        setLinkId,
        setNumDeviceCam,
    } = magicLinkSlice.actions

export default magicLinkSlice.reducer