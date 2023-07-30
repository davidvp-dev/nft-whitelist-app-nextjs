import Head from "next/head"
import Image from "next/image"

import Header from "@/components/Header"
import Main from "@/components/Main"
import Community from "@/components/Community"

export default function CommunityPage() {
    return (
        /* Banner for the whole page */
        <div className="my-banner-bg-class" >
            <Header />
            <Community />
        </div >

    );
}