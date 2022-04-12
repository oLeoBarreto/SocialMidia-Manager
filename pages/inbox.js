import * as React from 'react';
import DashboardLayout from '../src/components/layouts/DashboardLayout';
import { Box } from '@mui/material';
import appConfig from '../config.json';

export default function Inbox() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: appConfig.theme["Prymary"],
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                    height: 1
                }}
            >
                <Box
                    sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                >

                </Box>
            </Box>
        </>
    );
}

Inbox.getLayout = function getLayout(page) {
    return (
        <DashboardLayout
            pageName="Inbox"
        >
            {page}
        </DashboardLayout>
    );
}