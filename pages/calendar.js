import * as React from 'react';
import DashboardLayout from '../src/components/layouts/DashboardLayout';
import { Box } from '@mui/material';
import CalendarComp from '../src/components/calendar/CalendarComp';
import NewRemiderCard from '../src/components/calendar/NewRemider';
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

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '10px', padding: '32px', margin: '16px',
                        backgroundColor: appConfig.theme["Secondary"],
                    }}
                >
                    <CalendarComp />
                </Box>

                <NewRemiderCard />

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