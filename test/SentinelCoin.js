// https://github.com/EhsanParsania/ERC777

// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("SentinelCoin", () => {
//   let SentinelCoin, sentinelCoin, owner, addr1, addr2;

//   beforeEach(async () => {
//     SentinelCoin = await ethers.getContractFactory("SentinelCoin");
//     [owner, addr1, addr2] = await ethers.getSigners();

//     const defaultOperators = [];
//     sentinelCoin = await SentinelCoin.deploy(1000, [], {
//       gasLimit: 8000000,
//       gasPrice: ethers.utils.parseUnits("20", "gwei"), // set gas price in wei
//     });

//     await sentinelCoin.deployed();
//   });

//   it("Should set the correct initial token supply", async function () {
//     const overrides = {
//       gasLimit: 8000000,
//       gasPrice: ethers.utils.parseUnits("20", "gwei"), // set gas price in wei
//     };

//     expect(await sentinelCoin.callStatic.totalSupply(overrides)).to.equal(1000);
//   });
// });

// // const { expect } = require("chai");
// // const { ethers } = require("hardhat");

// // describe("SentinelCoin", () => {
// //   let SentinelCoin, sentinelCoin, owner, addr1, addr2;

// //   beforeEach(async () => {
// //     SentinelCoin = await ethers.getContractFactory("SentinelCoin");
// //     [owner, addr1, addr2] = await ethers.getSigners();

// //     const defaultOperators = [];
// //     sentinelCoin = await SentinelCoin.deploy(1000, [], {
// //       gasLimit: 8000000,
// //       gasPrice: ethers.utils.parseUnits("20", "gwei"), // set gas price in wei
// //     });

// //     await sentinelCoin.deployed();
// //   });

// //   it("Should set the correct initial token supply", async function () {
// //     const overrides = {
// //       gasLimit: 8000000,
// //       gasPrice: ethers.utils.parseUnits("20", "gwei"), // set gas price in wei
// //     };

// //     expect(await sentinelCoin.callStatic.totalSupply(overrides)).to.equal(1000);
// //   });
// // });

// // const { expect } = require("chai");
// // const { ethers } = require("hardhat");

// // describe("SentinelCoin", () => {
// //   let SentinelCoin, sentinelCoin, owner, addr1, addr2;

// //   beforeEach(async () => {
// //     SentinelCoin = await ethers.getContractFactory("SentinelCoin");
// //     [owner, addr1, addr2] = await ethers.getSigners();

// //     const defaultOperators = [];
// //     sentinelCoin = await SentinelCoin.deploy(1000, [], {
// //       gasLimit: 8000000,
// //     });

// //     await sentinelCoin.deployed();
// //   });

// //   it("Should set the correct initial token supply", async () => {
// //     expect(await sentinelCoin.totalSupply()).to.equal(1000);
// //   });
// // });

// // const { expect } = require("chai");
// // const { ethers } = require("hardhat");

// // describe("SentinelCoin", () => {
// //   let SentinelCoin, sentinelCoin, owner, addr1, addr2, addr3;

// //   beforeEach(async () => {
// //     SentinelCoin = await ethers.getContractFactory("SentinelCoin");
// //     [owner, addr1, addr2, addr3] = await ethers.getSigners();

// //     const defaultOperators = [];
// //     sentinelCoin = await SentinelCoin.deploy(1000, defaultOperators);
// //     await sentinelCoin.deployed();
// //   });

// //   describe("Deployment", () => {
// //     it("Should set the correct initial token supply", async () => {
// //       expect(await sentinelCoin.totalSupply()).to.equal(1000);
// //     });

// //     it("Should assign the total supply to the owner", async () => {
// //       expect(await sentinelCoin.balanceOf(owner.address)).to.equal(1000);
// //     });
// //   });

// //   describe("Banning and unbanning", () => {
// //     it("Should ban and unban an address", async () => {
// //       await sentinelCoin.addToBannedAddresses(addr1.address);
// //       expect(await sentinelCoin.isBanned(addr1.address)).to.equal(true);

// //       await sentinelCoin.removeFromBannedAddresses(addr1.address);
// //       expect(await sentinelCoin.isBanned(addr1.address)).to.equal(false);
// //     });

// //     it("Should not allow non-owner to ban or unban", async () => {
// //       await expect(
// //         sentinelCoin.connect(addr1).addToBannedAddresses(addr2.address)
// //       ).to.be.revertedWith("Ownable: caller is not the owner");
// //       await expect(
// //         sentinelCoin.connect(addr1).removeFromBannedAddresses(addr2.address)
// //       ).to.be.revertedWith("Ownable: caller is not the owner");
// //     });

// //     it("Should not allow transfers to/from banned addresses", async () => {
// //       await sentinelCoin.addToBannedAddresses(addr2.address);
// //       await expect(sentinelCoin.transfer(addr2.address, 10)).to.be.revertedWith(
// //         "SentinelCoin: Either sender or receiver is banned"
// //       );
// //       await expect(
// //         sentinelCoin.connect(addr2).transfer(owner.address, 10)
// //       ).to.be.revertedWith("SentinelCoin: Either sender or receiver is banned");

// //       await sentinelCoin.removeFromBannedAddresses(addr2.address);
// //       await sentinelCoin.transfer(addr2.address, 10);
// //       expect(await sentinelCoin.balanceOf(addr2.address)).to.equal(10);
// //     });
// //   });

// //   describe("Token transfers", () => {
// //     it("Should transfer tokens between accounts", async () => {
// //       await sentinelCoin.transfer(addr1.address, 100);
// //       expect(await sentinelCoin.balanceOf(addr1.address)).to.equal(100);

// //       await sentinelCoin.connect(addr1).transfer(addr2.address, 50);
// //       expect(await sentinelCoin.balanceOf(addr2.address)).to.equal(50);
// //       expect(await sentinelCoin.balanceOf(addr1.address)).to.equal(50);
// //     });
// //   });
// // });

// https://github.com/EhsanParsania/ERC777
