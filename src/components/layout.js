import Sidebar from "./Sidebar";
import Head from "next/head";

export default function layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href=""/>
                <title>Social Midia Manager</title>
            </Head>
            <Sidebar />
            <main>{ children }</main>
        </>
    );
}