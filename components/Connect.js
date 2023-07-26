import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsName,
} from 'wagmi'

import shortenAddress from '@/utils/address'


export default function Connect() {
    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const { disconnect } = useDisconnect()

    if (isConnected) {
        return (
            <div className="flex items-center w-1/5 justify-center">
                <p className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hidden md:block font-mono">{ensName ? `${ensName} (${address})` : shortenAddress(address)}</p>
            </div>
        )
    }

    return (
        <div className="flex items-center w-1/5 justify-center">
            {connectors.map((connector) => (
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hidden md:block font-mono"
                    disabled={!connector.ready} key={connector.id} onClick={() => connect({ connector })}>
                    {isLoading && connector.id === pendingConnector?.id
                        ? 'connecting...'
                        : 'CONNECT'
                    }
                </button>
            ))}

            {error && <div>{error.message}</div>}
        </div>
    )
}