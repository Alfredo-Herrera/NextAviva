import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0876DD',
    },
    secondary: {
      main: '#29D2D3',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1200,
      xl: 1200,
    },
  },
});

theme.typography.h1 = {
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '36px',
  lineHeight: '48px',
  letterSpacing: '-0.01em',
  [theme.breakpoints.up('sm')]: {
    fontSize: '64px',
    lineHeight: '80px',
    letterSpacing: '-0.02em',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '64px',
    lineHeight: '80px',
    letterSpacing: '-0.02em',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '64px',
    lineHeight: '80px',
    letterSpacing: '-0.02em',
  },
};

theme.typography.h2 = {
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '36px',
  lineHeight: '48px',
  letterSpacing: '-0.01em',
  [theme.breakpoints.up('sm')]: {
    fontSize: '48px',
    lineHeight: '60px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '56px',
    lineHeight: '72px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '64px',
    lineHeight: '80px',
  },
};

theme.typography.subtitle1 = {
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '28px',
  letterSpacing: '-0.01em',
  [theme.breakpoints.up('sm')]: {
    fontSize: '24px',
    lineHeight: '32px',
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
    lineHeight: '32px',
    textAlign: 'center',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '24px',
    lineHeight: '32px',
    textAlign: 'center',
  },
};

theme.typography.subtitle2 = {
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '-0.01em',
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',
  },
};

theme.typography.h4 = {
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '-0.01em',
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
    lineHeight: '28px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '18px',
    lineHeight: '28px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
    lineHeight: '28px',
  },
};

theme.typography.h3 = {
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '30px',
  lineHeight: '40px',
  letterSpacing: '-0.01em',
  [theme.breakpoints.up('sm')]: {
    fontSize: '36px',
    lineHeight: '48px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
    lineHeight: '60px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '48px',
    lineHeight: '60px',
  },
};

export default theme;
