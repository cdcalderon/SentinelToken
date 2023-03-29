// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("SentinelCoinV1", function () {
//   let sentinelCoin;
//   let owner, addr1, addr2;

//   beforeEach(async function () {
//     const SentinelCoinV1 = await ethers.getContractFactory("SentinelCoinV1");
//     [owner, addr1, addr2] = await ethers.getSigners();
//     sentinelCoin = await SentinelCoinV1.deploy("SentinelCoinV1", "SCV1");
//     await sentinelCoin.deployed();
//   });

//   it("should deploy the contract and set the correct name and symbol", async function () {
//     expect(await sentinelCoin.name()).to.equal("SentinelCoinV1");
//     expect(await sentinelCoin.symbol()).to.equal("SCV1");
//   });

//   it("should ban and unban an address", async function () {
//     await sentinelCoin.banAddress(addr1.address);
//     expect(await sentinelCoin.isAddressBanned(addr1.address)).to.equal(true);
//     await sentinelCoin.unbanAddress(addr1.address);
//     expect(await sentinelCoin.isAddressBanned(addr1.address)).to.equal(false);
//   });

//   it("should transfer tokens", async function () {
//     await sentinelCoin.mint(owner.address, 10000);
//     await sentinelCoin.transfer(addr1.address, 1000);
//     expect(await sentinelCoin.balanceOf(addr1.address)).to.equal(1000);
//   });

//   it("should not allow banned addresses to transfer tokens", async function () {
//     await sentinelCoin.banAddress(addr1.address);
//     await expect(sentinelCoin.transfer(addr1.address, 1000)).to.be.revertedWith(
//       "Sender is banned from sending tokens"
//     );
//   });

//   it("should not allow banned addresses to receive tokens", async function () {
//     await sentinelCoin.banAddress(addr1.address);
//     await expect(sentinelCoin.transfer(addr1.address, 1000)).to.be.revertedWith(
//       "Recipient is banned from receiving tokens"
//     );
//   });
// });
