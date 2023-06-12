import {
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from '@mui/material';

import { STATE_MX } from '../../../config/config';
import palette from '../../../styles/theme/palette';
import { ButtonNextCuestion } from './styles';

const Form = () => {
    return (
        <Stack
            spacing={5}
            alignItems="center"
            justifyContent="center"
            paddingBottom={5}
            marginTop="2% !important"
        >
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                sx={{ marginTop: '0 !important' }}
            >
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        variant="standard"
                        name="name"
                        label="Nombre"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        variant="standard"
                        name="firstLastName"
                        label="Apellido paterno"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        variant="standard"
                        name="secondLastName"
                        label="Apellido materno"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="standard"
                        name="CURP"
                        label="CURP"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="standard"
                        name="street"
                        label="Calle"
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        variant="standard"
                        name="suburb"
                        label="Colonia"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        variant="standard"
                        name="city"
                        label="Ciudad"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        variant="standard"
                        fullWidth
                        name="municipality"
                        label="Municipio"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl
                        variant="standard"
                        sx={{ minWidth: '100%', maxHeight: '100px' }}
                    >
                        <InputLabel>Estado</InputLabel>
                        <Select
                            fullWidth
                            sx={{ maxHeight: '100px' }}
                            name="state"
                            MenuProps={{
                                PaperProps: { sx: { maxHeight: 250 } },
                            }}
                            variant="standard"
                        >
                            {STATE_MX.map((item, index) => (
                                <MenuItem
                                    key={`${item.value}${item.display}${index}`}
                                    value={item.value}
                                >
                                    {item.display}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText
                            sx={{ color: palette.light.error.main }}
                        ></FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        variant="standard"
                        name="zipCode"
                        label="C.P"
                        inputProps={{ maxLength: 5 }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel>Pais</InputLabel>
                        <Select fullWidth name="country" variant="standard">
                            <MenuItem value="MX">México</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'grid',
                        placeItems: 'center',
                        marginTop: '10px',
                    }}
                >
                    <ButtonNextCuestion variant="contained" color="primary">
                        Continuar con la siguiente pregunta
                    </ButtonNextCuestion>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Form;
