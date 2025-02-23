// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityRegistry {
    // Define a simple Identity structure.
    struct Identity {
        string name;
        string idHash;
    }

    // Mapping from user address to their Identity.
    mapping(address => Identity) public identities;

    // Event emitted when a new identity is registered.
    event IdentityRegistered(address indexed user, string name, string idHash);

    // Register or update the identity for the caller.
    function registerIdentity(string memory name, string memory idHash) public {
        identities[msg.sender] = Identity(name, idHash);
        emit IdentityRegistered(msg.sender, name, idHash);
    }

    // Retrieve the identity for a given address.
    function getIdentity(address user) public view returns (string memory, string memory) {
        Identity memory identity = identities[user];
        return (identity.name, identity.idHash);
    }
}