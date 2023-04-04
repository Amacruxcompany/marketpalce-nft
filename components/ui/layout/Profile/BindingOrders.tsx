import { useListedNfts } from '@hooks';
import AuctionCard from '@ui/nft/AuctionCard';
import React from 'react';
import nftsData from '../../../../content/nfts.json';

function BindingOrders() {
  const { nfts } = useListedNfts();
  return (
    <section>
      {nfts?.data?.map(nft => (
        <AuctionCard key={nft.tokenId} nft={nft} />
      ))}
    </section>
  );
}

export default BindingOrders;
