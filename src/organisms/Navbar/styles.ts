import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';

export const MobileContainer = styled(Box)`
  flex-direction: row-reverse;
`;

export const DesktopContainer = styled(Box)`
  flex-direction: row-reverse;
`;
export const ToolBarStyles = styled(Toolbar)``;

export const AppBarStyles = styled(AppBar)`
  background: black;
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
  }
`;

export const MenuStyles = styled(Menu)`
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
  }
`;
