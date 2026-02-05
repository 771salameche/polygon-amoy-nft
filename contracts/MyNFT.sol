// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId; // simple counter

    constructor()
        ERC721("MyNFT", "MNFT")
        Ownable(msg.sender)
    {}

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId;
        _nextTokenId += 1;

        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
}
