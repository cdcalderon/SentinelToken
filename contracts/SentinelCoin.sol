// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SentinelCoin is ERC20, Ownable {
    mapping(address => bool) private bannedAddresses;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    function banAddress(address _address) public onlyOwner {
        bannedAddresses[_address] = true;
    }

    function unbanAddress(address _address) public onlyOwner {
        bannedAddresses[_address] = false;
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {    
        return super.transfer(recipient, amount);
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        return super.transferFrom(sender, recipient, amount);
    }
}