// contracts/GameItems.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";

contract Poap is
    ERC1155Upgradeable,
    OwnableUpgradeable,
    PausableUpgradeable
{

    constructor() {
    }

    function initialize() public initializer {
        __ERC1155_init("");
        __Ownable_init();
        __Pausable_init();

    }

    function mintTo(
        address[] memory owners,
        uint256[] memory ids,
        uint256[] memory amounts
    ) public onlyOwner {
        require(
            owners.length == ids.length && ids.length == amounts.length,
            "Parameters must have the same length"
        );
        for (uint256 i = 0; i < ids.length; i++) {
            _mint(owners[i], ids[i], amounts[i], "");
        }
    }

    function setUri(string memory newUri) public onlyOwner {
        _setURI(newUri);
    }

    
}
