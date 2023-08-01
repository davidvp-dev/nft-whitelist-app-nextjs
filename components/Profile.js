import Image from "next/image"

export default function Profile() {
    return (
        <div className="flex flex-col items-center font-primary space-y-12 p-16">
            <h1 className="text-3xl text-gray-200 uppercase font-bold">Your NFTs</h1>
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
                <p className="text-3xl text-gray-200 uppercase font-bold mx-8">1</p>
            </div>
        </div>
    )
}