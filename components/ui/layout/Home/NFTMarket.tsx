/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/solid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EthereumIcon from '@ui/nft/EthereumIcon';
import Link from 'next/link';
import { NFTToken } from '@_types/enums';
import BNBIcon from '@ui/nft/BNBIcon';

interface Props {
  image: string;
  name: string;
  price: number | undefined;
  tokenId: number | undefined;
  token?: NFTToken;
}

const NFTMarket: React.FC<Props> = ({ image, name, tokenId, price, token }) => {
  return (
    <Link href='/nft/details'>
      <a
        className={`bg-gradient-transparent rounded-2xl pt-3`}
        // onClick={() => setActiveNft(nft)}
      >
        <header className='px-3'>
          <figure className='w-full h-32 overflow-hidden rounded-xl'>
            <img src={image} alt='' className='object-cover w-full h-full' />
          </figure>
        </header>
        <div className='mt-2 px-3 mb-4'>
          <h2 className='text-blue dark:text-gray text-xs'>{name}</h2>
          <div className='grid grid-cols-[2fr_1fr] mt-2'>
            <div className='flex flex-col'>
              <span className='text-xs mb-3'>ID {tokenId}</span>
              <span className='text-blue dark:text-gray text-xs'>
                Date 20/12/2022
              </span>
            </div>
            <div className='flex flex-col justify-self-end'>
              <span className='text-[.7rem] text-left'>Top bid</span>
              <span className='text-blue dark:text-blue-light text-xs text-left justify-end flex gap-1 items-center'>
                {token === NFTToken.Eth ? (
                  <EthereumIcon width='9' height='13' />
                ) : (
                  <BNBIcon width='9' height='9' />
                )}
                {price}
              </span>
            </div>
          </div>
        </div>
        <div className='bg-gradient-transparent rounded-md mx-3'>
          <h3 className='text-xs px-1 py-1 shadow-lg flex gap-1 items-center uppercase'>
            Daniel Capote
            <CheckCircleIcon className='text-blue dark:text-blue-light w-3 h-3' />
          </h3>
        </div>
        <footer className='bg-blue dark:bg-blue-light rounded-md text-blue-light dark:text-blue mt-6 flex justify-between items-center overflow-hidden'>
          <span className='text-xs font-bold px-3 uppercase py-1'>
            12:12:12:12
          </span>
          <hr className='h-6 w-[2px] bg-blue-light dark:bg-blue' />
          <button className='text-xs font-bold px-3 uppercase py-1'>
            Offer Now
          </button>
        </footer>
      </a>
    </Link>
  );
};

export default NFTMarket;
