import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import breakpoints from '../../../styles/theme/breakpoints';

export const GridContaineButton = styled(Grid)`
    position: absolute;
    left: 21%;
    top: 43%;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
        left: 44%;
        top: 45%;
    }
    @media (max-width: ${breakpoints.values.sm}px) {
        left: 33%;
        top: 43%;
    }
`;
