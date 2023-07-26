import Image from 'next/image'
import Connect from '../components/Connect'

export default function Header() {
    return (
        <header className="py-8">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section - Logo */}
                <div className="flex items-center w-1/5 justify-center">
                    <Image src="/mark.svg" alt="Tailwind Logo" className="w-auto h-10" width="10" height="10" />
                </div>
                {/* Middle Section - Navbar */}
                <nav className="hidden md:flex space-x-10 w-1/2 justify-center">
                    <a href="#" className="text-white text-lg hover:text-blue-200 font-mono">Home</a>
                    <a href="#" className="text-white text-lg hover:text-blue-200 font-mono">Mint</a>
                    <a href="#" className="text-white text-lg hover:text-blue-200 font-mono">Community</a>
                    <a href="#" className="text-white text-lg hover:text-blue-200 font-mono">Admin</a>
                </nav>
                {/* Right Section - Connect Button */}
                <Connect />
            </div>
        </header>
    );
}