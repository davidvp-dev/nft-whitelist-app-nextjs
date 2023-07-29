import { useWeb3Store } from '@/utils/ethers/web3Store'
import { useContractStore } from '@/utils/ethers/contractStore';
import { whitelistContract } from "@/constants/whitelist-abi";
import '@/styles/globals.css'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'


export default function App({ Component, pageProps }) {

  const { changeAddress, changeChainId, setProvider, chainId, provider, address } = useWeb3Store()
  const { setContract } = useContractStore()
  //const [contract, setContract] = useState();
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

    const loadContract = async () => {
      try {
        const contract = new ethers.Contract(whitelistContract.address, whitelistContract.abi, provider?.getSigner());
        setContract(contract);
      } catch (error) {
        console.error('Error loading contract', error);
      }
    };

    loadContract();

    return () => {
    }
  }, [chainId, address])

  return (
    <Component {...pageProps} />
  )
}
