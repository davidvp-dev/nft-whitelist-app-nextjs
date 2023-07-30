import Head from "next/head"
import Image from "next/image"

import Header from "@/components/Header"
import Main from "@/components/Main"
import Admin from "@/components/Admin"

export default function AdminPage() {
    return (
        /* Banner for the whole page */
        <div className="my-banner-bg-class">
            <Header />
            <Admin />
        </div >

    );
}