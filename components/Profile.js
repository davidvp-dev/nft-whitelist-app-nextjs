import Image from "next/image"
import { useEffect, useState } from "react";
import { ethers } from "ethers";

import { fetchFromIPFS } from "@/utils/ipfs"
import { useWeb3Store } from "@/utils/ethers/web3Store";
import { useContractStore } from "@/utils/ethers/contractStore";

import NFT from "./NFT";

export default function Profile() {

    const IPFS_URL = "https://ipfs.io/ipfs/Qmd6yr5rFDcMJP1tscp15xzaea7ALEJkJuJLk7h4ax1U4y/";

    const [nftMetadata, setNftMetadata] = useState([]);
    const [tokenIds, setTokenIds] = useState([]);
    const { address, isConnected } = useWeb3Store();
    const { contract } = useContractStore();

    async function getOwnerTokensMetadata() {
        if (!contract || !isConnected) return
        let nftArray = [];
        const result = await contract.walletTotalTokens(address);
        const javascriptResponse = await result.map((bigNumber) => bigNumber.toNumber());
        setTokenIds(javascriptResponse);
        for (let index = 0; index < javascriptResponse.length; index++) {
            nftArray.push(await fetchMetadata(javascriptResponse[index]));
            let img = nftArray[index].image;
            img = img.replace('ipfs://QmT9QWYYnUYEKptGAJTnRsQdo556kDT5b4kNtzJTRvJMz5/', 'https://bafybeichnd6zavqi4zebcwwnbec6qw55a7rxlu4s5hnmiyxrww6qboudwy.ipfs.dweb.link/');
            nftArray[index].image = img;
        }
        setNftMetadata(nftArray);
    }

    async function fetchMetadata(tokenId) {
        const URL = IPFS_URL.concat(tokenId, '.json');
        const data = await fetchFromIPFS(URL);
        return data;
    }

    useEffect(() => {
        getOwnerTokensMetadata();
    }, [isConnected, address])

    return (
        <div className="container mx-auto p-10">
            <div className="text-center p-10">
                <h1 className="text-3xl text-white">This is your NFT List</h1>
            </div>
            {console.log(nftMetadata)}
            {isConnected && nftMetadata.length != 0 ? (
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center">
                    {
                        nftMetadata.map((item, index) => {
                            return <NFT key={index} metadata={item} />
                        })
                    }
                </div>
            ) :
                <div className="flex-column items-center justify-center text-center p-20 space-y-8">
                    <h1 className="text-3xl text-red-300 ">You don't have any Eye NFT</h1>
                </div>
            }
        </div>
    )
}