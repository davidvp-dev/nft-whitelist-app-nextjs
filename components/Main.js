import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useWeb3Store } from "@/utils/ethers/web3Store";
import { supportedChains } from "@/constants/supportedChains";
import { useContractStore } from "@/utils/ethers/contractStore";

export default function Main() {

    const { address, provider, chainId, isConnected, balance } = useWeb3Store();
    const { contract } = useContractStore();
    const [isWhitelisted, setIsWhitelisted] = useState(false);
    const [clickWhitelistEvent, setClickWhitelistEvent] = useState(false);

    async function checkWhitelist() {
        if (!contract) return
        if (!supportedChains.includes(chainId)) return
        const result = await contract.isWhitelisted(address);
        setIsWhitelisted(result);
        setClickWhitelistEvent(true);
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsWhitelisted(false);
            setClickWhitelistEvent(false);
        }
        fetchData();
    }, [provider, address, isConnected])

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
                            className="rounded-xl opacity-85"
                        />
                    </div>
                    <h4 className="text-center text-xl my-6 font-primary">Mint a NFT from the Eyes of the Departed NFT Collection and join the community to receive special offerings.</h4>
                    <h4 className="text-center text-xl my-6 font-primary">20 NFT Available</h4>
                    <Link href="/mint"
                        className="rounded border-1 my-10 px-7 pb-[8px] pt-[10px] text-xl font-primary bg-blue-600 ">
                        MINT
                    </Link>
                </div>
                <hr className="my-10 border-1"></hr>
                <div className="text-white">
                    <h2 className="text-center text-4xl py-16 font-primary">Check if you are in the Whitelist!</h2>
                    <h4 className="text-center text-xl my-6 font-primary">
                        {
                            `Balance: ${balance} ETH`
                        }
                    </h4>
                    <button
                        type="button"
                        className="rounded border-1 px-7 pb-[8px] pt-[10px] text-xl font-primary bg-blue-600"
                        onClick={checkWhitelist}>
                        Check Address
                    </button>
                    {
                        isWhitelisted && clickWhitelistEvent
                            ? (
                                <div>
                                    <h4 className="text-center text-xl my-6 font-primary text-green-400">
                                        {
                                            'Congratulations!'
                                        }
                                    </h4>
                                    <h4 className="text-center text-xl my-6 font-primary text-green-400">
                                        {
                                            `${address} is whitelisted`
                                        }
                                    </h4>
                                </div>
                            ) : !isWhitelisted && clickWhitelistEvent ? (
                                <div>
                                    <h4 className="text-center text-xl my-6 font-primary text-red-400">
                                        {
                                            'Sorry! Your address is not whitelisted'
                                        }
                                    </h4>
                                </div>
                            ) : (
                                null
                            )
                    }
                </div>
            </div>
        </div>
    );
}