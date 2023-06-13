import VideoCard from '@/atoms/VideoCard';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';

const SelfCheckIn = () => {
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid
                item
                md={4}
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                }}
            >
                <VideoCard />
            </Grid>
            <Grid
                item
                md={4}
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                }}
            ></Grid>
        </Grid>
    );
};

SelfCheckIn.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Dashboard">{page}</MainLayout>;
};

export default SelfCheckIn;
