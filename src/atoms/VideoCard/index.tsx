import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/system/Box';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies

const VideoCard = () => {
    const [play, setPlay] = useState(false);
    return (
        <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            {play ? (
                <video
                    id="video"
                    width="100%"
                    height="100%"
                    style={{
                        maxHeight: '600px',
                        maxWidth: '400px',
                    }}
                    autoPlay
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
            ) : (
                <Box
                    sx={{
                        maxHeight: '600px',
                        maxWidth: '400px',
                        borderRadius: '10px',
                        display: 'flex',
                    }}
                >
                    <img
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
                        }}
                        src="./illustrations/ImagenVideo.png"
                        alt="foto1"
                    />
                    <IconButton
                        sx={{ left: '-60%' }}
                        color="info"
                        onClick={() => setPlay(true)}
                    >
                        <PlayCircleFilledTwoToneIcon />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};

export default VideoCard;
