import Image from "next/image";
import { ethers } from "ethers";

import { useEffect, useState } from "react";
import { useContractStore } from "@/utils/ethers/contractStore";
import { useWeb3Store } from "@/utils/ethers/web3Store";

export default function Mint() {
    /* Web3 store data */
    const { contract } = useContractStore();
    const { isConnected } = useWeb3Store();
    const [contractResponse, setContractResponse] = useState();
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    };

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleMint = async () => {
        if (!contract.provider) return;
        try {
            const ethAmount = ethers.utils.parseEther(price);
            const transaction = await contract.mint(quantity, { value: ethAmount });
            await transaction.wait();
            console.log(transaction);
        } catch (e) {
            alert(e);
        }
        // Add your logic to interact with the contract and mint NFTs
        //setContractResponse(await contract.mint())
    };

    async function getFloorPrice() {
        if (!contract.provider) return;
        const price = Number(await contract.floorPrice()); // retrieve floorPrice from contract
        const ethPrice = ethers.utils.formatUnits(price, "ether"); //convert Wei to ETH
        setPrice(ethPrice);
    }

    useEffect(() => {
        if (!contract.provider) return;
        const fetchData = async () => {
            getFloorPrice();
        }
        fetchData();
    }, [contract])

    return (
        <div className="flex flex-col items-center font-primary space-y-12 p-16">
            <h1 className="text-3xl text-gray-200 uppercase font-bold">Mint NFT</h1>
            <div className="bg-gray-300 p-4 opacity-80 rounded-lg shadow-md flex flex-col items-center">
                <Image
                    src="/eye.png"
                    alt="pexels"
                    width={300}
                    height={300}
                    className="w-max h-max mx-auto mb-4"
                />
            </div>
            <div className="flex items-center my-4">
                <button
                    className="w-full m-auto p-2 bg-gray-200  rounded-full font-bold hover:bg-orange-200 transition-all"
                    onClick={handleDecrease}
                >
                    -
                </button>
                <p className="text-3xl text-gray-200 uppercase font-bold mx-8">{quantity}</p>
                <button
                    className="w-full m-auto p-2 bg-gray-200  rounded-full font-bold hover:bg-orange-200 transition-all"
                    onClick={handleIncrease}
                >
                    +
                </button>
            </div>
            <button
                className="px-8 py-3 bg-orange-200 rounded-full hover:bg-blue-400 hover:text-white uppercase font-bold text-2xl"
                onClick={handleMint}
            >
                Mint
            </button>
            {
                isConnected ? (
                    <p className="text-2xl text-gray-200">
                        {`Price: ${price} ETH`}
                    </p>
                ) : null
            }
        </div>
    );
}