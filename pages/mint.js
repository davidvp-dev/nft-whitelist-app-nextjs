import Image from "next/image"

import Header from "@/components/Header"
import Mint from "@/components/Mint";

export default function MintPage() {

    return (
        /* Banner for the whole page */
        <div className="my-banner-bg-class">
            <Header />
            <Mint />
        </div>

    );
}