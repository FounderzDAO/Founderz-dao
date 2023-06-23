// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import "./ERC20.sol";

contract FounderzDAOSoulbound is ERC20 {
    constructor(address newOwner) ERC20("FounderzDAOSoulbound", "FSOL") {
        founderz = newOwner;
    }

    address private founderz;

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(founderz == msg.sender, "Ownable: caller is not the owner");
        _;
    }

    function mint(address founders) external override onlyOwner {
        _mint(founders, 1);
    }
}