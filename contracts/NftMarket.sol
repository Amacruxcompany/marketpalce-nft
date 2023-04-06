// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract NftMarket is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;

  struct NftItem {
    uint256 tokenId;
    uint256 price;
    address creator;
    bool isListed;
  }

  uint256 public listingPrice = 0.025 ether;

  Counters.Counter private _listedItems;
  Counters.Counter private _tokenIds;

  mapping(string => bool) private _usedTokenURIs;
  mapping(uint256 => NftItem) private _idToNftItem;

  mapping(address => mapping(uint256 => uint256)) private _ownedTokens;
  mapping(uint256 => uint256) private _idToOwnedIndex;

  uint256[] private _allNfts;
  mapping(uint256 => uint256) private _idToNftIndex;

  event NftItemCreated(
    uint256 tokenId,
    uint256 price,
    address creator,
    bool isListed
  );
  event ConsecutiveTransfer(
    uint256 indexed fromTokenId,
    uint256 toTokenId,
    address indexed fromAddress,
    address indexed toAddress
  );


  constructor() ERC721('AmacruxNFT', 'ANFT') {}

/*@dev
  setListingPrice : This function allows the owner of the NFT marketplace contract to set a new listing price for NFTs. The new price must be greater than 0. The onlyOwner modifier ensures that only the owner of the contract can call this function.
 */
  function setListingPrice(uint256 newPrice) external onlyOwner {
    require(newPrice > 0, 'Price must be at least 1 wei');
    listingPrice = newPrice;
  }

/*@dev 
_init : This is an internal function that initializes a new NFT with the specified number of tokens and transfers it to the specified address. It emits a ConsecutiveTransfer event to indicate that the NFT has been transferred
 */
  function _init(address to, uint256 number_of_tokens) internal virtual {
    emit ConsecutiveTransfer(0, number_of_tokens, address(0), to);
  }


/*@dev
getNftItem: This function returns information about an NFT with the specified token ID, such as its owner, whether it's listed for sale, and its current price.
 */
  function getNftItem(uint256 tokenId) public view returns (NftItem memory) {
    return _idToNftItem[tokenId];
  }

  
  function listedItemsCount() public view returns (uint256) {
    return _listedItems.current();
  }


  function tokenURIExists(string memory tokenURI) public view returns (bool) {
    return _usedTokenURIs[tokenURI] == true;
  }

  //
  function totalSupply() public view returns (uint256) {
    return _allNfts.length;
  }


  function tokenByIndex(uint256 index) public view returns (uint256) {
    require(index < totalSupply(), 'Index out of bounds');
    return _allNfts[index];
  }


  function tokenOfOwnerByIndex(
    address owner,
    uint256 index
  ) public view returns (uint256) {
    require(index < ERC721.balanceOf(owner), 'Index out of bounds');
    return _ownedTokens[owner][index];
  }


  function getAllNftsOnSale() public view returns (NftItem[] memory) {
    uint256 allItemsCounts = totalSupply();
    uint256 currentIndex = 0;
    NftItem[] memory items = new NftItem[](_listedItems.current());

    for (uint256 i = 0; i < allItemsCounts; i++) {
      uint256 tokenId = tokenByIndex(i);
      NftItem storage item = _idToNftItem[tokenId];

      if (item.isListed == true) {
        items[currentIndex] = item;
        currentIndex += 1;
      }
    }

    return items;
  }


  function getOwnedNfts() public view returns (NftItem[] memory) {
    uint256 ownedItemsCount = ERC721.balanceOf(msg.sender);
    NftItem[] memory items = new NftItem[](ownedItemsCount);

    for (uint256 i = 0; i < ownedItemsCount; i++) {
      uint256 tokenId = tokenOfOwnerByIndex(msg.sender, i);
      NftItem storage item = _idToNftItem[tokenId];
      items[i] = item;
    }

    return items;
  }


  function mintToken(
    string memory tokenURI,
    uint256 price
  ) public payable returns (uint256) {
    require(!tokenURIExists(tokenURI), 'Token URI already exists');
    require(msg.value == listingPrice, 'Price must be equal to listing price');

    _tokenIds.increment();
    _listedItems.increment();

    uint256 newTokenId = _tokenIds.current();

    _safeMint(msg.sender, newTokenId);
    _setTokenURI(newTokenId, tokenURI);
    _createNftItem(newTokenId, price);
    _usedTokenURIs[tokenURI] = true;

    return newTokenId;
  }

  function burn(uint256 tokenId) public {
    require(_exists(tokenId), 'Token does not exist');
    _burn(tokenId);
  }

  
  function buyNft(uint256 tokenId) public payable {
    uint256 price = _idToNftItem[tokenId].price;
    address owner = ERC721.ownerOf(tokenId);

    require(msg.sender != owner, 'You already own this NFT');
    require(msg.value == price, 'Please submit the asking price');

    _idToNftItem[tokenId].isListed = false;
    _listedItems.decrement();

    _transfer(owner, msg.sender, tokenId);
    payable(owner).transfer(msg.value);
  }

  
  function placeNftOnSale(uint256 tokenId, uint256 newPrice) public payable {
    require(
      ERC721.ownerOf(tokenId) == msg.sender,
      'You are not owner of this nft'
    );
    require(_idToNftItem[tokenId].isListed == false, 'Item is already on sale');
    require(msg.value == listingPrice, 'Price must be equal to listing price');

    _idToNftItem[tokenId].isListed = true;
    _idToNftItem[tokenId].price = newPrice;
    _listedItems.increment();
  }

  
  function _createNftItem(uint256 tokenId, uint256 price) private {
    require(price > 0, 'Price must be at least 1 wei');

    _idToNftItem[tokenId] = NftItem(tokenId, price, msg.sender, true);

    emit NftItemCreated(tokenId, price, msg.sender, true);
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint tokenId
  ) internal virtual override {
    super._beforeTokenTransfer(from, to, tokenId);

    if (from == address(0)) {
      _addTokenToAllTokensEnumeration(tokenId);
    } else if (from != to) {
      _removeTokenFromOwnerEnumeration(from, tokenId);
    }

    if (to == address(0)) {
      _removeTokenFromAllTokensEnumeration(tokenId);
    } else if (to != from) {
      _addTokenToOwnerEnumeration(to, tokenId);
    }
  }

  function _addTokenToAllTokensEnumeration(uint tokenId) private {
    _idToNftIndex[tokenId] = _allNfts.length;
    _allNfts.push(tokenId);
  }

  function _addTokenToOwnerEnumeration(address to, uint tokenId) private {
    uint length = ERC721.balanceOf(to);
    _ownedTokens[to][length] = tokenId;
    _idToOwnedIndex[tokenId] = length;
  }

  function _removeTokenFromOwnerEnumeration(
    address from,
    uint tokenId
  ) private {
    uint lastTokenIndex = ERC721.balanceOf(from) - 1;
    uint tokenIndex = _idToOwnedIndex[tokenId];

    if (tokenIndex != lastTokenIndex) {
      uint lastTokenId = _ownedTokens[from][lastTokenIndex];

      _ownedTokens[from][tokenIndex] = lastTokenId;
      _idToOwnedIndex[lastTokenId] = tokenIndex;
    }

    delete _idToOwnedIndex[tokenId];
    delete _ownedTokens[from][lastTokenIndex];
  }

  function _removeTokenFromAllTokensEnumeration(uint tokenId) private {
    uint lastTokenIndex = _allNfts.length - 1;
    uint tokenIndex = _idToNftIndex[tokenId];
    uint lastTokenId = _allNfts[lastTokenIndex];

    _allNfts[tokenIndex] = lastTokenId;
    _idToNftIndex[lastTokenId] = tokenIndex;

    delete _idToNftIndex[tokenId];
    _allNfts.pop();
  }

  function _burn(uint256 tokenId) internal override(ERC721URIStorage) {
    super._burn(tokenId);
  }
}
