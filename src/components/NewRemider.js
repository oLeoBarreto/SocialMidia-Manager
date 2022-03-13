import React from "react";
import { Box, Button, Typography, Grid, Chip, Stack, AvatarGroup, Avatar, FormControl, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { BusinessCenterRounded, BookmarkRounded, CollectionsBookmarkRounded, LocalPhoneRounded, AccessTimeRounded, LocationOnRounded, SearchRounded } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import appConfig from "../../config.json";
import Theme from "./Theme";

export default function NewRemiderCard() {
    const [values, setValues] = React.useState({
        ReminderName: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            Reminder: data.get('ReminderName')
        });
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <>
            <ThemeProvider theme={Theme()}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: appConfig.theme["Secondary"],
                        borderRadius: '10px', padding: '32px', margin: '16px',
                        height: '100%', maxHeight: "600px", width: '100%', maxWidth: '300px',
                        flexWrap: 'wrap',
                        flexDirection: 'column'
                    }}
                >
                    <Typography component="h1" variant="h5" color="primary.light" >
                        New Reminder
                    </Typography>

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="ReminderName"
                            required
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                    >
                                        <SearchRounded />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <Typography component="h1" variant="h6" color="primary.light">
                        Reminder type
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        <Chip icon={<BusinessCenterRounded />} label="Meeting" color="primary" />
                        <Chip icon={<CollectionsBookmarkRounded />} label="Post" color="error" />
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Chip icon={<LocalPhoneRounded />} label="Call" color="success" />
                        <Chip icon={<BookmarkRounded />} label="Other" color="warning" />
                    </Stack>

                    <Typography component="h1" variant="h6" color="primary.light">
                        Events
                    </Typography>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        color="primary.light"
                    >
                        <Grid item >
                            <AccessTimeRounded />
                        </Grid>
                        <Grid item >
                            12:00 - 18:00
                        </Grid>
                    </Grid>

                    <AvatarGroup max={3}>
                        <Avatar src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                        <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    </AvatarGroup>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        color="primary.light"
                    >
                        <Grid item >
                            <LocationOnRounded />
                        </Grid>
                        <Grid item >
                            Add Localization
                        </Grid>
                    </Grid>

                    <Button
                        variant="contained"
                        disableElevation
                        fullWidth
                        type="submit"
                    >
                        Criar Lembrete
                    </Button>
                </Box>
            </ThemeProvider>
        </>
    );
}