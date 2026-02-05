# Polygon Amoy NFT Hardhat Project

This project provides a comprehensive setup for deploying and interacting with an ERC721 Non-Fungible Token (NFT) smart contract on the Polygon Amoy testnet using Hardhat. It leverages OpenZeppelin contracts for secure and standardized NFT implementation and Viem for contract interaction.

## Features

-   **ERC721 NFT Contract:** A basic ERC721 NFT contract (`MyNFT.sol`) implemented using OpenZeppelin standards.
-   **Hardhat Development Environment:** Configured with Hardhat for efficient smart contract development, testing, and deployment.
-   **Polygon Amoy Testnet Integration:** Pre-configured to deploy and verify contracts on the Polygon Amoy testnet.
-   **Environment Variable Management:** Secure handling of private keys and API keys using `dotenv`.
-   **Viem Integration:** Scripts for contract interaction (e.g., minting NFTs) built with Viem.
-   **Contract Verification:** Easy verification of deployed contracts on Polygonscan.

## Technologies Used

-   [Hardhat](https://hardhat.org/)
-   [Solidity](https://soliditylang.org/)
-   [OpenZeppelin Contracts](https://openzeppelin.com/contracts/)
-   [Viem](https://viem.sh/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [dotenv](https://www.npmjs.com/package/dotenv)

## Setup Instructions

### Prerequisites

-   Node.js (LTS version recommended)
-   npm or Yarn
-   [MetaMask](https://metamask.io/) or a similar EVM-compatible wallet configured for Polygon Amoy testnet.
-   Testnet MATIC on the Polygon Amoy network for gas fees.
-   An [Alchemy](https://www.alchemy.com/) or [Infura](https://www.infura.io/) account (or similar provider) for a Polygon Amoy RPC URL.

### 1. Clone the Repository

```bash
git clone https://github.com/771salameche/polygon-amoy-nft
cd polygon-amoy-nft
```

### 2. Install Dependencies

Install all necessary Node.js dependencies, including Hardhat, OpenZeppelin contracts, and `dotenv`.

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root of your project directory with the following content. **Replace the placeholder values with your actual credentials.**

```
PRIVATE_KEY=YOUR_PRIVATE_KEY_WITHOUT_0X_PREFIX
POLYGONSCAN_API_KEY=YOUR_POLYGONSCAN_API_KEY
```

-   **`PRIVATE_KEY`**: This is the private key of your wallet from which you will deploy contracts and pay for gas fees.
    -   **SECURITY WARNING**: Never expose your private key. Keep it secret.
    -   **How to get your Private Key (MetaMask)**: Open MetaMask -> Select the account -> Click the three dots menu -> Account details -> Export Private Key. Copy the 64-character hexadecimal string, *excluding* the `0x` prefix.
-   **`POLYGONSCAN_API_KEY`**: An API key from Polygonscan, required for verifying your contract's source code.
    -   **How to get your Polygonscan API Key**: Go to [Polygonscan](https://polygonscan.com/) -> Create/Login to your account -> Navigate to 'API Keys' -> Generate New API Key.

## Usage

### 1. Compile Contracts

Compile the Solidity smart contracts. This command checks for syntax errors and generates contract artifacts.

```bash
npx hardhat compile
```

### 2. Deploy Contract

Deploy the `MyNFT` contract to the Polygon Amoy testnet.

```bash
npx hardhat ignition deploy ignition/modules/MyNFT.ts --network amoy
```

Follow the prompts in the terminal to confirm the deployment. Ensure you have testnet MATIC in your wallet for gas fees.

**Deployed Contract Address (Example):**
Once deployed, Hardhat will output the contract address. For instance: `0xFe6698496d2f2fA1e85954B1D075Dd563df18ec2`

### 3. Verify Contract on Polygonscan

After successful deployment, verify your contract's source code on Polygonscan. Replace `YOUR_CONTRACT_ADDRESS` with the actual address from your deployment.

```bash
npx hardhat verify --network amoy YOUR_CONTRACT_ADDRESS
```

**Example using the deployed address:**
```bash
npx hardhat verify --network amoy 0xFe6698496d2f2fA1e85954B1D075Dd563df18ec2
```

You can then view your verified contract on Polygonscan, e.g.:
[https://amoy.polygonscan.com/address/0xFe6698496d2f2fA1e85954B1D075Dd563df18ec2#code](https://amoy.polygonscan.com/address/0xFe6698496d2f2fA1e85954B1D075Dd563df18ec2#code)

### 4. Mint an NFT

Use the provided script to mint a new NFT.

1.  **Open `scripts/mint-nft.ts`**:
    *   **Update `nftContractAddress`**: Ensure this is set to your deployed `MyNFT` contract address.
    *   **Update `tokenURI`**: Set this to the IPFS URI of your NFT's metadata.

2.  **Run the minting script**:

```bash
npx hardhat run scripts/mint-nft.ts --network amoy
```

This will execute the `safeMint` function on your `MyNFT` contract, creating a new NFT.

