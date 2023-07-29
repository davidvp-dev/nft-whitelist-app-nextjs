import { useState } from 'react'
import AdminButton from './AdminButton';

export default function Admin() {

    const handleButtonClick = () => {
        setIsButtonClicked(true);
    };

    const handleContainerClick = (event) => {
        // Close the container only if the click target is the container itself
        if (event.target === event.currentTarget) {
            console.log(event.target);
            console.log(event.currentTarget);

            setIsButtonClicked(false);
        }
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event) => {
        // Do something with the inputText (e.g., call an API, perform an action)
        console.log(inputText);
    };

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

    return (
        <div className="container mx-auto block items-center w-full font-primary">
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
        </div >
    );
}