// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SanctionedToken is ERC777, Ownable {
    mapping(address => bool) private _sanctioned;

    constructor(
        uint256 initialSupply,
        address[] memory defaultOperators
    ) ERC777("SanctionedToken", "SAN", defaultOperators) {
        _mint(msg.sender, initialSupply, "", "");
    }

    function isSanctioned(address account) public view returns (bool) {
        return _sanctioned[account];
    }

    function setSanctioned(address account, bool value) public onlyOwner {
        _sanctioned[account] = value;
    }

    function tokensToSend(
        address operator,
        address from,
        address to,
        uint256 amount,
        bytes calldata userData,
        bytes calldata operatorData
    ) public   {
        require(!_sanctioned[from], "Sender is sanctioned");
        require(!_sanctioned[to], "Recipient is sanctioned");

        super.tokensToSend(operator, from, to, amount, userData, operatorData);
    }

    function tokensReceived(
        address operator,
        address from,
        address to,
        uint256 amount,
        bytes calldata userData,
        bytes calldata operatorData
    ) public  {
        require(!_sanctioned[from], "Sender is sanctioned");
        require(!_sanctioned[to], "Recipient is sanctioned");

        super.tokensReceived(operator, from, to, amount, userData, operatorData);
    }
}
