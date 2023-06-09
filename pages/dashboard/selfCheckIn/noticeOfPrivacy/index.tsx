import { ImageContainer2 } from '@/atoms/StylesPageSelfCheckIn';
import { CustomerAgreementText } from '@/molecules/CustomerAgreementText';
import { CustomerTCText } from '@/molecules/CustomerTCText';
import { LoadingButton } from '@mui/lab';
import { Grid, Stack, styled } from '@mui/material';
import { useState } from 'react';
import breakpoints from '../../../../styles/theme/breakpoints';

const TextContainer = styled(Stack)`
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

const noticeOfPrivacy = () => {
    const [loading, setloading] = useState(false);
    return (
        <>
            <ImageContainer2 src="/logo/AvivaLogoWithoutCreditWord.svg" />
            <Grid
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    height: '100vh',
                }}
            >
                <TextContainer>
                    <CustomerAgreementText />
                    <CustomerTCText />
                </TextContainer>
                <Grid>
                    <LoadingButton
                        type="button"
                        size="large"
                        onClick={() => {
                            setloading(true);
                            setTimeout(() => {
                                window.location.href =
                                    '/dashboard/interview/selfCheckIn';
                            }, 4000);
                        }}
                        loading={loading}
                        variant="contained"
                    >
                        Acepto Terminos y Condiciones
                    </LoadingButton>
                </Grid>
            </Grid>
        </>
    );
};

export default noticeOfPrivacy;
