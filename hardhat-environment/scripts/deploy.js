const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer, admin] = await ethers.getSigners();

// FounderzDAO Deployment tree
// ├── Contract A
// │   ├── Contract B (deployed by Contract A)
// │   │   ├── Contract C (deployed by Contract B)
// │   │   └── Contract D (deployed by Contract B)
// │   └── Contract E (deployed by Contract A)
// └── Contract F
//     ├── Contract G (deployed by Contract F)
//     └── Contract H (deployed by Contract F)

  // Deploy .....
  const DAOExecutor = await ethers.getContractFactory("DAOExecutor");
  const daoExecutor = await upgrades.deployProxy(DAOExecutor, [], { deployer });
  await daoExecutor.deployed();
  console.log("DAOExecutor deployed at:", daoExecutor.address);

  // Deploy .....
  const DAO = await ethers.getContractFactory("DAO");
  const dao = await upgrades.deployProxy(DAO, [daoExecutor.address], {
    deployer,
  });
  await dao.deployed();
  console.log("DAO deployed at:", dao.address);

  // Deploy .....
  const FounderzAuctionHouse = await ethers.getContractFactory("....");
  const auctionHouse = await upgrades.deployProxy(auctionHouse, [], {
    deployer,
  });
  await auctionHouse.deployed();
  console.log("FounderzAuctionHouse deployed at:", auctionHouse.address);

  // Deploy .....
  const FounderzNFT = await ethers.getContractFactory("...");
  const founderzNft = await upgrades.deployProxy(founderzNft, [], { deployer });
  await founderzNft.deployed();
  console.log("FounderzNFTz deployed at:", founderzNft.address);

//   // Deploy .....
//   const ... = await ethers.getContractFactory("...");
//   const ... = await upgrades.deployProxy(..., [], { deployer });
//   await token.deployed();
//   console.log("... deployed at:", ....address);
// 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
