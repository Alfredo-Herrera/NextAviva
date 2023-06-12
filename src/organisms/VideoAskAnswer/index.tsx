import { TransitionDialogUp } from '@/atoms/TransitionDialogUp';
import { Dialog, DialogContent } from '@mui/material';
import { Dispatch, FC } from 'react';
import MultiSelect from '../MultiSelect';
import TakePhoto from '../TakePhoto';

type VideoAskAnswerProp = {
    openDialog: boolean;
    closeDialog: () => void;
    nextQuestion: Dispatch<React.SetStateAction<number>>;
    component: string;
};

const VideoAskAnswer: FC<VideoAskAnswerProp> = ({
    openDialog,
    closeDialog,
    nextQuestion,
    component,
}) => {
    const backgroundDialog = ['photo', 'photoIne'].includes(component)
        ? 'rgba(255, 255, 255)'
        : 'rgba(255, 255, 255, 0.7)';
    const propsWidth = ['photo', 'photoIne', 'credit'].includes(component)
        ? {
              maxWidth: '100% !important',
              maxHeight: '100% !important',
              height: '100%',
          }
        : {};

    const propsComponets = {
        closeDocument: closeDialog,
        nextQuestion: nextQuestion,
    };

    return (
        <Dialog
            open={openDialog}
            onClose={closeDialog}
            disableEscapeKeyDown={false}
            TransitionComponent={TransitionDialogUp}
            PaperProps={{
                sx: {
                    margin: '0px !important',
                    borderRadius: '0px !important',
                    position: 'absolute',
                    bottom: 0,
                    background: backgroundDialog,
                    ...propsWidth,
                },
            }}
            fullWidth
        >
            <DialogContent sx={{}} dividers>
                {component === 'photo' && (
                    <TakePhoto {...propsComponets} ine={false} />
                )}
                {component === 'multiSelection' && (
                    <MultiSelect {...propsComponets} />
                )}
                {component === 'photoIne' && (
                    <TakePhoto {...propsComponets} ine />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default VideoAskAnswer;
