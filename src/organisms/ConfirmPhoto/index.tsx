import { Box, CircularProgress, Fab, Grid, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import FormAndPhoto from '../FormAndPhoto';
import {
    GridContainerAnalisisText,
    GridContainerPhoto,
    GridContainerText,
    TextTakeaPhoto,
} from './styles';

const ComfirmPhoto: FC<{
    imgSrc: string;
    existForm: boolean;
    nextQuestion: any;
    closeDocument: () => void;
    ine: boolean;
}> = ({ imgSrc, existForm, nextQuestion, closeDocument, ine }) => {
    const [checkIne, setcheckIne] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setcheckIne(true);
        }, 3000);
    }, []);

    if (checkIne) {
        return (
            <FormAndPhoto
                imgSrc={imgSrc}
                existForm
                nextQuestion={nextQuestion}
                closeDocument={closeDocument}
            />
        );
    }

    return (
        <Grid sx={{ display: 'grid', placeItems: 'center' }}>
            <Grid container sx={{ width: '100%', height: '100%' }}>
                <GridContainerPhoto item xl={6} md={6}>
                    <Box>
                        <img
                            alt="preview"
                            src={imgSrc}
                            style={{
                                textAlign: 'center',
                                zIndex: -1,
                                borderRadius: '10px',
                                maxWidth: '100%',
                            }}
                        />
                    </Box>
                </GridContainerPhoto>

                {!ine ? (
                    <GridContainerText existForm={existForm} item xl={6} md={6}>
                        <TextTakeaPhoto>
                            <Typography variant="h3">
                                ¿Confirma que la foto salio correcta?
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                }}
                            >
                                <Fab
                                    disabled={false}
                                    onClick={() => {
                                        nextQuestion();
                                        closeDocument();
                                    }}
                                    sx={{
                                        backgroundColor:
                                            'rgba(76, 217, 130, 0.8); !important',
                                        '&:hover, .Mui-focusVisible': {
                                            backgroundColor:
                                                'rgba(76, 217, 130, 0.8); !important',
                                        },
                                    }}
                                >
                                    Si
                                </Fab>
                                <Fab
                                    disabled={true}
                                    onClick={() => () => {}}
                                    sx={{
                                        backgroundColor:
                                            'rgba(0, 0, 0, 0.5); !important',
                                        '&:hover, .Mui-focusVisible': {
                                            backgroundColor:
                                                'rgba(0, 0, 0, 0.5); !important',
                                        },
                                    }}
                                >
                                    No
                                </Fab>
                            </Box>
                        </TextTakeaPhoto>
                    </GridContainerText>
                ) : (
                    <GridContainerAnalisisText
                        existForm={false}
                        item
                        xl={6}
                        md={6}
                        sm={12}
                        xs={12}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginTop: '20px',
                            }}
                        >
                            <Typography variant="h4">
                                Analizando documento...
                            </Typography>
                            <CircularProgress sx={{ marginTop: '10px' }} />
                        </Box>
                    </GridContainerAnalisisText>
                )}
            </Grid>
        </Grid>
    );
};

export default ComfirmPhoto;
