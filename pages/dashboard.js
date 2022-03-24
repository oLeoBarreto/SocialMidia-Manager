import Navbar from "../src/components/Navbar";
import { Box, Container, Grid } from "@mui/material";
import appConfig from "../config.json";
import TwitterFollowers from "../src/components/dashboard/TwitterFollowers";

export default function Dashboard() {
    return (
        <>
            <Navbar>
                Dashboard
            </Navbar>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8,
                    backgroundColor: appConfig.theme["Prymary"]
                }}
            >
                <Container maxWidth={false}>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <TwitterFollowers />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}