import {
    BoxContainerTitle,
    ButtonVideoAgre,
    ButtonVideoNextPreCheckIn,
    GridTitleContainer,
    TitleQuestion,
} from '@/atoms/StylesPageSelfCheckIn';
import { OldVideoPlayer } from '@/atoms/VideoPlayer';
import { CustomerDialogStarCall } from '@/molecules/CustomerDialogStarCall';
import { Grid } from '@mui/material';
import { useRef, useState } from 'react';

const SelfCheckIn = () => {
    const Title = '¡Bienvenido! Estás listo para avivarte?';
    const refVideo = useRef(null);
    const [viewButtonNext, setViewButtonNext] = useState(false);
    const [viewModal, setViewModal] = useState(false);

    return (
        <Grid container sx={{ width: '100%', height: '100vh' }} id="1233">
            <Grid item md={6} xs={12} sx={{ width: '100%', height: '100vh' }}>
                <Grid sx={{ height: '100%' }}>
                    <OldVideoPlayer
                        url={'/video.mp4'}
                        onEndVideo={() => {}}
                        refVideo={refVideo}
                        setViewQuestionButton={setViewButtonNext}
                    />
                </Grid>
            </Grid>

            <GridTitleContainer item md={6} xs={12}>
                <BoxContainerTitle>
                    <TitleQuestion textAlign="center" variant="h4" text={Title}>
                        {Title}
                    </TitleQuestion>
                    {viewButtonNext && (
                        <>
                            <ButtonVideoAgre
                                variant="contained"
                                size="large"
                                onClick={() => {
                                    window.location.href =
                                        '/dashboard/selfCheckIn/noticeOfPrivacy';
                                }}
                            >
                                Siguiente
                            </ButtonVideoAgre>
                            <ButtonVideoNextPreCheckIn
                                variant="contained"
                                size="large"
                                onClick={() => {
                                    setViewModal(true);
                                }}
                            >
                                Ya hice Pre - Registro
                            </ButtonVideoNextPreCheckIn>
                        </>
                    )}
                </BoxContainerTitle>
            </GridTitleContainer>
            <CustomerDialogStarCall
                showModal={viewModal}
                setShowModal={setViewModal}
            />
        </Grid>
    );
};

export default SelfCheckIn;
