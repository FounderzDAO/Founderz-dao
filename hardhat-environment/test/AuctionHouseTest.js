const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomiclabs/hardhat-ethers/dist/src/helpers");

describe("AuctionHouse", function () {
  async function deployAuctionHouseFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const AuctionHouse = await ethers.getContractFactory("NFTAuctionHouse");
    const auctionHouse = await AuctionHouse.deploy();
    return { auctionHouse, owner, otherAccount };
  }
});

describe("Deployment", function () {
  it("Should set the right owner", async function () {
    const { auctionHouse, owner } = await loadFixture(
      deployAuctionHouseFixture
    );
    expect(await auctionHouse.owner()).to.equal(owner.address);
  });
});

describe("Owner to treasury", function () {
  it("Should transfer ownership to treasury contract", async function () {
    const { auctionHouse, owner, otherAccount } = await loadFixture(
      deployAuctionHouseFixture
    );
    await auctionHouse.transferOwnership(otherAccount.address);
    expect(await auctionHouse.owner()).to.equal(otherAccount.address);
  });
});

describe("Auction bid success and NFT transfer", function () {
  it("Should transfer NFT to bidder", async function () {
    const { auctionHouse, owner, otherAccount } = await loadFixture(
      deployAuctionHouseFixture
    );
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    await nft.mint(owner.address);
    await nft.approve(auctionHouse.address, 0);
    await auctionHouse.createAuction(nft.address, 0, 100, 100);
    await auctionHouse.connect(otherAccount).bid(0, { value: 100 });
    expect(await nft.ownerOf(0)).to.equal(otherAccount.address);
  });
});

describe("Auction bid failure", function () {
  it("Should not transfer NFT to bidder", async function () {
    const { auctionHouse, owner, otherAccount } = await loadFixture(
      deployAuctionHouseFixture
    );
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    await nft.mint(owner.address);
    await nft.approve(auctionHouse.address, 0);
    await auctionHouse.createAuction(nft.address, 0, 100, 100);
    await expect(
      auctionHouse.connect(otherAccount).bid(0, { value: 50 })
    ).to.be.revertedWith("Bid amount is too low");
    expect(await nft.ownerOf(0)).to.equal(owner.address);
  });
});