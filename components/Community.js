import Image from "next/image";

export default function Community() {
    return (
        <div className="container mx-auto px-10 my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* First column */}
                <div className="bg-gray-300 p-4 rounded-lg shadow-md flex flex-col items-center">
                    <Image
                        src="/favicon.ico"
                        alt="Post 2"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-lg w-max h-auto"
                    />
                    <h2 className="text-xl font-bold mb-2">Post 1 Title</h2>
                    <p className="text-gray-600">Post 1 description goes here.</p>
                </div>

                {/* Second column (flex-col inverts the flex from horizontal to vertical) */}
                <div className="bg-gray-300 p-4 rounded-lg shadow-md flex flex-col items-center">
                    <Image
                        src="/favicon.ico"
                        alt="Post 2"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-lg w-max h-auto"
                    />
                    <h2 className="text-xl font-bold mb-2">Post 2 Title</h2>
                    <p className="text-gray-600">Post 2 description goes here.</p>
                </div>

                {/* Third column */}
                <div className="bg-gray-300 p-4 rounded-lg shadow-md flex flex-col items-center">
                    <Image
                        src="/favicon.ico"
                        alt="Post 2"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-lg w-max h-auto"
                    />
                    <h2 className="text-xl font-bold mb-2">Post 3 Title</h2>
                    <p className="text-gray-600">Post 3 description goes here.</p>
                </div>
            </div>
        </div>
    );
}