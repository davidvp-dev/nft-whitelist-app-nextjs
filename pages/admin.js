import Head from "next/head"
import Image from "next/image"

import Header from "@/components/Header"
import Main from "@/components/Main"
import Admin from "@/components/Admin"

export default function AdminPage() {
    return (
        /* Banner for the whole page */
        <div className="my-banner-bg-class">
            <Head>
                <title>Eyes NFT Collection</title>
                <meta name="description" content="Eyes of Departed NFT Collection official website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Admin />
        </div >

    );
}