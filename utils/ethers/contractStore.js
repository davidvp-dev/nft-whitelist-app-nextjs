import { create } from "zustand"

/* 
** @dev This file manages the global state of the Web3 dApp: wallet connection, chain, provider information (balance, address...)
        Using Zustand library to create a set of states that can be used in any component of the application 
*/

export const useContractStore = create((set) => ({
    contract: undefined,
    owner: "0xcF7CC0a9da0FeF2B3a76B766D7d88345191173E3",
    errorMessage: "",

    setContract(_contract) {
        set({
            contract: _contract
        })
    }
}))
