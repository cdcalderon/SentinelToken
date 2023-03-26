// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SentinelCoin is ERC777, Ownable {
    mapping(address => bool) private _bannedAddresses;

    constructor(
        uint256 initialSupply,
        address[] memory defaultOperators
    ) ERC777("SentinelCoin", "SNT", defaultOperators) {
        _mint(msg.sender, initialSupply, "", "");
    }

    function addToBannedAddresses(address user) public onlyOwner {
        require(!_bannedAddresses[user], "SentinelCoin: User already banned");
        _bannedAddresses[user] = true;
    }

    function removeFromBannedAddresses(address user) public onlyOwner {
        require(_bannedAddresses[user], "SentinelCoin: User not banned");
        _bannedAddresses[user] = false;
    }

    function isBanned(address user) public view returns (bool) {
        return _bannedAddresses[user];
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._beforeTokenTransfer(operator, from, to, amount);

        require(
            !_bannedAddresses[from] && !_bannedAddresses[to],
            "SentinelCoin: Either sender or receiver is banned"
        );
    }
}
