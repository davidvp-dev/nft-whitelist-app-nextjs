import Image from 'next/image'
import { useWeb3Store } from '@/stores/web3Store';
import { supportedChains } from '@/constants/supportedChains';
import shortenAddress from '@/utils/address';

export default function Header() {

    const { address, isConnected, connectWallet, disconnect, errorMessage } = useWeb3Store();
    return (
        <header className="py-8">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section - Logo */}
                <div className="flex items-center w-1/5 justify-center">
                    <Image src="/mark.svg" alt="Tailwind Logo" className="w-auto h-10" width="10" height="10" />
                </div>
                {/* Middle Section - Navbar */}
                <nav className="hidden md:flex space-x-5 w-1/2 justify-center">
                    <a href="#" className="px-6 text-white text-lg  hover:bg-orange-600 font-mono rounded">Home</a>
                    <a href="#" className="px-6 text-white text-lg  hover:bg-orange-600 font-mono rounded">Mint</a>
                    <a href="#" className="px-6 text-white text-lg  hover:bg-orange-600 font-mono rounded">Community</a>
                    <a href="#" className="px-6 text-white text-lg  hover:bg-orange-600 font-mono rounded">Admin</a>
                </nav>
                {/* Right Section - Connect Button */}
                <div className="flex items-center w-1/5 justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hidden md:block font-mono"
                        onClick={connectWallet}>
                        {
                            errorMessage == "chain not supported"
                                ? 'Please switch to Sepolia'
                                : isConnected && address != ""
                                    ? shortenAddress(address)
                                    : 'CONNECT'
                        }
                    </button>
                </div>
            </div>
        </header>
    );
}