import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Mint from '../components/Mint'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Eyes NFT Collection</title>
        <meta name="description" content="Eyes of Departed NFT Collection official website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/eye.png" />
      </Head>
      {/* Banner for the whole page */}
      <div className="my-banner-bg-class">
        <Header />
        <Mint />
      </div>
    </>
  )
}
