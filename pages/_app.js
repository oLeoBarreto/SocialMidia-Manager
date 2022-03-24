//import Layout from "../src/components/layouts/";
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../src/utils/create-emotion-cache';
import { theme } from '../src/components/Theme';

const GlobalStyled = () => {
    return (
        <style global jsx>
            {`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    list-style: none;
                }
                body {
                    font-family: Poppins;
                }
                /* App fit Height */ 
                html, body, #__next {
                    min-height: 100vh;
                    display: flex;
                    flex: 1;
                }
                #__next {
                    flex: 1;
                }
                #__next > * {
                    flex: 1;
                }
                /* ./App fit Height */ 
            `}
        </style>
    );
}

const clientSideEmotionCache = createEmotionCache();

export const MyApp = (props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <>
            <CacheProvider value={emotionCache}>
                <GlobalStyled />
                <Head>
                    <link rel="shortcut icon" href="" />
                    <title>Social Midia Manager</title>
                </Head>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        {getLayout(<Component {...pageProps} />)}
                    </ThemeProvider>
                </LocalizationProvider>
            </CacheProvider>
        </>
    );
}