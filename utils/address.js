export default function shortenAddress(address) {
    const stringAddress = String(address);
    return `${stringAddress.slice(0, 6)}...${stringAddress.slice(-4)}`;
}