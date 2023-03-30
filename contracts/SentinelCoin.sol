// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title SentinelCoin
 * @dev A fungible token that allows an admin to ban specified addresses from sending and receiving tokens.
 */
contract SentinelCoin is ERC777, Ownable {
    mapping(address => bool) private _bannedAddresses;

    /**
     * @dev Constructor that mints initial supply of tokens and sets default operators.
     * @param initialSupply The initial supply of tokens to be minted.
     * @param defaultOperators An array of default operators for the token.
     */
    constructor(
        uint256 initialSupply,
        address[] memory defaultOperators
    ) ERC777("SentinelCoin", "SNT", defaultOperators) {
        _mint(msg.sender, initialSupply, "", "");
    }

    /**
     * @dev Adds an address to the list of banned addresses.
     * @param user The address to ban.
     */
    function addToBannedAddresses(address user) public onlyOwner {
        require(!_bannedAddresses[user], "SentinelCoin: User already banned");
        _bannedAddresses[user] = true;
    }

    /**
     * @dev Removes an address from the list of banned addresses.
     * @param user The address to unban.
     */
    function removeFromBannedAddresses(address user) public onlyOwner {
        require(_bannedAddresses[user], "SentinelCoin: User not banned");
        _bannedAddresses[user] = false;
    }

    /**
     * @dev Checks if an address is banned.
     * @param user The address to check.
     * @return bool True if the address is banned, false otherwise.
     */
    function isBanned(address user) public view returns (bool) {
        return _bannedAddresses[user];
    }

    /**
     * @dev Hook that is called before any token transfer.
     * Checks that neither the sender nor the receiver are banned.
     * @param operator The address performing the operation.
     * @param from The address tokens are transferred from.
     * @param to The address tokens are transferred to.
     * @param amount The amount of tokens transferred.
     */
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
