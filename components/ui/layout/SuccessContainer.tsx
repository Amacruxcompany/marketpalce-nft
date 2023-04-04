import Image from 'next/image';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const SuccessContainer: React.FC = () => {
  return (
    <section className='md:max-w-lg md:mx-auto my-12 md:my-15'>
      <h1 className='text-center uppercase text-3xl md:text-5xl flex items-center justify-center gap-2'>
        Successfull{' '}
        <span className='text-green-300 text-4xl'>
          <VerifiedOutlinedIcon fontSize='large' />
        </span>
      </h1>
      <h3 className='text-center uppercase my-8'>
        Congratulations your NFT has been listed on the market
      </h3>
      <figure className='flex justify-center'>
        <Image
          src={'/assets/img/nft/image.png'}
          width={500}
          height={550}
          objectFit='cover'
          alt='Image'
        />
      </figure>
      <span className='text-gray-400 block text-sm my-4'>
        Contract address: OK...EdfeERFs
      </span>
      <span className='text-gray-400 block text-sm my-4'>Token ID: 123</span>
      <div className='flex flex-col-reverse gap-4 md:flex-row justify-between items-center'>
        <button className='bg-[#8BF7D1] text-blue-900 px-2 rounded-lg text-xl md:text-2xl font-bold uppercase py-2'>
          Add Collection
        </button>
        <button className='bg-[#8BF7D1] text-blue-900 px-2 rounded-lg text-xl md:text-2xl font-bold uppercase py-2'>
          View Etherscan
        </button>
      </div>
    </section>
  );
};

export default SuccessContainer;
