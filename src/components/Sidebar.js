import { TrendingUpRounded, TvRounded, SettingsRounded, LogoDev, EventNoteRounded } from '@mui/icons-material';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import appConfig from '../../config.json';

const datas = [
    {
        label: 'Calendar',
        icon: <EventNoteRounded />
    },
    {
        label: 'Dashboard',
        icon: <TrendingUpRounded />
    },
    {
        label: 'Inbox',
        icon: <TvRounded />
    },
    {
        label: 'settings',
        icon: <SettingsRounded />
    }
];

export default function Sidebar() {
    const route = useRouter();
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 280,
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
                <IconButton aria-label="logo">
                    <LogoDev sx={{
                        fontSize: 60,
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
                    onClick={function (event) {
                        event.preventDefault();
                        route.push('/calendar');
                    }}
                >
                    <ListItemIcon>
                        <EventNoteRounded sx={{
                            fontSize: 40,
                            color: appConfig.theme["Tertiary"]
                        }}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Calendar"
                        primaryTypographyProps={{
                            fontWeight: 'medium'
                        }}
                    />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding
                sx={{
                    color: appConfig.theme["Tertiary"]
                }}
            >
                <ListItemButton
                    onClick={function (event) {
                        event.preventDefault();
                        route.push('/dashboard');
                    }}
                >
                    <ListItemIcon>
                        <TrendingUpRounded sx={{
                            fontSize: 40,
                            color: appConfig.theme["Tertiary"]
                        }} />
                    </ListItemIcon>
                    <ListItemText
                        primary="Dashboard"
                        primaryTypographyProps={{
                            fontWeight: 'medium'
                        }}
                    />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding
                sx={{
                    color: appConfig.theme["Tertiary"]
                }}
            >
                <ListItemButton
                    onClick={function (event) {
                        event.preventDefault();
                        route.push('/inbox');
                    }}
                >
                    <ListItemIcon>
                        <TvRounded sx={{
                            fontSize: 40,
                            color: appConfig.theme["Tertiary"]
                        }} />
                    </ListItemIcon>
                    <ListItemText
                        primary="Inbox"
                        primaryTypographyProps={{
                            fontWeight: 'medium'
                        }}
                    />
                </ListItemButton>
            </ListItem>

        </List>
    );
}