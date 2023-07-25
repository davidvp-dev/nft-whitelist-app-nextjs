import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsName,
} from 'wagmi'

import shortenAddress from '@/utils/address'


export default function Connect() {
    const { address, connector, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const { disconnect } = useDisconnect()

    if (isConnected) {
        return (
            <div>
                <div>{ensName ? `${ensName} (${address})` : address}</div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hidden md:block font-mono" onClick={disconnect}>Disconnect</button>
            </div>
        )
    }

    return (
        <div>
            {connectors.map((connector) => (
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hidden md:block font-mono"
                    disabled={!connector.ready} key={connector.id} onClick={() => connect({ connector })}>
                    {connector.name}
                    {!connector.ready && ' (unsupported)'}
                    {isLoading &&
                        connector.id === pendingConnector?.id &&
                        ' (connecting)'}
                </button>
            ))}

            {error && <div>{error.message}</div>}
        </div>
    )
}