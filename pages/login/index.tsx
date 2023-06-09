// @mui
import LoginIcon from '@mui/icons-material/Login';
import { LoadingButton } from '@mui/lab';
import {
    Box,
    Card,
    Container,
    Stack,
    Tooltip,
    Typography,
} from '@mui/material';

import { styled } from '@mui/material/styles';
// hooks
// components
// sections
import Logo from '@/atoms/Logo';
import Image from 'next/image';
import { useState } from 'react';
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        padding: theme.spacing(7, 5, 0, 7),
    },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
    const smUp = useResponsive('up', 'sm');
    const mdUp = useResponsive('up', 'md');
    const [loading, setLoading] = useState(false);

    return (
        <RootStyle>
            <HeaderStyle>
                <Logo />
            </HeaderStyle>

            {mdUp && (
                <SectionStyle>
                    <Typography variant="h3" sx={{ px: 5, mt: 16, mb: 5 }}>
                        Hi, Welcome Back
                    </Typography>
                    <Image
                        src="/illustrations/login.svg"
                        alt="login"
                        width={400}
                        height={700}
                    />
                </SectionStyle>
            )}

            <Container maxWidth="sm">
                <ContentStyle>
                    <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h4" gutterBottom>
                                Sign in to Aviva
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Enter your details below.
                            </Typography>
                        </Box>

                        <Tooltip title={'Hola Mundo'} placement="right">
                            <>
                                <Image
                                    src="/logo/AvivaLogoWithoutCreditWord.svg"
                                    width={160}
                                    height={200}
                                    alt={''}
                                />
                            </>
                        </Tooltip>
                    </Stack>

                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        loading={loading}
                        endIcon={<LoginIcon />}
                        onClick={() => {
                            setLoading(true);
                            setTimeout(() => {
                                setLoading(false);
                                window.location.href = '/dashboard';
                            }, 4000);
                        }}
                    >
                        Login
                    </LoadingButton>
                </ContentStyle>
            </Container>
        </RootStyle>
    );
}
