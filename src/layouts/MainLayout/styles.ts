import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export const ContainerBody = styled(Grid)`
  margin: 0px 11px 0px 11px;
  height: 80vh;
  ${(props) => props.theme.breakpoints.up('sm')} {
    margin: 0px 40px 0px 40px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    margin: 0px 112px 0px 112px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin: 0px 112px 0px 112px;
  }
`;
