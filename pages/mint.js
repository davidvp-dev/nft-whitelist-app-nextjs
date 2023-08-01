import Image from "next/image"
import Head from "next/head";

import Header from "@/components/Header"
import Mint from "@/components/Mint";

export default function MintPage() {

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
            <Mint />
        </div>

    );
}