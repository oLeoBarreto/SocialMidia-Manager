import * as React from 'react';
import DashboardLayout from "../src/components/layouts/DashboardLayout";
import { Box, Container, Grid } from '@mui/material';
import { Twitter } from '@mui/icons-material';
import CardData from '../src/components/dashboard/CardData';
import Graphic from '../src/components/dashboard/Graphic';
import appConfig from '../config.json';
import Api from '../src/api';

export default function Dashboard() {

    const [followers, setFollowers] = React.useState();
    const [friends, setFriends] = React.useState();

    React.useEffect(() => {
        Api
            .get("api/twitter/Followers")
            .then(response => setFollowers(response.data.followersNumber))
            .catch((err) => {
                console.error("Ops! erro: " + err);
            });

        Api
            .get("api/twitter/Friends")
            .then(response => setFriends(response.data.friendsNumber))
            .catch((err) => {
                console.error("Ops! erro: " + err);
            });
    }, []);

    return (
        <>
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
                            <CardData
                                title="Followers"
                                data={followers}
                            >
                                <Twitter />
                            </CardData>
                        </Grid>
                        <Grid
                            item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <CardData
                                title="Friends"
                                data={friends}
                            >
                                <Twitter />
                            </CardData>
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={12}
                            xl={9}
                            xs={12}
                        >
                            <Graphic 
                                followers={followers}
                                friends={friends}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

Dashboard.getLayout = function getLayout(page) {
    return (
        <DashboardLayout
            pageName="Dashboard"
        >
            {page}
        </DashboardLayout>
    );
}