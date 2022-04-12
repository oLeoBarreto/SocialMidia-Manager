import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Head from 'next/head';

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

export default function DashboardLayout({ pageName, children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="" />
                <title>Social Midia Manager</title>
            </Head>
            <GlobalStyled />
            <Sidebar />
            <main>
                <Navbar>
                    {pageName}
                </Navbar>
                {children}
            </main>
        </>
    );
}