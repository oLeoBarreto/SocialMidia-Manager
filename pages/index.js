import * as React from 'react';
import DefaultLayout from '../src/components/layouts/DefautLayout';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../src/components/Theme';
import Api from '../src/api';

export default function SignIn() {

    const [loginStatus, setLoginStatus] = React.useState("");
    Api.defaults.withCredentials = true;

    const login = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        Api.post("http://localhost:5000/auth/login", {
            email: data.get('email'),
            password: data.get('password'),
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
            }
        });
    };

    React.useEffect(() => {
        Api.get("auth/login").then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].username);
            }
        });
    }, []);

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
                        Login
                    </Typography>
                    <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" sx={{
                                color: 'primary.third', '&.Mui-checked': {
                                    color: 'primary.third',
                                }
                            }} />}
                            label="Lembrar"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3, mb: 2, bgcolor: "primary.third", color: "primary.light",
                                '&:hover': { bgcolor: "#223D5C" }
                            }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Ainda não tem um conta? Registrar-se"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider >
    );
}

SignIn.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    );
}