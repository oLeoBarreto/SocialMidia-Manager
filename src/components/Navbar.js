import { AppBar, Box, Toolbar, Badge, Menu, MenuItem, Avatar, IconButton, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NotificationsOutlined } from "@mui/icons-material";
import Theme from "./Theme";
import appConfig from '../../config.json';

const theme = Theme();

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: appConfig.theme["Prymary"],
        },
    },
});

export default function Navbar({ children }) {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={theme} >
                    <AppBar
                        position="static"
                        color="primary"
                    >
                        <Toolbar>
                            <Typography
                                edge="start"
                                variant="h6"
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                {children}
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <IconButton
                                    size="large"
                                    color="inherit"
                                >
                                    <Badge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                        badgeContent=" "
                                        color="error"
                                    >
                                        <NotificationsOutlined
                                            sx={{ fontSize: 35, color: appConfig.theme["Tertiary"] }}
                                        />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    color="inherit"
                                >
                                    <Badge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        badgeContent=" "
                                        color="success"
                                    >
                                        <Avatar src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                                    </Badge>
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </Box>
        </>
    );
}