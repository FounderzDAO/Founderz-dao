// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import "./dependencies/TimelockController.sol";

contract MyTimelock is TimelockController {
    constructor(uint256 delay, address[] memory proposers, address[] memory executors, address admin) TimelockController(delay, proposers, executors, admin) {}
}
