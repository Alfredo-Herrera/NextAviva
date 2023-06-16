import { Box, Grid } from '@mui/material';
import { FC } from 'react';

const SecondVideoCard: FC = () => {
    return (
        <>
            <Grid sx={{ height: '100%', display: 'flex' }}>
                <Box>
                    <video
                        id="videoSelfDos"
                        width={400}
                        height={600}
                        webkit-playsinline="true"
                        playsInline
                        preload="auto"
                        controls
                    >
                        <source
                            src="https://drive.google.com/uc?export=download&id=1UWDXdDdO2b6Dz0ajcYF49cfwpwe-DJBY"
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
