import { createTheme } from '@mui/material/styles';
import appConfig from '../../config.json';

export default function Theme() {
    return (
        createTheme({
            palette: {
                primary: {
                    main: appConfig.theme["Prymary"],
                    second: appConfig.theme["Secondary"],
                    third: appConfig.theme["Tertiary"],
                    light: appConfig.theme["light"]
                },
            },
        })
    );
};