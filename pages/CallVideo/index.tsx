import VideoCard from '@/atoms/VideoCard';
import MainLayout from '@/layouts/MainLayout/MainLayout';
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
                if (video.currentTime >= 189 && !secondPlay) {
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
            <Grid item md={12} sm={12}>
                <VideoCard playVideo={setPlay} play={play} />
            </Grid>
        </Grid>
    );
};

SelfCheckIn.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Dashboard">{page}</MainLayout>;
};

export default SelfCheckIn;
