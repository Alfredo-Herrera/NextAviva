import { LoadingButton } from '@mui/lab';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';

type CustomerDialogStarCallProp = {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
};

export const CustomerDialogStarCall = ({
    showModal,
    setShowModal,
}: CustomerDialogStarCallProp) => {
    const [loading, setLoading] = useState(false);
    const handleDialogClose = () => {
        const componentTextField = document.getElementById(
            'TextFieldPreCheckIn'
        ) as HTMLInputElement;
        componentTextField!.value = '';
        setShowModal(false);
    };

    const codeCheck = (value: string | any[]) => {
        if (value.length === 6) {
            setLoading(true);
            setTimeout(() => {
                window.location.href = `/dashboard/continueInterview/${value}`;
            }, 2000);
        }
    };

    return (
        <Dialog fullWidth open={showModal} onClose={handleDialogClose}>
            <DialogTitle>Aviva Credito</DialogTitle>
            <DialogContent>
                <Stack spacing={2} marginTop={2} marginBottom={2}>
                    <Typography variant="h5" textAlign="center">
                        Escriba el código que le fue proporcionado después del
                        pre-registro
                    </Typography>
                    <Stack justifyContent="center" spacing={5}>
                        <TextField
                            id="TextFieldPreCheckIn"
                            InputProps={{ style: { fontSize: '1.6rem' } }}
                            InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                codeCheck(event.target.value);
                            }}
                            sx={{
                                input: {
                                    textAlign: 'center',
                                },
                            }}
                        />
                        <LoadingButton
                            fullWidth
                            loading={loading}
                            variant="contained"
                            sx={{ height: '64px', fontSize: '1.6rem' }}
                        >
                            Iniciar Llamada
                        </LoadingButton>
                    </Stack>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    );
};
