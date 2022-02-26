import { TrendingUpRounded, TvRounded, SettingsRounded, LogoDev, EventNoteRounded } from '@mui/icons-material';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Paper, Box } from '@mui/material';
import { useRouter } from 'next/router';
import appConfig from '../../config.json';

const sidebarData = [
    {
        label: "Calendar",
        icon: <EventNoteRounded />,
        link: "/calendar"
    },
    {
        label: "Dashboard",
        icon: <TrendingUpRounded />,
        link: "/dashboard"
    },
    {
        label: "Inbox",
        icon: <TvRounded />,
        link: "/Inbox"
    }
];

export default function Sidebar() {
    const route = useRouter();

    return (
        <Box
            sx={{
                maxWidth: 150,
                height: 1,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >
            <List
                sx={{
                    m: 0,
                    p: 0,
                    width: '100%',
                    height: 1,
                    bgcolor: appConfig.theme["Secondary"]
                }}
                component="nav"
                aria-label="contacts"
            >
                <ListItem
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <IconButton
                        aria-label="logo"
                        onClick={function (event) {
                            event.preventDefault();
                            route.push('/');
                        }}
                    >
                        <LogoDev sx={{
                            fontSize: 65,
                            color: appConfig.theme["light"]
                        }}
                        />
                    </IconButton>
                </ListItem>

                <Divider light variant="middle" />

                <ListItem disablePadding
                    sx={{
                        color: appConfig.theme["Tertiary"]
                    }}
                >
                    <ListItemButton
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        onClick={function (event) {
                            event.preventDefault();
                            route.push('/calendar');
                        }}
                    >
                        <ListItemIcon>
                            <EventNoteRounded sx={{
                                fontSize: 45,
                                color: appConfig.theme["Tertiary"]
                            }}
                            />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding
                    sx={{
                        color: appConfig.theme["Tertiary"]
                    }}
                >
                    <ListItemButton
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        onClick={function (event) {
                            event.preventDefault();
                            route.push('/dashboard');
                        }}
                    >
                        <ListItemIcon>
                            <TrendingUpRounded sx={{
                                fontSize: 45,
                                color: appConfig.theme["Tertiary"]
                            }} />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding
                    sx={{
                        color: appConfig.theme["Tertiary"]
                    }}
                >
                    <ListItemButton
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        onClick={function (event) {
                            event.preventDefault();
                            route.push('/inbox');
                        }}
                    >
                        <ListItemIcon>
                            <TvRounded sx={{
                                fontSize: 45,
                                color: appConfig.theme["Tertiary"]
                            }} />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}