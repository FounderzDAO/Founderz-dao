/**
 *Submitted for verification at Etherscan.io on ...
*/

// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
// @notice: Use https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol for os trfer to treas
// @notice OpenZeppelin governor contract with modifications for Founderz DAO
contract FounderzDaoGovernor is Governor, GovernorSettings, GovernorCompatibilityBravo, GovernorVotes, GovernorVotesQuorumFraction, GovernorTimelockControl {
    // DaoEvents
     /// @notice An event emitted when a new proposal is created
    event ProposalCreated(
        uint256 id,
        address proposer,
        address[] targets,
        uint256[] values,
        string[] signatures,
        bytes[] calldatas,
        uint256 startBlock,
        uint256 endBlock,
        string description
    );

    event ProposalCreatedWithRequirements(
        uint256 id,
        address proposer,
        address[] targets,
        uint256[] values,
        string[] signatures,
        bytes[] calldatas,
        uint256 startBlock,
        uint256 endBlock,
        uint256 proposalThreshold,
        uint256 quorumVotes,
        string description
    );

    /// @notice An event emitted when a vote has been cast on a proposal
    /// @param voter The address which casted a vote
    /// @param proposalId The proposal id which was voted on
    /// @param support Support value for the vote. 0=against, 1=for, 2=abstain
    /// @param votes Number of votes which were cast by the voter
    /// @param reason The reason given for the vote by the voter
    event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 votes, string reason);

    /// @notice An event emitted when a proposal has been canceled
    event ProposalCanceled(uint256 id);

    /// @notice An event emitted when a proposal has been queued in the FounderzDAOExecutor
    event ProposalQueued(uint256 id, uint256 eta);

    /// @notice An event emitted when a proposal has been executed in the FounderzDAOExecutor
    event ProposalExecuted(uint256 id);

    /// @notice An event emitted when a proposal has been vetoed by vetoAddress
    event ProposalVetoed(uint256 id);

    /// @notice An event emitted when the voting delay is set
    event VotingDelaySet(uint256 oldVotingDelay, uint256 newVotingDelay);

    /// @notice An event emitted when the voting period is set
    event VotingPeriodSet(uint256 oldVotingPeriod, uint256 newVotingPeriod);

    /// @notice Emitted when implementation is changed
    event NewImplementation(address oldImplementation, address newImplementation);

    /// @notice Emitted when proposal threshold basis points is set
    event ProposalThresholdBPSSet(uint256 oldProposalThresholdBPS, uint256 newProposalThresholdBPS);

    /// @notice Emitted when quorum votes basis points is set
    event QuorumVotesBPSSet(uint256 oldQuorumVotesBPS, uint256 newQuorumVotesBPS);

    /// @notice Emitted when pendingAdmin is changed
    event NewPendingAdmin(address oldPendingAdmin, address newPendingAdmin);

    /// @notice Emitted when pendingAdmin is accepted, which means admin is updated
    event NewAdmin(address oldAdmin, address newAdmin);

    /// @notice Emitted when vetoer is changed
    event NewVetoer(address oldVetoer, address newVetoer);
    
    // Constructor for FounderzDaoGovernor, current: v1
    constructor(IVotes _token, TimelockController _timelock)
        Governor("FounderzDaoGovernor")
        GovernorSettings(1 /* 1 block */, 300 /* 1 hour */, 0)
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(4)
        GovernorTimelockControl(_timelock)
    {}

    // The following functions are overrides required by Solidity.

    function votingDelay()
        public
        view
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingDelay();
    }

    function votingPeriod()
        public
        view
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingPeriod();
    }

    function quorum(uint256 blockNumber)
        public
        view
        override(IGovernor, GovernorVotesQuorumFraction)
        returns (uint256)
    {
        return super.quorum(blockNumber);
    }

    function state(uint256 proposalId)
        public
        view
        override(Governor, IGovernor, GovernorTimelockControl)
        returns (ProposalState)
    {
        return super.state(proposalId);
    }

    function propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description)
        public
        override(Governor, GovernorCompatibilityBravo, IGovernor)
        returns (uint256)
    {
        return super.propose(targets, values, calldatas, description);
    }

    function proposalThreshold()
        public
        view
        override(Governor, GovernorSettings)
        returns (uint256)
    {
        return super.proposalThreshold();
    }

    function _execute(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
        internal
        override(Governor, GovernorTimelockControl)
    {
        super._execute(proposalId, targets, values, calldatas, descriptionHash);
    }

    function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
        internal
        override(Governor, GovernorTimelockControl)
        returns (uint256)
    {
        return super._cancel(targets, values, calldatas, descriptionHash);
    }

    function _executor()
        internal
        view
        override(Governor, GovernorTimelockControl)
        returns (address)
    {
        return super._executor();
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(Governor, IERC165, GovernorTimelockControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

/// @notice Founderz DAO executor/logic implementation
contract FounderzDAOV1 is FounderzDaoGovernor, accessControl, reetrancyGuard {
/// @notice Interface for FounderzNFT: Used to check if a user has a FounderzNFT
  interface IFounderzNFT {
    function balanceOf(address owner) external view returns (uint256);
    }

// // Modifiers
  modifier onlyFounderz() {
  require(IFounderzNFT(nftAddress).balanceOf(msg.sender) > 0, "Must hold at least 1 FounderzNFT to propose");    
  _;
} 
/// @dev Temporary v1 modifier: will be modified to allow for vetoing by founderz multisig
  modifier onlyVetoer() {
  // To define vetoer as Founderz Multisig(Tbc..)
  require(msg.sender == FounderzVetoer, "Must be FounderzVetoer to veto");
   _;
}    

// // Key Functions
// function submitProposal(string memory description) public onlyFounderz {
//     require(FounderzDaoGovernor.state(proposalId) == ProposalState.Pending, "Proposal must be pending to submit");
//     require(FounderzDaoGovernor.proposalThreshold() > 0, "Proposal threshold must be greater than 0");
    
//     uint256 proposalId = FounderzDaoGovernor.propose(targets, values, calldatas, description);
//     // logic to create and store the proposal
// }

// function founderzVote(uint256 proposalId, bool approve) public onlyFounderz {
//     // Re-order
//     require(FounderzDaoGovernor.state(proposalId) == ProposalState.Active, "Proposal must be active to vote");
//     uint256 votes = IFounderzNFT(nftAddress).balanceOf(msg.sender);
//     require(votes > 0, "Must hold at least 1 NFT to vote");
//     // logic to record the vote
// }

    /// @notice: To be Modified and re-structured given new context of accessControl, FounderzDAOGovernor, potentially Own2Step, IFounderzToken.     
    /// @notice The name of this contract
    string public constant name = 'Founderz DAO';

    /// @notice The minimum setable proposal threshold
    uint256 public constant MIN_PROPOSAL_THRESHOLD_BPS = 1; // 1 basis point or 0.01%

    /// @notice The maximum setable proposal threshold
    uint256 public constant MAX_PROPOSAL_THRESHOLD_BPS = 1_000; // 1,000 basis points or 10%

    /// @notice The minimum setable voting period
    uint256 public constant MIN_VOTING_PERIOD = 5_760; // About 24 hours

    /// @notice The max setable voting period
    uint256 public constant MAX_VOTING_PERIOD = 80_640; // About 2 weeks

    /// @notice The min setable voting delay
    uint256 public constant MIN_VOTING_DELAY = 1;

    /// @notice The max setable voting delay
    uint256 public constant MAX_VOTING_DELAY = 40_320; // About 1 week

    /// @notice The minimum setable quorum votes basis points
    uint256 public constant MIN_QUORUM_VOTES_BPS = 200; // 200 basis points or 2%

    /// @notice The maximum setable quorum votes basis points
    uint256 public constant MAX_QUORUM_VOTES_BPS = 2_000; // 2,000 basis points or 20%

    /// @notice The maximum number of actions that can be included in a proposal
    uint256 public constant proposalMaxOperations = 10; // 10 actions

    /// @notice The EIP-712 typehash for the contract's domain
    bytes32 public constant DOMAIN_TYPEHASH =
        keccak256('EIP712Domain(string name,uint256 chainId,address verifyingContract)');

    /// @notice The EIP-712 typehash for the ballot struct used by the contract
    bytes32 public constant BALLOT_TYPEHASH = keccak256('Ballot(uint256 proposalId,uint8 support)');

    /**
     * @notice Used to initialize the contract during delegator contructor
     * @param timelock_ The address of the FounderzDAOExecutor
     * @param founders_ The address of the FOUNDER tokens
     * @param vetoer_ The address allowed to unilaterally veto proposals
     * @param votingPeriod_ The initial voting period
     * @param votingDelay_ The initial voting delay
     * @param proposalThresholdBPS_ The initial proposal threshold in basis points
     * * @param quorumVotesBPS_ The initial quorum votes threshold in basis points
     */
    function initialize(
        address timelock_,
        address founders_,
        address vetoer_,
        uint256 votingPeriod_,
        uint256 votingDelay_,
        uint256 proposalThresholdBPS_,
        uint256 quorumVotesBPS_
    ) public virtual {
        require(address(timelock) == address(0), 'FounderzDAO::initialize: can only initialize once');
        require(msg.sender == admin, 'FounderzDAO::initialize: admin only');
        require(timelock_ != address(0), 'FounderzDAO::initialize: invalid timelock address');
        require(founders_ != address(0), 'FounderzDAO::initialize: invalid founders address');
        require(
            votingPeriod_ >= MIN_VOTING_PERIOD && votingPeriod_ <= MAX_VOTING_PERIOD,
            'FounderzDAO::initialize: invalid voting period'
        );
        require(
            votingDelay_ >= MIN_VOTING_DELAY && votingDelay_ <= MAX_VOTING_DELAY,
            'FounderzDAO::initialize: invalid voting delay'
        );
        require(
            proposalThresholdBPS_ >= MIN_PROPOSAL_THRESHOLD_BPS && proposalThresholdBPS_ <= MAX_PROPOSAL_THRESHOLD_BPS,
            'FounderzDAO::initialize: invalid proposal threshold'
        );
        require(
            quorumVotesBPS_ >= MIN_QUORUM_VOTES_BPS && quorumVotesBPS_ <= MAX_QUORUM_VOTES_BPS,
            'FounderzDAO::initialize: invalid proposal threshold'
        );

        emit VotingPeriodSet(votingPeriod, votingPeriod_);
        emit VotingDelaySet(votingDelay, votingDelay_);
        emit ProposalThresholdBPSSet(proposalThresholdBPS, proposalThresholdBPS_);
        emit QuorumVotesBPSSet(quorumVotesBPS, quorumVotesBPS_);

        timelock = IFounderzDAOExecutor(timelock_);
        founders = FoundersTokenLike(founders_);
        vetoer = vetoer_;
        votingPeriod = votingPeriod_;
        votingDelay = votingDelay_;
        proposalThresholdBPS = proposalThresholdBPS_;
        quorumVotesBPS = quorumVotesBPS_;
    }

    struct ProposalTemp {
        uint256 totalSupply;
        uint256 proposalThreshold;
        uint256 latestProposalId;
        uint256 startBlock;
        uint256 endBlock;
    }

    /**
     * @notice Function used to propose a new proposal. Sender must have delegates above the proposal threshold
     * @param targets Target addresses for proposal calls
     * @param values Eth values for proposal calls
     * @param signatures Function signatures for proposal calls
     * @param calldatas Calldatas for proposal calls
     * @param description String description of the proposal
     * @return Proposal id of new proposal
     */
    function propose(
        address[] memory targets,
        uint256[] memory values,
        string[] memory signatures,
        bytes[] memory calldatas,
        string memory description
    ) public returns (uint256) {
        ProposalTemp memory temp;

        temp.totalSupply = founders.totalSupply();

        temp.proposalThreshold = bps2Uint(proposalThresholdBPS, temp.totalSupply);

        require(
            founders.getPriorVotes(msg.sender, block.number - 1) > temp.proposalThreshold,
            'FounderzDAO::propose: proposer votes below proposal threshold'
        );
        require(
            targets.length == values.length &&
                targets.length == signatures.length &&
                targets.length == calldatas.length,
            'FounderzDAO::propose: proposal function information arity mismatch'
        );
        require(targets.length != 0, 'FounderzDAO::propose: must provide actions');
        require(targets.length <= proposalMaxOperations, 'FounderzDAO::propose: too many actions');

        temp.latestProposalId = latestProposalIds[msg.sender];
        if (temp.latestProposalId != 0) {
            ProposalState proposersLatestProposalState = state(temp.latestProposalId);
            require(
                proposersLatestProposalState != ProposalState.Active,
                'FounderzDAO::propose: one live proposal per proposer, found an already active proposal'
            );
            require(
                proposersLatestProposalState != ProposalState.Pending,
                'FounderzDAO::propose: one live proposal per proposer, found an already pending proposal'
            );
        }

        temp.startBlock = block.number + votingDelay;
        temp.endBlock = temp.startBlock + votingPeriod;

        proposalCount++;
        Proposal storage newProposal = proposals[proposalCount];

        newProposal.id = proposalCount;
        newProposal.proposer = msg.sender;
        newProposal.proposalThreshold = temp.proposalThreshold;
        newProposal.quorumVotes = bps2Uint(quorumVotesBPS, temp.totalSupply);
        newProposal.eta = 0;
        newProposal.targets = targets;
        newProposal.values = values;
        newProposal.signatures = signatures;
        newProposal.calldatas = calldatas;
        newProposal.startBlock = temp.startBlock;
        newProposal.endBlock = temp.endBlock;
        newProposal.forVotes = 0;
        newProposal.againstVotes = 0;
        newProposal.abstainVotes = 0;
        newProposal.canceled = false;
        newProposal.executed = false;
        newProposal.vetoed = false;

        latestProposalIds[newProposal.proposer] = newProposal.id;

        /// @notice Maintains backwards compatibility with GovernorBravo events
        emit ProposalCreated(
            newProposal.id,
            msg.sender,
            targets,
            values,
            signatures,
            calldatas,
            newProposal.startBlock,
            newProposal.endBlock,
            description
        );

        /// @notice Updated event with `proposalThreshold` and `quorumVotes`
        emit ProposalCreatedWithRequirements(
            newProposal.id,
            msg.sender,
            targets,
            values,
            signatures,
            calldatas,
            newProposal.startBlock,
            newProposal.endBlock,
            newProposal.proposalThreshold,
            newProposal.quorumVotes,
            description
        );

        return newProposal.id;
    }

    /**
     * @notice Queues a proposal of state succeeded
     * @param proposalId The id of the proposal to queue
     */
    function queue(uint256 proposalId) external {
        require(
            state(proposalId) == ProposalState.Succeeded,
            'FounderzDAO::queue: proposal can only be queued if it is succeeded'
        );
        Proposal storage proposal = proposals[proposalId];
        uint256 eta = block.timestamp + timelock.delay();
        for (uint256 i = 0; i < proposal.targets.length; i++) {
            queueOrRevertInternal(
                proposal.targets[i],
                proposal.values[i],
                proposal.signatures[i],
                proposal.calldatas[i],
                eta
            );
        }
        proposal.eta = eta;
        emit ProposalQueued(proposalId, eta);
    }

    function queueOrRevertInternal(
        address target,
        uint256 value,
        string memory signature,
        bytes memory data,
        uint256 eta
    ) internal {
        require(
            !timelock.queuedTransactions(keccak256(abi.encode(target, value, signature, data, eta))),
            'FounderzDAO::queueOrRevertInternal: identical proposal action already queued at eta'
        );
        timelock.queueTransaction(target, value, signature, data, eta);
    }

    /**
     * @notice Executes a queued proposal if eta has passed
     * @param proposalId The id of the proposal to execute
     */
    function execute(uint256 proposalId) external {
        require(
            state(proposalId) == ProposalState.Queued,
            'FounderzDAO::execute: proposal can only be executed if it is queued'
        );
        Proposal storage proposal = proposals[proposalId];
        proposal.executed = true;
        for (uint256 i = 0; i < proposal.targets.length; i++) {
            timelock.executeTransaction(
                proposal.targets[i],
                proposal.values[i],
                proposal.signatures[i],
                proposal.calldatas[i],
                proposal.eta
            );
        }
        emit ProposalExecuted(proposalId);
    }

    /**
     * @notice Cancels a proposal only if sender is the proposer, or proposer delegates dropped below proposal threshold
     * @param proposalId The id of the proposal to cancel
     */
    function cancel(uint256 proposalId) external {
        require(state(proposalId) != ProposalState.Executed, 'FounderzDAO::cancel: cannot cancel executed proposal');

        Proposal storage proposal = proposals[proposalId];
        require(
            msg.sender == proposal.proposer ||
                founders.getPriorVotes(proposal.proposer, block.number - 1) < proposal.proposalThreshold,
            'FounderzDAO::cancel: proposer above threshold'
        );

        proposal.canceled = true;
        for (uint256 i = 0; i < proposal.targets.length; i++) {
            timelock.cancelTransaction(
                proposal.targets[i],
                proposal.values[i],
                proposal.signatures[i],
                proposal.calldatas[i],
                proposal.eta
            );
        }

        emit ProposalCanceled(proposalId);
    }

    /**
     * @notice Vetoes a proposal only if sender is the vetoer and the proposal has not been executed.
     * @param proposalId The id of the proposal to veto
     */
    function veto(uint256 proposalId) external {
        require(vetoer != address(0), 'FounderzDAO::veto: veto power burned');
        require(msg.sender == vetoer, 'FounderzDAO::veto: only vetoer');
        require(state(proposalId) != ProposalState.Executed, 'FounderzDAO::veto: cannot veto executed proposal');

        Proposal storage proposal = proposals[proposalId];

        proposal.vetoed = true;
        for (uint256 i = 0; i < proposal.targets.length; i++) {
            timelock.cancelTransaction(
                proposal.targets[i],
                proposal.values[i],
                proposal.signatures[i],
                proposal.calldatas[i],
                proposal.eta
            );
        }

        emit ProposalVetoed(proposalId);
    }

    /**
     * @notice Gets actions of a proposal
     * @param proposalId the id of the proposal
     * @return targets
     * @return values
     * @return signatures
     * @return calldatas
     */
    function getActions(uint256 proposalId)
        external
        view
        returns (
            address[] memory targets,
            uint256[] memory values,
            string[] memory signatures,
            bytes[] memory calldatas
        )
    {
        Proposal storage p = proposals[proposalId];
        return (p.targets, p.values, p.signatures, p.calldatas);
    }

    /**
     * @notice Gets the receipt for a voter on a given proposal
     * @param proposalId the id of proposal
     * @param voter The address of the voter
     * @return The voting receipt
     */
    function getReceipt(uint256 proposalId, address voter) external view returns (Receipt memory) {
        return proposals[proposalId].receipts[voter];
    }

    /**
     * @notice Gets the state of a proposal
     * @param proposalId The id of the proposal
     * @return Proposal state
     */
    function state(uint256 proposalId) public view returns (ProposalState) {
        require(proposalCount >= proposalId, 'FounderzDAO::state: invalid proposal id');
        Proposal storage proposal = proposals[proposalId];
        if (proposal.vetoed) {
            return ProposalState.Vetoed;
        } else if (proposal.canceled) {
            return ProposalState.Canceled;
        } else if (block.number <= proposal.startBlock) {
            return ProposalState.Pending;
        } else if (block.number <= proposal.endBlock) {
            return ProposalState.Active;
        } else if (proposal.forVotes <= proposal.againstVotes || proposal.forVotes < proposal.quorumVotes) {
            return ProposalState.Defeated;
        } else if (proposal.eta == 0) {
            return ProposalState.Succeeded;
        } else if (proposal.executed) {
            return ProposalState.Executed;
        } else if (block.timestamp >= proposal.eta + timelock.GRACE_PERIOD()) {
            return ProposalState.Expired;
        } else {
            return ProposalState.Queued;
        }
    }

    /**
     * @notice Cast a vote for a proposal
     * @param proposalId The id of the proposal to vote on
     * @param support The support value for the vote. 0=against, 1=for, 2=abstain
     */
    function castVote(uint256 proposalId, uint8 support) external {
        emit VoteCast(msg.sender, proposalId, support, castVoteInternal(msg.sender, proposalId, support), '');
    }

    /**
     * @notice Cast a vote for a proposal with a reason
     * @param proposalId The id of the proposal to vote on
     * @param support The support value for the vote. 0=against, 1=for, 2=abstain
     * @param reason The reason given for the vote by the voter
     */
    function castVoteWithReason(
        uint256 proposalId,
        uint8 support,
        string calldata reason
    ) external {
        emit VoteCast(msg.sender, proposalId, support, castVoteInternal(msg.sender, proposalId, support), reason);
    }

    /**
     * @notice Cast a vote for a proposal by signature
     * @dev External function that accepts EIP-712 signatures for voting on proposals.
     */
    function castVoteBySig(
        uint256 proposalId,
        uint8 support,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {
        bytes32 domainSeparator = keccak256(
            abi.encode(DOMAIN_TYPEHASH, keccak256(bytes(name)), getChainIdInternal(), address(this))
        );
        bytes32 structHash = keccak256(abi.encode(BALLOT_TYPEHASH, proposalId, support));
        bytes32 digest = keccak256(abi.encodePacked('\x19\x01', domainSeparator, structHash));
        address signatory = ecrecover(digest, v, r, s);
        require(signatory != address(0), 'FounderzDAO::castVoteBySig: invalid signature');
        emit VoteCast(signatory, proposalId, support, castVoteInternal(signatory, proposalId, support), '');
    }

    /**
     * @notice Internal function that caries out voting logic
     * @param voter The voter that is casting their vote
     * @param proposalId The id of the proposal to vote on
     * @param support The support value for the vote. 0=against, 1=for, 2=abstain
     * @return The number of votes cast
     */
    function castVoteInternal(
        address voter,
        uint256 proposalId,
        uint8 support
    ) internal returns (uint96) {
        require(state(proposalId) == ProposalState.Active, 'FounderzDAO::castVoteInternal: voting is closed');
        require(support <= 2, 'FounderzDAO::castVoteInternal: invalid vote type');
        Proposal storage proposal = proposals[proposalId];
        Receipt storage receipt = proposal.receipts[voter];
        require(receipt.hasVoted == false, 'FounderzDAO::castVoteInternal: voter already voted');

        /// @notice: Unlike GovernerBravo, votes are considered from the block the proposal was created in order to normalize quorumVotes and proposalThreshold metrics
        uint96 votes = founders.getPriorVotes(voter, proposal.startBlock - votingDelay);

        if (support == 0) {
            proposal.againstVotes = proposal.againstVotes + votes;
        } else if (support == 1) {
            proposal.forVotes = proposal.forVotes + votes;
        } else if (support == 2) {
            proposal.abstainVotes = proposal.abstainVotes + votes;
        }

        receipt.hasVoted = true;
        receipt.support = support;
        receipt.votes = votes;

        return votes;
    }

    /**
     * @notice Admin function for setting the voting delay
     * @param newVotingDelay new voting delay, in blocks
     */
    function _setVotingDelay(uint256 newVotingDelay) external {
        require(msg.sender == admin, 'FounderzDAO::_setVotingDelay: admin only');
        require(
            newVotingDelay >= MIN_VOTING_DELAY && newVotingDelay <= MAX_VOTING_DELAY,
            'FounderzDAO::_setVotingDelay: invalid voting delay'
        );
        uint256 oldVotingDelay = votingDelay;
        votingDelay = newVotingDelay;

        emit VotingDelaySet(oldVotingDelay, votingDelay);
    }

    /**
     * @notice Admin function for setting the voting period
     * @param newVotingPeriod new voting period, in blocks
     */
    function _setVotingPeriod(uint256 newVotingPeriod) external {
        require(msg.sender == admin, 'FounderzDAO::_setVotingPeriod: admin only');
        require(
            newVotingPeriod >= MIN_VOTING_PERIOD && newVotingPeriod <= MAX_VOTING_PERIOD,
            'FounderzDAO::_setVotingPeriod: invalid voting period'
        );
        uint256 oldVotingPeriod = votingPeriod;
        votingPeriod = newVotingPeriod;

        emit VotingPeriodSet(oldVotingPeriod, votingPeriod);
    }

    /**
     * @notice Admin function for setting the proposal threshold basis points
     * @dev newProposalThresholdBPS must be greater than the hardcoded min
     * @param newProposalThresholdBPS new proposal threshold
     */
    function _setProposalThresholdBPS(uint256 newProposalThresholdBPS) external {
        require(msg.sender == admin, 'FounderzDAO::_setProposalThresholdBPS: admin only');
        require(
            newProposalThresholdBPS >= MIN_PROPOSAL_THRESHOLD_BPS &&
                newProposalThresholdBPS <= MAX_PROPOSAL_THRESHOLD_BPS,
            'FounderzDAO::_setProposalThreshold: invalid proposal threshold'
        );
        uint256 oldProposalThresholdBPS = proposalThresholdBPS;
        proposalThresholdBPS = newProposalThresholdBPS;

        emit ProposalThresholdBPSSet(oldProposalThresholdBPS, proposalThresholdBPS);
    }

    /**
     * @notice Admin function for setting the quorum votes basis points
     * @dev newQuorumVotesBPS must be greater than the hardcoded min
     * @param newQuorumVotesBPS new proposal threshold
     */
    function _setQuorumVotesBPS(uint256 newQuorumVotesBPS) external {
        require(msg.sender == admin, 'FounderzDAO::_setQuorumVotesBPS: admin only');
        require(
            newQuorumVotesBPS >= MIN_QUORUM_VOTES_BPS && newQuorumVotesBPS <= MAX_QUORUM_VOTES_BPS,
            'FounderzDAO::_setProposalThreshold: invalid proposal threshold'
        );
        uint256 oldQuorumVotesBPS = quorumVotesBPS;
        quorumVotesBPS = newQuorumVotesBPS;

        emit QuorumVotesBPSSet(oldQuorumVotesBPS, quorumVotesBPS);
    }

    /**
     * @notice Begins transfer of admin rights. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.
     * @dev Admin function to begin change of admin. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.
     * @param newPendingAdmin New pending admin.
     */
    function _setPendingAdmin(address newPendingAdmin) external {
        // Check caller = admin
        require(msg.sender == admin, 'FounderzDAO::_setPendingAdmin: admin only');

        // Save current value, if any, for inclusion in log
        address oldPendingAdmin = pendingAdmin;

        // Store pendingAdmin with value newPendingAdmin
        pendingAdmin = newPendingAdmin;

        // Emit NewPendingAdmin(oldPendingAdmin, newPendingAdmin)
        emit NewPendingAdmin(oldPendingAdmin, newPendingAdmin);
    }

    /**
     * @notice Accepts transfer of admin rights. msg.sender must be pendingAdmin
     * @dev Admin function for pending admin to accept role and update admin
     */
    function _acceptAdmin() external {
        // Check caller is pendingAdmin and pendingAdmin ≠ address(0)
        require(msg.sender == pendingAdmin && msg.sender != address(0), 'FounderzDAO::_acceptAdmin: pending admin only');

        // Save current values for inclusion in log
        address oldAdmin = admin;
        address oldPendingAdmin = pendingAdmin;

        // Store admin with value pendingAdmin
        admin = pendingAdmin;

        // Clear the pending value
        pendingAdmin = address(0);

        emit NewAdmin(oldAdmin, admin);
        emit NewPendingAdmin(oldPendingAdmin, pendingAdmin);
    }

    /**
     * @notice Changes vetoer address
     * @dev Vetoer function for updating vetoer address
     */
    function _setVetoer(address newVetoer) public {
        require(msg.sender == vetoer, 'FounderzDAO::_setVetoer: vetoer only');

        emit NewVetoer(vetoer, newVetoer);

        vetoer = newVetoer;
    }

    /**
     * @notice Burns veto priviledges
     * @dev Vetoer function destroying veto power forever
     */
    function _burnVetoPower() public {
        // Check caller is pendingAdmin and pendingAdmin ≠ address(0)
        require(msg.sender == vetoer, 'FounderzDAO::_burnVetoPower: vetoer only');

        _setVetoer(address(0));
    }

    /**
     * @notice Current proposal threshold using Founders Total Supply
     * Differs from `GovernerBravo` which uses fixed amount
     */
    function proposalThreshold() public view returns (uint256) {
        return bps2Uint(proposalThresholdBPS, founders.totalSupply());
    }

    /**
     * @notice Current quorum votes using Founders Total Supply
     * Differs from `GovernerBravo` which uses fixed amount
     */
    function quorumVotes() public view returns (uint256) {
        return bps2Uint(quorumVotesBPS, founders.totalSupply());
    }

    function bps2Uint(uint256 bps, uint256 number) internal pure returns (uint256) {
        return (number * bps) / 10000;
    }

    function getChainIdInternal() internal view returns (uint256) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return chainId;
    }
}


/// @title Founderz DAO logic notes for version 1

// MODIFICATIONS
// FounderzDAOLogicV1 adds:
// - Proposal Threshold basis points instead of fixed number
//   due to the Founderz token's increasing supply
//
// - Quorum Votes basis points instead of fixed number
//   due to the Founderz token's increasing supply
//
// - Per proposal storing of fixed `proposalThreshold`
//   and `quorumVotes` calculated using the Founderz token's total supply
//   at the block the proposal was created and the basis point parameters
//
// - `ProposalCreatedWithRequirements` event that emits `ProposalCreated` parameters with
//   the addition of `proposalThreshold` and `quorumVotes`
//
// - Votes are counted from the block a proposal is created instead of
//   the proposal's voting start block to align with the parameters
//   stored with the proposal
//
// - Veto ability which allows `veteor` to halt any proposal at any stage unless
//   the proposal is executed.
//   The `veto(uint proposalId)` logic is a modified version of `cancel(uint proposalId)`
//   A `vetoed` flag was added to the `Proposal` struct to support this.
//
// FounderzDAOLogicV1 removes:
// - `initialProposalId` and `_initiate()` due to this being the
//   first instance of the governance contract unlike
//   GovernorBravo which upgrades GovernorAlpha
//
// - Value passed along using `timelock.executeTransaction{value: proposal.value}`
//   in `execute(uint proposalId)`. This contract should not hold funds and does not
//   implement `receive()` or `fallback()` functions.
//


/// @dev Old Logic: 
/// @notice Redundant Access control contract for Founderz DAO
/// @title Founderz DAO Access Control: Replace with OpenZepplin AccessControl
/// @author K42 
// contract FounderzDAOProxystorage {
//     /// @notice Administrator for this contract
//     address public admin;

//     /// @notice Pending administrator for this contract
//     address public pendingAdmin;

//     /// @notice Active brains of Governor
//     address public implementation;
// }

/// @notice The Founderz DAO executor and treasury
/**
 * @title Storage for Governor Bravo Delegate
 * @notice For future upgrades, do not change FounderzDAOStorageV1. Create a new
 * contract which implements FounderzDAOStorageV1 and following the naming convention
 * FounderzDAOStorageVX. This is now redudant as will re-define neccessary accessControl and using FounderzDaoGovernor for data-structures and logic which I will expand on.
 */
// contract FounderzDAOStorageV1 is FounderzDAOProxystorage {
//     /// @notice Vetoer who has the ability to veto any proposal
//     address public vetoer;

//     /// @notice The delay before voting on a proposal may take place, once proposed, in blocks
//     uint256 public votingDelay;

//     /// @notice The duration of voting on a proposal, in blocks
//     uint256 public votingPeriod;

//     /// @notice The basis point number of votes required in order for a voter to become a proposer. *DIFFERS from GovernerBravo
//     uint256 public proposalThresholdBPS;

//     /// @notice The basis point number of votes in support of a proposal required in order for a quorum to be reached and for a vote to succeed. *DIFFERS from GovernerBravo
//     uint256 public quorumVotesBPS;

//     /// @notice The total number of proposals
//     uint256 public proposalCount;

//     /// @notice The address of the Founderz DAO Executor FounderzDAOExecutor
//     IFounderzDAOExecutor public timelock;

//     /// @notice The address of the Founders tokens
//     FoundersTokenLike public founders;

//     /// @notice The official record of all proposals ever proposed
//     mapping(uint256 => Proposal) public proposals;

//     /// @notice The latest proposal for each proposer
//     mapping(address => uint256) public latestProposalIds;

//     struct Proposal {
//         /// @notice Unique id for looking up a proposal
//         uint256 id;
//         /// @notice Creator of the proposal
//         address proposer;
//         /// @notice The number of votes needed to create a proposal at the time of proposal creation. *DIFFERS from GovernerBravo
//         uint256 proposalThreshold;
//         /// @notice The number of votes in support of a proposal required in order for a quorum to be reached and for a vote to succeed at the time of proposal creation. *DIFFERS from GovernerBravo
//         uint256 quorumVotes;
//         /// @notice The timestamp that the proposal will be available for execution, set once the vote succeeds
//         uint256 eta;
//         /// @notice the ordered list of target addresses for calls to be made
//         address[] targets;
//         /// @notice The ordered list of values (i.e. msg.value) to be passed to the calls to be made
//         uint256[] values;
//         /// @notice The ordered list of function signatures to be called
//         string[] signatures;
//         /// @notice The ordered list of calldata to be passed to each call
//         bytes[] calldatas;
//         /// @notice The block at which voting begins: holders must delegate their votes prior to this block
//         uint256 startBlock;
//         /// @notice The block at which voting ends: votes must be cast prior to this block
//         uint256 endBlock;
//         /// @notice Current number of votes in favor of this proposal
//         uint256 forVotes;
//         /// @notice Current number of votes in opposition to this proposal
//         uint256 againstVotes;
//         /// @notice Current number of votes for abstaining for this proposal
//         uint256 abstainVotes;
//         /// @notice Flag marking whether the proposal has been canceled
//         bool canceled;
//         /// @notice Flag marking whether the proposal has been vetoed
//         bool vetoed;
//         /// @notice Flag marking whether the proposal has been executed
//         bool executed;
//         /// @notice Receipts of ballots for the entire set of voters
//         mapping(address => Receipt) receipts;
//     }

//     /// @notice Ballot receipt record for a voter
//     struct Receipt {
//         /// @notice Whether or not a vote has been cast
//         bool hasVoted;
//         /// @notice Whether or not the voter supports the proposal or abstains
//         uint8 support;
//         /// @notice The number of votes the voter had, which were cast
//         uint96 votes;
//     }

//     /// @notice Possible states that a proposal may be in
//     enum ProposalState {
//         Pending,
//         Active,
//         Canceled,
//         Defeated,
//         Succeeded,
//         Queued,
//         Expired,
//         Executed,
//         Vetoed
//     }
// }

// interface IFounderzDAOExecutor {
//     function delay() external view returns (uint256);

//     function GRACE_PERIOD() external view returns (uint256);

//     function acceptAdmin() external;

//     function queuedTransactions(bytes32 hash) external view returns (bool);

//     function queueTransaction(
//         address target,
//         uint256 value,
//         string calldata signature,
//         bytes calldata data,
//         uint256 eta
//     ) external returns (bytes32);

//     function cancelTransaction(
//         address target,
//         uint256 value,
//         string calldata signature,
//         bytes calldata data,
//         uint256 eta
//     ) external;

//     function executeTransaction(
//         address target,
//         uint256 value,
//         string calldata signature,
//         bytes calldata data,
//         uint256 eta
//     ) external payable returns (bytes memory);
// }
// interface FoundersTokenLike {
//     function getPriorVotes(address account, uint256 blockNumber) external view returns (uint96);

//     function totalSupply() external view returns (uint96);
// }