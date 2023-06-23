import { Box, Grid } from '@mui/material';
import { FC } from 'react';

const SecondVideoCard: FC = () => {
    return (
        <>
            <Grid sx={{ height: '100%', display: 'flex' }}>
                <Box>
                    <video
                        id="videoSelfDos"
                        width={600}
                        height={400}
                        webkit-playsinline="true"
                        playsInline
                        preload="auto"
                        controls
                    >
                        <source
                            src="https://drive.google.com/uc?export=download&id=1P02aplZ6NKS29WceG6dC5VGIUxHswdD8"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </Box>
            </Grid>
        </>
    );
};

export default SecondVideoCard;
