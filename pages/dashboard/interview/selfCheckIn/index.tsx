import {
    BoxContainerTitle,
    GridTitleContainer,
    TitleQuestion,
} from '@/atoms/StylesPageSelfCheckIn';
import { OldVideoPlayer } from '@/atoms/VideoPlayer';
import VideoAskAnswer from '@/organisms/VideoAskAnswer';
import { LoadingButton } from '@mui/lab';
import { Grid, styled } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { MockSelf } from '../../../../_mock/InterviewSelfCheckIn';
import breakpoints from '../../../../styles/theme/breakpoints';

export const ButtonLoading = styled(LoadingButton)`
    width: 95%;
    margin-top: 20px;
    font-size: 20px;
    @media only screen and (min-width: ${breakpoints.values.sm +
        1}px) and (max-width: ${breakpoints.values.md}px) {
        position: absolute;
        top: 82%;
        width: 60%;
        height: 62px;
    }
    @media (max-width: ${breakpoints.values.sm}px) {
        position: absolute;
        top: 82%;
        width: 95%;
    }
`;

const Interview = () => {
    const refVideo = useRef(null);
    const [cuestion, setCuestion] = useState(0);
    console.log('🚀 ~ file: index.tsx:35 ~ Interview ~ cuestion:', cuestion);
    const [viewData, setViewData] = useState(MockSelf[0]);
    console.log('🚀 ~ file: index.tsx:36 ~ Interview ~ viewData:', viewData);
    const [viewButtonNext, setViewButtonNext] = useState(false);
    const [loading, setLoading] = useState(false);
    const [viewDialog, setViewDialog] = useState(false);

    useEffect(() => {
        setViewData(MockSelf[cuestion]);
    }, [cuestion]);

    return (
        <Grid container sx={{ width: '100%', height: '100vh' }} id="1233">
            <Grid item md={6} xs={12} sx={{ width: '100%', height: '100vh' }}>
                <Grid sx={{ height: '100%' }}>
                    <OldVideoPlayer
                        url={viewData.urlVideo}
                        onEndVideo={() => {}}
                        refVideo={refVideo}
                        setViewQuestionButton={setViewButtonNext}
                    />
                </Grid>
            </Grid>

            <GridTitleContainer item md={6} xs={12}>
                <BoxContainerTitle>
                    <TitleQuestion
                        textAlign="center"
                        variant="h4"
                        text={viewData.title}
                    >
                        {viewData.title}
                    </TitleQuestion>
                    {viewButtonNext && (
                        <ButtonLoading
                            size="medium"
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                setLoading(true);
                                setTimeout(() => {
                                    setLoading(false);
                                    if (!viewData.component) {
                                        setCuestion(
                                            (prevState) => prevState + 1
                                        );
                                    } else {
                                        setViewDialog(true);
                                    }
                                }, 500);
                            }}
                            loading={loading}
                        >
                            {viewData.titleButton}
                        </ButtonLoading>
                    )}
                </BoxContainerTitle>
            </GridTitleContainer>
            <VideoAskAnswer
                openDialog={viewDialog}
                closeDialog={() => {
                    setViewDialog(false);
                }}
                nextQuestion={() => {
                    setCuestion((prevState) => prevState + 1);
                }}
                component={viewData.component}
            />
        </Grid>
    );
};

export default Interview;
