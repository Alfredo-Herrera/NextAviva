import { Box, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import breakpoints from '../../../styles/theme/breakpoints';

export const GridContainerPhoto = styled(Grid)`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
        height: auto;
    }
    @media (max-width: ${breakpoints.values.sm}px) {
        height: auto;
    }
`;

export const GridContainer = styled(Box)`
    height: 100%;
    width: 100%;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
    }
    @media (max-width: ${breakpoints.values.sm}px) {
    }
`;

export const ButtonNextCuestion = styled(Button)`
    font-size: 20px;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
    }
    @media (max-width: ${breakpoints.values.sm}px) {
    }
`;

export const TextTakeaPhoto = styled(Box)`
    z-index: 1;
    color: #f6f6f7;
    background: rgb(0, 0, 0, 0.45);
    padding: 10px;
    border-radius: 10px;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
    }
    @media (max-width: ${breakpoints.values.sm}px) {
    }
`;

export const GridContainerText = styled(Grid)<{ existForm: boolean }>`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    position: ${(props) => (props.existForm ? 'absolute' : '')};
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
        height: 50%;
    }
    @media (max-width: ${breakpoints.values.sm}px) {
        height: 50%;
        font-size: 16px !important;
    }
`;

export const GridContainerAnalisisText = styled(Grid)<{ existForm: boolean }>`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    position: ${(props) => (props.existForm ? 'absolute' : '')};
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
        height: 0;
    }
    @media (max-width: ${breakpoints.values.sm}px) {
        height: 0;
        font-size: 16px !important;
    }
`;

export const GridContainerForm = styled(Grid)`
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
    }
    @media (max-width: ${breakpoints.values.sm}px) {
    }
`;

export const PhotoContainer = styled(Box)`
    height: 100%;
    width: 100%;
    overflow-y: scroll;
`;
