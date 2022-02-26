import Head from "next/head";

export default function LayoutRegister({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="" />
                <title>Social Midia Manager</title>
            </Head>
            <main>{children}</main>
        </>
    );
}