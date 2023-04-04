import EthereumIcon from '@ui/nft/EthereumIcon';
import BNBIcon from '@ui/nft/BNBIcon';

import Image from 'next/image';

interface Props {
  hasDecoration?: boolean;
}

const PriceCard: React.FC<Props> = ({ hasDecoration }) => {
  return (
    <article className='px-6 py-4 rounded-2xl shadow-lg bg-gradient-to-tr from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.10)] w-fit'>
      <h6 className='text-xs text-blue dark:text-blue-light font-semibold'>
        {hasDecoration ? 'Old Price' : 'Price'}
      </h6>
      <section
        className={`${
          hasDecoration && 'line-through decoration-[#FF0000]'
        } flex items-center flex-col mt-2 md:flex-row md:gap-2 md:items-end`}
      >
        <p className='text-3xl flex items-center gap-2'>
          <EthereumIcon width='26' height='42' />
          0.51
        </p>
        <span
          className={`${
            hasDecoration && 'line-through decoration-[#FF0000]'
          } text-[#B2B2B2] text-xs`}
        >
          ($2100)
        </span>
      </section>
      <footer className='flex justify-center mt-2 md:justify-end'>
        <button className='bg-blue text-blue-light  dark:bg-blue-light dark:text-blue text-xs py-1 px-2 rounded-md'>
          Buy now
        </button>
      </footer>
    </article>
  );
};

export default PriceCard;
