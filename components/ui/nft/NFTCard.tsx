/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/solid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { NFTToken } from '@_types/enums';

interface Props {
  image: string;
  name: string;
  price: number | undefined;
  tokenId: number | undefined;
  token: NFTToken | undefined;
}

const NFTCard: React.FC<Props> = ({ image, name, tokenId, price, token }) => {
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
            Daniel Capote
            <CheckCircleIcon className='text-blue dark:text-blue-light w-3 h-3' />
          </h3>
          <strong className='font-semibold text-blue dark:text-blue-light text-sm'>
            {price} {token}
          </strong>
        </div>
        <footer className='bg-blue dark:bg-blue-light rounded-md text-blue-light dark:text-blue mt-6 flex justify-between'>
          <button className='text-xs font-bold px-3 w-full text-left uppercase'>
            Available
          </button>
          <button className='px-3'>
            <MoreHorizIcon />
          </button>
        </footer>
      </a>
    </Link>
  );
};

export default NFTCard;
