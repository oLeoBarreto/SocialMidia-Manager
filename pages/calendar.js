import Navbar from "../src/components/Navbar";
import { Box } from "@mui/material";
import CalendarComp from "../src/components/CalendarComp";
import NewRemiderCard from "../src/components/NewRemider";
import appConfig from "../config.json";

export default function Calendar() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: appConfig.theme["Prymary"],
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                    height: 1
                }}
            >
                <Navbar>
                    Calendario
                </Navbar>

                <Box
                    sx={{
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
            </Box>
        </>
    );
}