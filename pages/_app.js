import { useWeb3Store } from '@/utils/ethers/web3Store'
import { useContractStore } from '@/utils/ethers/contractStore';
import { eyesNFTContract } from "@/constants/eyesNFT-abi";
import '@/styles/globals.css'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const { changeAddress, changeChainId, setProvider, chainId, provider, address } = useWeb3Store()
  const { setContract } = useContractStore()

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
        const contract = new ethers.Contract(eyesNFTContract.address, eyesNFTContract.abi, provider?.getSigner());
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
