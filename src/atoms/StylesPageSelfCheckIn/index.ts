import styled from '@emotion/styled';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import breakpoints from '../../../styles/theme/breakpoints';
import palette from '../../../styles/theme/palette';

export const ImageContainer2 = styled('img')`
    width: 100%;
    height: 100%;
    objectfit: cover;
    position: fixed;
    filter: opacity(30%);
    padding: 150px;
    z-index: -10;
    @media (max-width: ${breakpoints.values.sm}px) {
        padding: 100px;
    }
`;

export const TitleQuestion = styled(Typography)<{ text: any }>`
    color: ${(props) => palette.light.primary.main};
    width: 95%;
    text-align: ${(props) =>
        props.text.length > 40 ? 'inherit' : 'center'} !important;
    font-size: 40px;
    background: rgba(255, 255, 255, 0.5);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
        position: absolute;
        top: 10%;
        width: 75%;
        text-align: ${(props) =>
            props.text.length > 30 ? 'inherit' : 'center'} !important;
        font-size: ${(props) => (props.text.length > 20 ? '33px' : '40px')};
    }
    @media (max-width: ${breakpoints.values.sm}px) {
        position: absolute;
        top: 13%;
        text-align: ${(props) =>
            props.text.length > 30 ? 'inherit' : 'center'} !important;
        font-size: ${(props) => (props.text.length > 20 ? '23px' : '26px')};
    }
`;

export const TextContainer = styled(Stack)`
    height: 550px;
    width: 80%;
    overflow-y: scroll;
    z-index: 100;
    padding: 35px;
    border: rgb(180, 200, 220) 5px solid;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
        height: 700px;
    }
    @media (max-width: ${breakpoints.values.sm}px) {
        height: 400px;
    }
`;

export const ButtonVideoAgre = styled(Button)`
    width: 300px;
    margin-top: 20px;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
        position: absolute;
        width: 300px;
        top: 78%;
    }
    @media (max-width: ${breakpoints.values.sm}px) {
        position: absolute;
        left: 10%;
        top: 73%;
        width: 300px;
    }
`;

export const ButtonVideoNextPreCheckIn = styled(Button)`
    width: 300px;
    margin-top: 20px;
    background: #ed771c;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
        position: absolute;
        width: 300px;
        top: 84%;
    }
    @media (max-width: ${breakpoints.values.sm}px) {
        position: absolute;
        left: 10%;
        top: 82%;
        width: 300px;
    }
`;

export const GridTitleContainer = styled(Grid)`
    display: grid;
`;

export const BoxContainerTitle = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
    }
    @media (max-width: ${breakpoints.values.sm}px) {
    }
`;

export const TitlteStyle = styled(Typography)`
    color: rgb(18, 62, 209);
    text-align: inherit;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
        position: absolute;
        width: 300px;
        left: 28%;
        top: 12%;
    }
    @media (max-width: ${breakpoints.values.sm}px) {
        position: absolute;
        left: 0%;
        top: 12%;
    }
`;
