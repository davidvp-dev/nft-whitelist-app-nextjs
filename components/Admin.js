import { useState } from 'react'

export default function Admin() {

    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [inputText, setInputText] = useState('');

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

    return (
        <div className="container mx-auto block items-center w-1/2 font-primary">
            <div className="flex-column items-center justify-center text-center p-20 space-y-8">
                <div className="w-full m-auto p-2 bg-gray-200  rounded-full font-bold hover:bg-orange-200 transition-all">
                    {isButtonClicked ? (
                        <div className="flex flex-col w-full space-y-5" onClick={handleContainerClick}>
                            <h2 className='uppercase text-2xl my-2'>Add a list of addresses to the whitelist</h2>
                            <input
                                type="text"
                                value={inputText}
                                onChange={handleInputChange}
                                className="m-auto p-1 bg-white rounded-lg text-gray-100 text-center text-sm"
                                placeholder="[address1, address2, ...]"
                                onClick={(event) => event.stopPropagation()}
                            />
                            <button
                                className="w-1/4 m-auto p-1 bg-white rounded-full hover:bg-blue-400 hover:text-white uppercase"
                                onClick={handleSubmit}
                            >
                                Send Transaction
                            </button>
                        </div>
                    ) : (
                        <button
                            className="m-auto p-3 rounded-lg uppercase text-2xl"
                            onClick={handleButtonClick}
                        >
                            Add a list of addresses to the whitelist
                        </button>
                    )}
                </div>
                <div className="w-full m-auto p-2 bg-gray-200  rounded-full font-bold hover:bg-orange-200 transition-all">
                    {isButtonClicked ? (
                        <div className="flex flex-col w-full space-y-5" onClick={handleContainerClick}>
                            <h2 className='uppercase text-2xl my-2'>Add unique address</h2>
                            <input
                                type="text"
                                value={inputText}
                                onChange={handleInputChange}
                                className="m-auto p-1 bg-white text-gray-100 text-center text-sm"
                                placeholder="..."
                                onClick={(event) => event.stopPropagation()}
                            />
                            <button
                                className="w-1/4 m-auto p-1 bg-white rounded-full hover:bg-blue-400 hover:text-white uppercase"
                                onClick={handleSubmit}
                            >
                                Send Transaction
                            </button>
                        </div>
                    ) : (
                        <button
                            className="m-auto p-3 rounded-lg uppercase text-2xl"
                            onClick={handleButtonClick}
                        >
                            Add unique address
                        </button>
                    )}
                </div>
                <div className="w-full m-auto p-2 bg-gray-200 rounded-full font-bold hover:bg-orange-200 transition-all">
                    {isButtonClicked ? (
                        <div className="flex flex-col w-full space-y-5" onClick={handleContainerClick}>
                            <h2 className='uppercase text-2xl my-2'>Check whitelisted addresses</h2>
                            <div className="m-auto p-1 text-gray-400 text-sm">
                                <p>... list of addresses ...</p>
                            </div>
                            <button
                                className="w-1/4 m-auto p-1 bg-white rounded-full hover:bg-blue-400 hover:text-white uppercase"
                                onClick={handleSubmit}
                            >
                                Send Transaction
                            </button>
                        </div>
                    ) : (
                        <button
                            className="m-auto p-3 rounded-lg uppercase text-2xl"
                            onClick={handleButtonClick}
                        >
                            Check whitelisted addresses
                        </button>
                    )}
                </div>
                <hr></hr>
                <div className="w-full m-auto p-8 bg-red-500 rounded-full">
                    <h1 className="uppercase text-2xl font-bold">Clear whitelist</h1>
                </div>
            </div>
        </div >
    );
}