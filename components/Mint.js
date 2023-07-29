import Image from "next/image";
import { useState } from "react";

export default function Mint() {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    };

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleMint = () => {
        // Handle the minting functionality here
        // Add your logic to interact with the contract and mint NFTs
    };
    return (
        <div className="flex flex-col items-center font-primary space-y-12 p-16">
            <h1 className="text-3xl text-gray-200 uppercase font-bold">Mint NFT</h1>
            <div className="bg-gray-300 p-4 opacity-80 rounded-lg shadow-md flex flex-col items-center">
                {/* <img src="/eye.png" alt="NFT" className="w-max h-max mx-auto mb-4" />
                 <span*/}
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
                // className="px-8 py-3 rounded-full bg-green-500 text-white font-bold text-lg focus:outline-none"
                onClick={handleMint}
            >
                Mint
            </button>
        </div>
    );
}