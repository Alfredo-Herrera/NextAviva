import PlayIllustrationVideo from '@/assets/PlayVideo';
import { Box, Button, Grid } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import palette from '../../../styles/theme/palette';
import { GridContaineButton } from './styles';
// eslint-disable-next-line import/no-extraneous-dependencies

const VideoCard: FC<{ playVideo: any; play: boolean }> = ({ playVideo }) => {
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
                        src="https://drive.google.com/uc?export=download&id=1oBtOIDdU1RUKkgkcvuu-0SAs_h6pwodV"
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

export default VideoCard;
