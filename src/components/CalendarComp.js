import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import MuiDateRangePickerDay from '@mui/lab/DateRangePickerDay';

import appConfig from '../../config.json';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './Theme';

const DateRangePickerDay = styled(MuiDateRangePickerDay)(
    ({ theme, isHighlighting, isStartOfHighlighting, isEndOfHighlighting }) => ({
        ...(isHighlighting && {
            borderRadius: 0,
            backgroundColor: appConfig.theme["Tertiary"],
            color: appConfig.theme["light"],
            '&:hover, &:focus': {
                backgroundColor: appConfig.theme["Tertiary"],
            },
        }),
        ...(isStartOfHighlighting && {
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
        }),
        ...(isEndOfHighlighting && {
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
        }),
    }),
);

export default function CustomDateRangePickerDay() {
    const [value, setValue] = React.useState([null, null]);

    const renderWeekPickerDay = (date, dateRangePickerDayProps) => {
        return <DateRangePickerDay {...dateRangePickerDayProps} />;
    };

    return (
        <ThemeProvider theme={Theme()}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDateRangePicker
                    displayStaticWrapperAs="desktop"
                    label="date range"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderDay={renderWeekPickerDay}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} />
                        </React.Fragment>
                    )}
                />
            </LocalizationProvider>
        </ThemeProvider>
    );
}