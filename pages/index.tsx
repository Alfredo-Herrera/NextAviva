import MainLayout from '@/layouts/MainLayout/MainLayout';
import CardPageKiosks from '@/molecules/CardPageKiosks';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';

const Home = () => {
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
                <CardPageKiosks
                    href="/dashboard/Call"
                    urlImage="/illustrations/CallVideo.png"
                    title="Llamada Agente"
                />
            </Grid>
            <Grid
                item
                md={4}
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                }}
            >
                <CardPageKiosks
                    href="/dashboard/selfCheckIn"
                    urlImage="/illustrations/CallCenter.png"
                    title={'Pre Registro'}
                />
            </Grid>
        </Grid>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Dashboard">{page}</MainLayout>;
};

export default Home;
