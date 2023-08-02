import Image from "next/image"

export default function NFT({ metadata }) {

    //https://bafybeichnd6zavqi4zebcwwnbec6qw55a7rxlu4s5hnmiyxrww6qboudwy.ipfs.dweb.link/
    //ipfs://QmT9QWYYnUYEKptGAJTnRsQdo556kDT5b4kNtzJTRvJMz5/2.png

    const BASE_URL = "https://testnets.opensea.io/assets/sepolia/0x8bb3a2d5595e0bd61b25e4bb1b498f294c0144dc/";

    return (
        <div className="bg-gray-300 p-4 opacity-80 rounded-lg shadow-md flex flex-col items-center">
            {console.log(metadata.image)}
            <h1 className="text-3xl text-black font-bold">{metadata.name}</h1>
            <img
                src={metadata.image}
                alt="pexels"
                width={300}
                height={300}
                className="w-max h-max mx-auto mb-4"
            />
            <div className="flex items-center my-4">
                <a
                    href={BASE_URL.concat(metadata.edition)}
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-2 px-4 rounded hidden md:block font-primary">
                    View in OpenSea
                </a>
            </div>
        </div>
    )
}