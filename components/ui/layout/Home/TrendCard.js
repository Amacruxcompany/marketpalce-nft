import Image from 'next/image';
import EthereumIcon from '@ui/nft/EthereumIcon';
import Link from 'next/link';
import BNBIcon from '@ui/nft/BNBIcon';

const TrendCard = () => {
  return (
    <Link href='/collections/id'>
      <a className='flex flex-col items-center'>
        <Image
          src='/assets/img/nft/image.png'
          alt='collection'
          width={120}
          height={120}
          className='rounded-full'
        />
        <strong className='flex gap-1 items-center mt-2 text-sm'>
          <BNBIcon
            width='10'
            height='10'
            className='fill-blue dark:fill-white'
          />{' '}
          100k
        </strong>
        <span className='text-xs text-blue dark:text-blue-light mt-1'>
          200%
        </span>
      </a>
    </Link>
  );
};

export default TrendCard;
