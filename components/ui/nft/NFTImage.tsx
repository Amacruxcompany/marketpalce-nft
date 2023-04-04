/* eslint-disable react/no-unknown-property */
import Image from 'next/image';

type NFTImageType = {
  image?: string;
  name?: string;
  id?: string;
};

const NFTImage: React.FC<NFTImageType> = ({ image, name, id }) => {
  return (
    <div>
      <button className='flex items-center space-x-3 mb-3' type='button'>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          ></path>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
          ></path>
        </svg>
        <span className='font-bold'>Preview</span>
      </button>

      <div className='bg-transparent-custom rounded-lg mb-5 max-h-96 overflow-hidden shadow-lg flex flex-col justify-center tracking-wide'>
        <Image
          src={`${image ? image : '/assets/img/nft/image.jpeg'}`}
          width={500}
          height={750}
          objectFit='cover'
          alt='Image'
        />
      </div>

      <div>
        {name && <span>{name}</span>}
        {id && <span>Token ID: {id}</span>}
      </div>
    </div>
  );
};
export default NFTImage;
