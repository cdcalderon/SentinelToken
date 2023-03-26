// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SentinelCoin is ERC20, Ownable {
    mapping(address => bool) private bannedAddresses;

    event AddressBanned(address indexed _address, bool _banned);

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    function banAddress(address _address) public onlyOwner {
        bannedAddresses[_address] = true;
        emit AddressBanned(_address, true);
    }

    function unbanAddress(address _address) public onlyOwner {
        bannedAddresses[_address] = false;
        emit AddressBanned(_address, false);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(!bannedAddresses[msg.sender], "Sender is banned from sending tokens");
        require(!bannedAddresses[recipient], "Recipient is banned from receiving tokens");
        return super.transfer(recipient, amount);
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        require(!bannedAddresses[sender], "Sender is banned from sending tokens");
        require(!bannedAddresses[recipient], "Recipient is banned from receiving tokens");
        return super.transferFrom(sender, recipient, amount);
    }
}