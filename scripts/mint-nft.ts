import hre from "hardhat";

async function main() {
  const [deployer] = await hre.viem.getWalletClients();
  const nftContractAddress = "0xFe6698496d2f2fA1e85954B1D075Dd563df18ec2"; // Replace with your deployed contract address
  const tokenURI = "ipfs://bafybeiev3osuj3agdbmelcgatnzehyzypp77ewvviuiyygeurisr5dwwum"; // Replace with your desired IPFS URI

  const publicClient = await hre.viem.getPublicClient();
  const myNFT = await hre.viem.getContractAt("MyNFT", nftContractAddress);

  console.log(`Minting NFT for ${deployer.account.address} with URI: ${tokenURI}`);

  const transaction = await myNFT.write.safeMint([deployer.account.address, tokenURI], { account: deployer.account });
  await publicClient.waitForTransactionReceipt({ hash: transaction });

  console.log("NFT minted successfully!");
  console.log(`Transaction hash: ${transaction}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
