import { supportedChains } from "@/constants/supportedChains"
import { ethers } from "ethers"
import { create } from "zustand"

/* 
** @dev This file manages the global state of the Web3 dApp: wallet connection, chain, provider information (balance, address...)
        Using Zustand library to create a set of states that can be used in any component of the application 
*/

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
        const chainId = await (await _provider.getNetwork()).chainId
        set({
            isConnected: true,
            address: accounts[0],
            provider: _provider,
            chainId: Number(chainId),
            errorMessage: !supportedChains.includes(chainId) ? "chain not supported" : ""
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

    async setProvider() {
        if (!window.ethereum)
            return set({
                errorMessage: "please install metamask!"
            })
        const _provider = new ethers.providers.Web3Provider(window.ethereum)
        set({
            provider: _provider,
            errorMessage: ""
        })
    }
}))