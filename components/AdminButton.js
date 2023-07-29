import { useState } from 'react'
import { useContractStore } from '@/utils/ethers/contractStore';

export default function AdminButton({ buttonData }) {

    const { contract, owner } = useContractStore();
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [inputText, setInputText] = useState('');

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

    const sendTransaction = (event) => {
        if (!contract) return
        console.log(contract);
        contract.addAddress(inputText);
    };

    return (
        <div className="w-full m-auto p-2 bg-gray-200  rounded-full font-bold hover:bg-orange-200 transition-all">
            {isButtonClicked ? (
                <div className="flex flex-col w-full space-y-5" onClick={handleContainerClick}>
                    <h2 className='uppercase text-2xl my-2'>{buttonData.text}</h2>
                    <input
                        type="text"
                        value={inputText}
                        onChange={handleInputChange}
                        className="mx-64 p-1 bg-white rounded-lg text-gray-600 text-center text-sm"
                        placeholder={buttonData.placeholder}
                        onClick={(event) => event.stopPropagation()}
                    />
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