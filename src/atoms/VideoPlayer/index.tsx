import PlayIllustrationVideo from '@/assets/PlayVideo';
import { Button, Grid } from '@mui/material';
import {
    Dispatch,
    MutableRefObject,
    SetStateAction,
    useEffect,
    useState,
} from 'react';
import palette from '../../../styles/theme/palette';
import { GridContaineButton } from './styles';

type VideoAskPlayProp = {
    url: string;
    mediaType?: string;
    topVideo?: string;
    topButton?: Dispatch<SetStateAction<boolean>>;
    onEndVideo: () => void;
    refVideo: MutableRefObject<HTMLVideoElement | null>;
    setViewQuestionButton: (arg0: boolean) => void;
};

export const OldVideoPlayer = ({
    url,
    mediaType,
    topVideo,
    topButton,
    onEndVideo,
    refVideo,
    setViewQuestionButton,
}: VideoAskPlayProp) => {
    const [viewButton, setViewButton] = useState(true);

    useEffect(() => {
        if (refVideo.current) {
            refVideo.current.oncanplay = () => {};
            refVideo.current!.addEventListener('ended', (event) => {
                setViewButton(true);
                onEndVideo();
            });
        }
        return () => {
            if (refVideo.current) {
                refVideo.current!.removeEventListener('ended', (event) => {
                    setViewButton(true);
                });
            }
        };
    }, [onEndVideo, refVideo, topButton, url]);

    useEffect(() => {
        if (mediaType === 'Video') {
            setViewButton(true);
        }
    }, [url]);

    const playVideo = () => {
        if (refVideo.current) {
            refVideo.current.currentTime = 0;
            refVideo.current.play();
            setViewButton(false);
            setTimeout(() => {
                setViewQuestionButton(true);
            }, 5000);
        }
    };

    return (
        <>
            <Grid sx={{ height: '100%' }}>
                <video
                    ref={refVideo}
                    src={`${url}`}
                    width="100%"
                    height="100%"
                    autoPlay
                    muted={viewButton}
                    webkit-playsinline="true"
                    playsInline
                    preload="auto"
                    style={{
                        objectFit: 'cover',
                        zIndex: '-1',
                    }}
                />
            </Grid>
            {viewButton && (
                <GridContaineButton sx={{ zIndex: '10' }}>
                    <Button
                        sx={{ marginBottom: '250px' }}
                        onClick={() => {
                            playVideo();
                        }}
                    >
                        <PlayIllustrationVideo
                            circleFill={'#FDFDFD'}
                            playFill={palette.light.primary.main}
                        />
                    </Button>
                </GridContaineButton>
            )}
        </>
    );
};
