import { TimerPhoto } from '@/atoms/TimerPhoto';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import CloseIcon from '@mui/icons-material/Close';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Box, Fab, Stack } from '@mui/material';
import { FC, useRef, useState } from 'react';
import Webcam from 'react-webcam';

type TakeSimpleDocumentProp = {
    closeDocument: () => void;
    nextQuestion: any;
};

const TakePhoto: FC<TakeSimpleDocumentProp> = ({
    closeDocument,
    nextQuestion,
}) => {
    const display = true;
    const webcamRef = useRef<Webcam>(null);
    const [waitUserMaedia, setWaitUserMedia] = useState<boolean>(true);
    const [showTimer, setShowTimer] = useState<boolean>(false);
    const [blockButtonPhoto, setBlockButtonPhoto] = useState<boolean>(false);
    const [facingMode, setFacingMode] = useState<'user' | 'environment'>(
        'user'
    );
    const onUserMedia = (a: any) => {
        setWaitUserMedia(() => false);
    };

    const handleCapture = async () => {
        setBlockButtonPhoto(false);
        const imageSrc = webcamRef?.current?.getScreenshot();
        closeDocument();
        nextQuestion();
    };
    return (
        <Box id="345" sx={{ width: '100%', height: '100%' }}>
            <Webcam
                forceScreenshotSourceSize={true}
                imageSmoothing={true}
                screenshotQuality={1}
                ref={webcamRef}
                videoConstraints={{ facingMode: facingMode }}
                className="cam-fullscreen"
                screenshotFormat="image/jpeg"
                onUserMedia={onUserMedia}
            />
            <TimerPhoto
                show={showTimer}
                fontSize={100}
                fontColorStart={'rgb(180, 200, 220)'}
                decrease={true}
                initTimer={5}
                stopTime={() => {
                    setShowTimer(() => false);
                    handleCapture();
                }}
            />
            <Stack
                direction="row"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around;',
                    alignItems: 'flex-end',
                    width: '100%',
                    height: '90%',
                }}
            >
                <Fab
                    onClick={() => {}}
                    size="medium"
                    sx={{
                        fontSize: {
                            xs: '1.1em',
                            sm: '1.4em',
                            md: '1.5em',
                            lg: '1.7em',
                            xl: '1.8em',
                        },
                        backgroundColor: 'rgba(0, 0, 0, 0.5); !important',
                        '&:hover, .Mui-focusVisible': {
                            backgroundColor: 'rgba(0, 0, 0, 0.5); !important',
                        },
                    }}
                >
                    <CameraswitchIcon />
                </Fab>

                <Fab
                    disabled={blockButtonPhoto}
                    variant="extended"
                    onClick={() => {
                        setShowTimer(true);
                        setBlockButtonPhoto(() => true);
                    }}
                    sx={{
                        fontSize: {
                            xs: '1.1em',
                            sm: '1.4em',
                            md: '1.5em',
                            lg: '1.7em',
                            xl: '1.8em',
                        },
                    }}
                >
                    <PhotoCameraIcon sx={{ fontSize: '2em' }} />
                    Tomar foto
                </Fab>

                <Fab
                    disabled={blockButtonPhoto}
                    onClick={() => closeDocument()}
                    size="medium"
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5); !important',
                        '&:hover, .Mui-focusVisible': {
                            backgroundColor: 'rgba(0, 0, 0, 0.5); !important',
                        },
                        fontSize: {
                            xs: '1.1em',
                            sm: '1.4em',
                            md: '1.5em',
                            lg: '1.7em',
                            xl: '1.8em',
                        },
                    }}
                >
                    <CloseIcon />
                </Fab>
            </Stack>
        </Box>
    );
};

export default TakePhoto;
