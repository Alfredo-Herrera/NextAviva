import { TransitionDialogUp } from '@/atoms/TransitionDialogUp';
import { Dialog, DialogContent } from '@mui/material';
import { Dispatch, FC } from 'react';
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
                <TakePhoto
                    closeDocument={closeDialog}
                    nextQuestion={nextQuestion}
                />
            </DialogContent>
        </Dialog>
    );
};

export default VideoAskAnswer;
