import { useState } from 'react'
import { useContractStore } from '@/utils/ethers/contractStore';

export default function AdminButton({ buttonData }) {

    const { contract, owner } = useContractStore();
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [inputText, setInputText] = useState('');
    const [contractResponse, setContractResponse] = useState();

    const handleButtonClick = () => {
        setIsButtonClicked(true);
    };

    const handleContainerClick = (event) => {
        // Close the container only if the click target is the container itself
        if (event.target === event.currentTarget) {
            setIsButtonClicked(false);
        }
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const stringToArray = (string) => {
        return string.split(",");
    }

    const sendTransaction = async () => {
        if (!contract) return
        switch (buttonData.function) {
            case "addAddress":
                await contract.addAddress(inputText);
                break;
            case "addAddressList":
                console.log(inputText);
                await contract.addAddressList(stringToArray(inputText));
                break;
            case "whitelistedAddresses":
                const response = await contract.whitelistedAddresses();
                setContractResponse(response);
                break;
            case "clearWhitelist":
                await contract.clearWhitelist();
            default:
                console.log("Invalid function name");
                break;
        };
    };

    return (
        <div className={
            buttonData.function === "clearWhitelist" ? (
                buttonData.style
            ) : "w-full m-auto p-2 bg-gray-200  rounded-full font-bold hover:bg-orange-200 transition-all"
        }>
            {isButtonClicked ? (
                <div className="flex flex-col w-full space-y-5" onClick={handleContainerClick}>
                    <h2 className='uppercase text-2xl my-2'>{buttonData.text}</h2>
                    {/* add a input element in case the function selected is write  */}
                    {buttonData.input ? (
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            className="mx-64 p-1 bg-white rounded-lg text-gray-600 text-center text-sm"
                            placeholder="..."
                            onClick={(event) => event.stopPropagation()}
                        />
                        /* show the list of addresses when the function selected is whitelistAddresses */
                    ) : buttonData.function === "whitelistedAddresses" && contractResponse != null ?
                        (
                            <div className="font-bold text-center">
                                {Array.from({ length: contractResponse.length }, (_, index) => (
                                    <p key={index}>{contractResponse[index % contractResponse.length]}</p>
                                ))}
                            </div>
                        ) : null
                    }
                    <button
                        className="w-1/4 m-auto p-1 bg-white rounded-full hover:bg-blue-400 hover:text-white uppercase"
                        onClick={sendTransaction}
                    >
                        Send Transaction
                    </button>
                </div>
            ) : (
                <button
                    className="m-auto p-3 rounded-lg uppercase text-2xl"
                    onClick={handleButtonClick}
                >
                    {buttonData.text}
                </button>
            )}
        </div>
    )
}