import * as React from 'react';
import DefaultLayout from '../src/components/layouts/DefautLayout';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Link, Grid, Box, Typography, Container, Checkbox } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../src/components/Theme';
import Api from '../src/api';

export default function SignUp() {

    Api.defaults.withCredentials = true;

    const register = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        Api.post("auth/register", {
            name: data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <ThemeProvider theme={Theme()}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.third' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registro
                    </Typography>
                    <Box component="form" noValidate onSubmit={register} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Nome de usuario"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Senha"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" sx={{
                                        color: 'primary.third', '&.Mui-checked': {
                                            color: 'primary.third',
                                        }
                                    }} />}
                                    label="Quero receber notificações no meu email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3, mb: 2, bgcolor: "primary.third", color: "primary.light",
                                '&:hover': { bgcolor: "#223D5C" }
                            }}
                        >
                            Registrar
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Já tem uma conta? Login
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

SignUp.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    );
}