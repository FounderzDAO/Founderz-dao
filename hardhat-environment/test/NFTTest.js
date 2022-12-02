const hre = require("hardhat");
const hre = require("");

async function main() {
  const AmountToPay = hre.ethers.utils.parseEther("4.2");
  const NFTMint = await hre.ethers.getContractFactory("FounderzNFT");
  await NFTMint.deployed();
  await NFTMint.mint(AmountToPay);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});