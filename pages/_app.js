import Layout from "../src/components/layout";

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

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyled />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}