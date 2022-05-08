import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TimePicker } from '@mui/lab';
import { ThemeProvider, } from '@mui/material/styles';
import Theme from '../Theme';

export default function BasicTimePicker() {
    const [hour, setHour] = React.useState(null);

    return (
        <ThemeProvider theme={Theme()}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    value={hour}
                    onChange={(newValue) => {
                        setHour(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </ThemeProvider>
    );
}