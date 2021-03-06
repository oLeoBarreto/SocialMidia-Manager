import { createTheme } from '@mui/material/styles';
import appConfig from '../../config.json';

export default function Theme() {
    return (
        createTheme({
            typography:{
                fontFamily: "Poppins",
                color: appConfig.theme["light"]
            },
            palette: {
                primary: {
                    main: appConfig.theme["Prymary"],
                    second: appConfig.theme["Secondary"],
                    third: appConfig.theme["Tertiary"],
                    light: appConfig.theme["Light"],
                    dark: appConfig.theme["Dark"]
                },
                customColors: {
                    green: appConfig.customColors["green"],
                    red: appConfig.customColors["red"],
                    blue: appConfig.customColors["blue"],
                    orange: appConfig.customColors["orange"],
                    darkGreen: appConfig.customColors["darkGreen"]
                },
            },
        })
    );
};