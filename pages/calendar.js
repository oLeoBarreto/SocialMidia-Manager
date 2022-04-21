import * as React from 'react';
import DashboardLayout from '../src/components/layouts/DashboardLayout';
import { Box, Grid } from '@mui/material';
import CalendarComp from '../src/components/calendar/CalendarComp';
import NewRemiderCard from '../src/components/calendar/NewRemider';
import ReminderList from '../src/components/calendar/ReminderList';
import appConfig from '../config.json';

export default function Calendar() {
    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8,
                    backgroundColor: appConfig.theme["Prymary"],
                    display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'
                }}
            >
                <Grid
                    container
                    rowSpacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item md={6}>
                        <CalendarComp />
                    </Grid>
                    <Grid item>
                        <NewRemiderCard />
                    </Grid>
                    <Grid item md={8}>
                        <ReminderList />
                    </Grid>
                </Grid>

            </Box>
        </>
    );
}

Calendar.getLayout = function getLayout(page) {
    return (
        <DashboardLayout
            pageName="Calendar"
        >
            {page}
        </DashboardLayout>
    );
}