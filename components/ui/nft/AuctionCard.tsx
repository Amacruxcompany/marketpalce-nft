/* eslint-disable @next/next/no-img-element */
import { Orders } from '@ui/layout';
import React from 'react';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

interface Props {
  nft: any;
}

function AuctionCard({ nft }: Props) {
  const {
    meta: { image, name },
    tokenId,
    price,
  } = nft;
  return (
    <article className='grid md:grid-cols-[2fr_4fr] gap-6 bg-gradient-transparent mb-4 rounded-xl px-3 py-4 items-center'>
      <figure className='h-72 rounded-xl overflow-hidden'>
        <img src={image} alt='' className='object-cover w-full h-full' />
      </figure>
      <section>
        <header className='flex justify-between pt-4'>
          <div>
            <h3 className='uppercase'>{name}</h3>
            <span className='text-blue dark:text-gray text-sm mr-28 mb-3'>
              ID {tokenId}
            </span>
            <div className='flex gap-2 items-center'>
              <figure className='w-5 h-5 rounded-full overflow-hidden'>
                <img
                  src='/images/default_avatar.png'
                  alt=''
                  className='object-cover w-full h-full'
                />
              </figure>
              <p className='text-xs text-blue dark:text-gray'>Daniel Capote</p>
            </div>
          </div>
          <div>
            <p className='bg-blue-light text-blue rounded-lg uppercase px-2 py-2'>
              English Auction
            </p>
            <p className='text-blue dark:text-gray text-xs text-end mt-2'>
              Opening price{' '}
              <strong className='text-black dark:text-white'>
                {price} BNB
              </strong>
            </p>
          </div>
        </header>
        <div className='-mt-6 px-8 mb-2'>
          <Orders orders={2} />
        </div>
        <footer>
          <p className='text-xs text-blue dark:text-gray text-end'>
            <WatchLaterIcon className='mr-1 text-blue dark:text-blue-light' />{' '}
            Auctions ends in{' '}
            <strong className='text-black dark:text-white'>
              Saturday, 12 at 10:00:00 UTC
            </strong>
          </p>
        </footer>
      </section>
    </article>
  );
}

export default AuctionCard;
