// Review all methods used with Ethers dependency. Imported code from Ethers V5 but this project uses Ethers V6
// https://docs.ethers.org/v6/migrating/#migrate-providers

// Use Zustand to manage the state of the React components

import { supportedChains } from "@/constants/supportedChains"
import { ethers } from "ethers"
import { create } from "zustand"

export const useWeb3Store = create((set) => ({
    address: "",
    isConnected: false,
    chainId: 0,
    provider: undefined,
    errorMessage: "",

    async connectWallet() {
        if (!window.ethereum)
            return set({
                errorMessage: "please install metamask!"
            })
        const _provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await _provider?.send("eth_requestAccounts", [])
        set({
            isConnected: true,
            address: accounts[0],
            provider: _provider,
            chainId: await (await _provider.getNetwork()).chainId
        })
    },

    changeAddress(_address) {
        set({
            address: _address
        })
    },

    changeChainId(_chainId) {
        if (!supportedChains.includes(_chainId)) {
            return set({
                errorMessage: "chain not supported"
            })
        }
        set({
            chainId: _chainId,
            errorMessage: ""
        })
    },

    disconnect() {
        set({
            address: "",
            isConnected: false,
            chainId: 0
        })
    },

    setProvider() {
        if (!window.ethereum)
            return set({
                errorMessage: "please install metamask!"
            })
        //const _provider = new ethers.providers.Web3Provider(window.ethereum) ethers@5.7.2
        const _provider = new ethers.BrowserProvider(window.ethereum) //ethers^6.0.0
        set({
            provider: _provider,
            errorMessage: "test"
        })
    }
}))
