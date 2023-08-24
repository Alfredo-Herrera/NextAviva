import MainLayout from '@/layouts/MainLayout/MainLayout';
import { Scanner } from '@/organisms/Scan';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Script from 'next/script';
import { ReactElement, useState } from 'react';

const Camera = () => {
    const [viewSacan, setviewSacan] = useState(false);
    const [jscan, setJscan] = useState(false);
    return (
        <>
            <Script src="https://docs.opencv.org/4.7.0/opencv.js" />
            <Script
                src="https://cdn.jsdelivr.net/gh/ColonelParrot/jscanify@master/src/jscanify.min.js"
                onLoad={() => {
                    setTimeout(() => {
                        setJscan(true);
                    }, 1000);
                }}
            />
            <Grid
                container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh',
                }}
            >
                <Button onClick={() => setviewSacan(true)}>dame click</Button>
                {viewSacan && jscan && <Scanner jscam={jscan} />}
            </Grid>
        </>
    );
};

Camera.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Dashboard">{page}</MainLayout>;
};

export default Camera;
