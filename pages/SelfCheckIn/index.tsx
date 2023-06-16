import VideoCard from '@/atoms/VideoCard';
import SecondVideoCard from '@/atoms/VideoCard/SecondCard';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import { ReactElement, useEffect, useState } from 'react';

const SelfCheckIn = () => {
    const [play, setPlay] = useState(false);
    const [secondPlay, setSecondPlay] = useState(false);
    useEffect(() => {
        if (play) {
            const video = document.getElementById(
                'videoSelf'
            ) as HTMLVideoElement;
            video.addEventListener('timeupdate', () => {
                if (video.currentTime >= 184 && !secondPlay) {
                    setSecondPlay(true);
                }
            });
        }
    }, [play, secondPlay]);

    useEffect(() => {
        if (secondPlay) {
            const video = document.getElementById(
                'videoSelfDos'
            ) as HTMLVideoElement;
            video.play();
        }
    }, [secondPlay]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid item md={secondPlay ? 6 : 12} sm={secondPlay ? 6 : 12}>
                <VideoCard playVideo={setPlay} play={play} />
            </Grid>
            <Grid item md={secondPlay ? 6 : 12} sm={secondPlay ? 6 : 12}>
                <Fade in={secondPlay} timeout={1000}>
                    <div>
                        <SecondVideoCard />
                    </div>
                </Fade>
            </Grid>
        </Grid>
    );
};

SelfCheckIn.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Dashboard">{page}</MainLayout>;
};

export default SelfCheckIn;
