import Navbar from "../src/components/Navbar";
import { Box, Container, Grid } from "@mui/material";
import appConfig from "../config.json";

export default function Dashboard() {
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
                    Dashboard
                </Navbar>
                <Box
                    sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                >
                    <Container maxWidth={false}>
                        <Grid
                            container
                            spacing={3}
                        >

                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    );
}