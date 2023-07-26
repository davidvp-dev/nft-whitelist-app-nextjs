import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
//import { useAccount, useContract, useSigner, useNetwork } from "wagmi";
//const mintAbi = require("../contract/abi.json");
//import Connect from "./Connect";

export default function Mint() {
    const [minting, setMinting] = useState(false);
    const [minted, setMinted] = useState(false);

    return (
        <div className="relative overflow-hidden p-10 text-center ">
            <div className="container mx-auto block items-center p-10">
                <div className="text-white">
                    <h2 className="text-center text-5xl my-8 font-mono">The Eyes of the Departed</h2>
                    <div className="flex justify-center">
                        <Image
                            src="/eye.png"
                            alt="pexels"
                            width={300}
                            height={300}
                            className="rounded-xl"
                        />
                    </div>
                    <h4 className="text-center text-xl my-6 font-mono">Mint a NFT from the Eyes of the Departed NFT Collection and join the community to receive special offerings.</h4>
                    <h4 className="text-center text-xl my-6 font-mono">20 available!</h4>
                    <button
                        type="button"
                        className="rounded border-2 border-neutral-50 my-6 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-350 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        MINT
                    </button>
                </div>
                <hr className="my-20 border-1"></hr>
                <div className="text-white">
                    <h2 className="text-center text-4xl my-32 font-bold">Check below if you are in the whitelist!</h2>
                </div>
            </div>
        </div>
    );
}