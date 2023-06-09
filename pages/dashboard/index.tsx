import MainLayout from '@/layouts/MainLayout/MainLayout';
import CardPageKiosks from '@/molecules/CardPageKiosks';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';

const Dasboard = () => {
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
                md={6}
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
                md={6}
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

Dasboard.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Dashboard">{page}</MainLayout>;
};

export default Dasboard;
