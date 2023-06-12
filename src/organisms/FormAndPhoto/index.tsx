import { DataOcrForm } from '@/types/document';
import { Box, Fab, Grid, Typography } from '@mui/material';
import { FC, useState } from 'react';
import Form from './Form';
import {
    GridContainerPhoto,
    GridContainerText,
    TextTakeaPhoto,
} from './styles';

const FormAndPhoto: FC<{
    imgSrc: string;
    existForm: boolean;
    nextQuestion: any;
    closeDocument: () => void;
}> = ({ imgSrc, existForm, nextQuestion, closeDocument }) => {
    const [ocrForm, setOcrForm] = useState<DataOcrForm>({});
    const [validData, setValidData] = useState<boolean>(false);

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
                <GridContainerText existForm item xl={6} md={6}>
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
            </Grid>
            <Grid>
                <Form />
            </Grid>
        </Grid>
    );
};

export default FormAndPhoto;
