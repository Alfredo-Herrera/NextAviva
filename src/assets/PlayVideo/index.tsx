import { FC } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

type playVideoProps = {
  circleFill: string;
  playFill: string;
};

const PlayIllustrationVideo: FC<playVideoProps> = ({
  circleFill = '#fff',
  playFill = '#000',
}) => (
  <Box>
    <svg fill="none" height="96" width="96" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48z"
        fill={circleFill}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M37.326 33.822c0-2.408 2.695-3.835 4.687-2.481l20.862 14.178c1.752 1.19 1.752 3.772 0 4.963L42.013 64.66c-1.992 1.354-4.687-.072-4.687-2.48V33.821z"
        fill={playFill}
        fillRule="evenodd"
      />
    </svg>
  </Box>
);

export default PlayIllustrationVideo;
