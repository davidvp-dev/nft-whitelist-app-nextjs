# NFT Whitelist App (Next.js)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)

## Description

The NFT Whitelist App is a decentralized application developed in Next.js that allows users to interact with a whitelist smart contract on the Sepolia network. It uses the Ethers library to connect with the smart contract and Zustand for managing the global state of the application, including the connection to Web3, provider, and the current address connected.

## Features

- Connect to Web3 and the Sepolia network.
- View the whitelisted addresses from the smart contract.
- Check if a specific address is whitelisted.
- Mint NFTs for whitelisted addresses.

## Technologies Used

- Next.js
- Ethers.js
- Zustand

## Installation

1. Clone the repository:

git clone https://github.com/your-username/nft-whitelist-app-nextjs.git

2. Change to the project directory:

cd nft-whitelist-app-nextjs

3. Install the dependencies:

npm install

## Configuration

Before running the application, you need to set up the following configurations:

- Set the Sepolia network endpoint and contract address in the application code.
- Ensure that you have the required environment variables for your Web3 provider.

## Usage

1. Start the development server:

npm run dev

2. Access the application at `http://localhost:8080`.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- David Villalgordo
- Email: villalgordo.david@gmail.com
- GitHub: [davidvp-dev](https://github.com/davidvp-dev)