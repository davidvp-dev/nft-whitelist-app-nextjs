import { useEffect, useState } from 'react'
import AdminButton from './AdminButton';
import { useContractStore } from '@/utils/ethers/contractStore';
import { useWeb3Store } from '@/utils/ethers/web3Store';

export default function Admin() {

    const { address } = useWeb3Store()
    const { owner } = useContractStore()

    const addAddressListButtonData = {
        text: "Add a list of addresses to the whitelist",
        function: "addAddressList",
        placeholder: "[ address1, address2, ... ]"
    };

    const addAddressButtonData = {
        text: "Add a unique addresses",
        function: "addAddress",
        placeholder: "..."
    }

    const getWhitelistedAddressesButtonData = {
        text: "Check whitelisted addresses",
        function: "whitelistedAddresses",
        placeholder: "..."
    }

    const areEqualIgnoreCase = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();


    return (
        <div className="container mx-auto block items-center w-full font-primary">
            {areEqualIgnoreCase(address, owner) ?
                (
                    <div className="flex-column items-center justify-center text-center p-20 space-y-8">
                        <h1 className="text-3xl text-gray-200 uppercase font-bold">Manage the Whitelist panel</h1>
                        <AdminButton buttonData={addAddressListButtonData} />
                        <AdminButton buttonData={addAddressButtonData} />
                        {/* <AdminButton buttonData={getWhitelistedAddressesButtonData} /> */}
                        <hr></hr>
                        <div className="w-full m-auto p-6 bg-gray-200 rounded-full font-bold hover:bg-orange-200 transition-all">
                            <h1 className="uppercase text-2xl font-bold">Check whitelisted addresses</h1>
                        </div>
                        <div className="w-full m-auto p-6 bg-red-500 rounded-full">
                            <h1 className="uppercase text-2xl font-bold">Clear whitelist</h1>
                        </div>
                    </div>
                ) :
                <div className="flex-column items-center justify-center text-center p-20 space-y-8">
                    <h1 className="text-3xl text-red-300 uppercase font-bold">You are not the admin</h1>
                </div >
            }
        </div >
    );
}