/* eslint-disable @next/next/no-img-element */

import { Nft } from '@_types/nft';
import { CryptoSWRResponse } from '@_types/hooks';
import { HeaderProfile, CollectionInfo } from '@ui';
import NFTMarket from '../Home/NFTMarket';
import nftData from '../../../../content/nfts.json';

interface Props {
  nfts: CryptoSWRResponse<Nft[]>;
}

const CollectionContainer: React.FC<Props> = ({ nfts }) => {
  return (
    <section className='max-w-6xl -mb-16'>
      <HeaderProfile />
      {/* <section className='grid grid-cols-[5fr_16fr_4fr] gap-4 -mt-[6px]'> */}
      <section className='grid md:grid-cols-[5fr_20fr] gap-4 -mt-[6px]'>
        <CollectionInfo />
        <main>
          <nav className='mt-12 px-6'>
            <ul className='flex gap-4'>
              <li>
                <a
                  href='#'
                  className='border-2 border-blue dark:border-blue-light rounded-lg bg-transparent dark:bg-blue-light text-black dark:text-blue uppercase py-2 px-6'
                >
                  Items
                </a>
              </li>
            </ul>
          </nav>
          <section
            // className='mt-8 pb-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 h-96 overflow-y-auto pr-4'
            className='mt-8 pb-16 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:max-h-[680px] px-4 overflow-y-auto'
            aria-labelledby='gallery-heading'
          >
            {nftData.map(nft => (
              <NFTMarket
                key={nft.tokenId}
                image={nft.meta?.image || ''}
                name={nft.meta?.name || ''}
                price={nft.price}
                tokenId={nft.tokenId}
              />
            ))}
            {nftData.map(nft => (
              <NFTMarket
                key={nft.tokenId}
                image={nft.meta?.image || ''}
                name={nft.meta?.name || ''}
                price={nft.price}
                tokenId={nft.tokenId}
              />
            ))}
          </section>
        </main>
      </section>
    </section>
  );
};

export default CollectionContainer;
