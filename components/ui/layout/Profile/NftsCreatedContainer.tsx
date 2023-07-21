import { useListedNfts } from '@hooks';
import { useOwnedNfts } from '@hooks/web3';
import { NFTCard } from '@ui/nft';
import { NFTToken } from '@_types/enums';
import React from 'react';
import nftsData from '../../../../content/nfts.json';

function NftsCreatedContainer() {
  const { nfts } = useOwnedNfts();
  return (
    <section className='mt-8 pb-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-4 h-[600px] overflow-y-auto pr-4'>
      {nfts?.data?.map(nft => (
        <NFTCard
          key={nft.tokenId}
          image={nft.meta?.image || ''}
          name={nft.meta?.name || ''}
          price={nft.price}
          tokenId={nft.tokenId}
          token={undefined} //TODO: nft.token as NFTToken [revisar falla en propiedad nft.token]
        />
      ))}
    </section>
  );
}

export default NftsCreatedContainer;
