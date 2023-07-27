import Image from "next/image";
import { useEffect, useState } from "react";
import { ethers } from "ethers"

import { useWeb3Store } from "@/stores/web3Store";
import { whitelistContract } from "@/constants/whitelist-abi";
import { supportedChains } from "@/constants/supportedChains";
import fixedNumber from "@/utils/number";

export default function Mint() {

    const { address, provider, chainId } = useWeb3Store();
    const [contract, setContract] = useState();
    const [balance, setBalance] = useState(0);

    async function getBalance() {
        if (!contract || !provider) return
        if (!supportedChains.includes(chainId)) return
        const providerBalance = Number(await provider.getBalance(address));
        console.log(providerBalance);
        setBalance(fixedNumber(providerBalance));
    }

    useEffect(() => {
        const fetchData = async () => {
            const contract = new ethers.Contract(whitelistContract.address, whitelistContract.abi, provider?.getSigner());
            setContract(contract);

            getBalance();
        }
        fetchData();
    }, [provider, address])

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
                    <h4 className="text-center text-xl my-6 font-primary">Mint a NFT from the Eyes of the Departed NFT Collection and join the community to receive special offerings.</h4>
                    <h4 className="text-center text-xl my-6 font-primary">20 NFT Available</h4>
                    <button
                        type="button"
                        className="rounded border-4 border-neutral-50 my-6 px-7 pb-[8px] pt-[10px] text-xl font-primary bg-blue-600"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        MINT
                    </button>
                </div>
                <hr className="my-20 border-1"></hr>
                <div className="text-white">
                    <h2 className="text-center text-4xl my-32 font-primary">Check if you are in the Whitelist!</h2>
                    <h4 className="text-center text-xl my-6 font-primary">
                        {
                            `Your balance: ${balance}`
                        }
                    </h4>
                    <button
                        type="button"
                        className="rounded border-4 border-neutral-50 my-6 px-7 pb-[8px] pt-[10px] text-xl font-primary bg-blue-600"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Check Address
                    </button>
                </div>
            </div>
        </div>
    );
}