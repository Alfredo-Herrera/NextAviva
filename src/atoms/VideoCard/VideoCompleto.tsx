import PlayIllustrationVideo from '@/assets/PlayVideo';
import { Box, Button, Grid } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import palette from '../../../styles/theme/palette';
import { GridContaineButton } from './styles';
// eslint-disable-next-line import/no-extraneous-dependencies

const VideoCompleto: FC<{ playVideo: any; play: boolean }> = ({
    playVideo,
}) => {
    const [play, setPlay] = useState(false);
    useEffect(() => {
        if (play) {
            const video = document.getElementById(
                'videoSelf'
            ) as HTMLVideoElement;
            video.play();
        }
    }, [play]);

    return (
        <Grid
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box>
                <video
                    id="videoSelf"
                    width={380}
                    height={600}
                    webkit-playsinline="true"
                    playsInline
                    preload="auto"
                    controls
                >
                    <source
                        src="https://staosdocumentssta.blob.core.windows.net/call-sessions/SelfCompleto.mp4?sp=r&st=2023-06-22T18:33:22Z&se=2024-06-23T02:33:22Z&spr=https&sv=2022-11-02&sr=b&sig=vASwiV6E5Zq4i6HzRfIRDK4DRW%2FE%2FamF0WUvZ6Tx2G0%3D"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </Box>
            {!play && (
                <>
                    <Box sx={{ position: 'absolute' }}>
                        <Image
                            src="/illustrations/ImagenVideo.png"
                            alt="foto1"
                            width={400}
                            height={600}
                        />
                    </Box>
                    <GridContaineButton>
                        <Button
                            onClick={() => {
                                setPlay(true);
                                playVideo(true);
                            }}
                        >
                            <PlayIllustrationVideo
                                circleFill={'#FDFDFD'}
                                playFill={palette.light.primary.main}
                            />
                        </Button>
                    </GridContaineButton>
                </>
            )}
        </Grid>
    );
};

export default VideoCompleto;
