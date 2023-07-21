/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/solid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { NFTToken } from '@_types/enums';
import { useEffect, useState } from 'react';
import { useOwnedNfts } from '@hooks/web3';

import { Nft } from '@_types/nft';



interface Props {
  image: string;
  name: string;
  price: number | undefined;
  tokenId: number | undefined;
  token: NFTToken | undefined;
}

const NFTCard: React.FC<Props> = ({ image, name, tokenId, price, token }) => {
  const { nfts }  = useOwnedNfts();
  
  const [activeNft, setActiveNft] = useState<Nft>();
  useEffect(() => {
    if (nfts.data && nfts.data.length > 0) {
      setActiveNft(nfts.data[0]);
    }

    return () => setActiveNft(undefined)
  }, [nfts.data])
  
  return (
    // <Link href='/nft/details'>
      <a
        className={`bg-gradient-transparent rounded-2xl pt-3`}
        // onClick={() => setActiveNft(nft)}
      >
        <header className='px-3'>
          <figure className='w-full h-32 overflow-hidden rounded-xl'>
            <img src={image} alt='' className='object-cover w-full h-full' />
          </figure>
        </header>
        <div className='mt-2 flex flex-wrap justify-between px-3 items-center'>
          <h2 className='text-blue dark:text-gray text-xs'>{name}</h2>
          <span>
            <Image
              src={`/assets/icons/bnb-chain-icon.png`}
              alt='ethereum icon'
              width={20}
              height={20}
            />
          </span>
          <span className='text-xs mr-28 mb-3'>ID {tokenId}</span>
          <h3 className='text-xs bg-gradient-to-tr from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.10)] rounded-md px-1 py-1 shadow-lg flex gap-1 items-center'>
            Your NFT
            <CheckCircleIcon className='text-blue dark:text-blue-light w-3 h-3' />
          </h3>
          <strong className='font-semibold text-blue dark:text-blue-light text-sm'>
            {price} {token}
          </strong>
        </div>
        <footer style={{backgroundColor: "transparent"}} className='bg-blue dark:bg-blue-light rounded-md text-blue-light dark:text-blue mt-6 flex justify-between'>
          {/* <button className='text-xs font-bold px-3 w-full text-left uppercase'>
            Available
          </button> */}
          { activeNft &&
            <button
              disabled={activeNft.isListed}
              onClick={() => {
                if( activeNft.tokenId && activeNft.price) {
                  nfts.listNft(
                    activeNft.tokenId,
                    activeNft.price
                  )
                }
              }}
              type="button"
              className="bg-blue dark:bg-blue-light disabled:text-gray-400 disabled:cursor-not-allowed flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {activeNft.isListed ? "Nft is listed": "List Nft"}
            </button>
            }
          <button className='px-3'>
            <MoreHorizIcon />
          </button>
        </footer>
      </a>
  );
};

export default NFTCard;
