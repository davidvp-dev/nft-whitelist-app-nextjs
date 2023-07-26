import { useWeb3Store } from '@/stores/web3Store'
import '@/styles/globals.css'
import { accessListify } from 'ethers'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {

  const { changeAddress, changeChainId, setProvider, chainId, isConnected, errorMessage } = useWeb3Store()

  /** 
   * useEffect code is executed after the component has rendered. 
   * It runs after every renfer by default, but we can control it by providing a dependency array as the second argument
  **/
  useEffect(() => {
    setProvider()
    if (!window.ethereum) return

    window.ethereum.on("accountsChanged", (account) => {
      changeAddress(account[0]);
    })

    window.ethereum.on("chainChanged", (newChainId) => {
      changeChainId(Number(newChainId));
    })

    return () => {
    }
  }, [])

  return (
    <Component {...pageProps} />
  )
}
