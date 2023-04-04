import { NFTImage, PriceForm } from '@ui/nft';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface PriceButtonProps {
  title: string;
  subtitle: string;
  iconPath: string;
  selected: string;
  setSelected: (val: string) => void;
}

const PriceButton: React.FC<PriceButtonProps> = ({
  title,
  subtitle,
  iconPath,
  selected,
  setSelected,
}) => {
  return (
    <button
      type='button'
      onClick={() => setSelected(title)}
      className={`${
        selected === title ? 'shadow-custom border-blue-700' : 'border-gray-100'
      } flex items-center text-center p-3 border`}
    >
      <div className='h-16 w-16 mr-5'>
        <Image
          src={iconPath}
          alt='image'
          width={50}
          height={50}
          className='brightness-0 invert'
        />
      </div>
      <div>
        <h3 className='font-bold text-lg'>{title}</h3>
        <p className='text-sm'>{subtitle}</p>
      </div>
    </button>
  );
};

const ListNFT: React.FC = () => {
  const router = useRouter();
  const [priceType, setPriceType] = useState('Set Price');

  const handleComplete = () => {
    router.push('/nft/create/success');
  };

  return (
    <section className='max-w-6xl mx-auto mb-20 -mt-12'>
      <div className='my-10 md:mt-0'>
        <h1 className='uppercase font-bold text-2xl'>List NFT</h1>
        <p className='text-sm'>Require fields *</p>
      </div>
      <form>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-x-10'>
          <div className='col-auto md:col-span-3 '>
            <p>Select your sell method*</p>
            <div className='mt-3 flex flex-col md:flex-row items-center justify-center'>
              <PriceButton
                iconPath='/assets/img/etiqueta-de-precio.png'
                title='Set Price'
                subtitle='Add a fixed sellig price'
                selected={priceType}
                setSelected={setPriceType}
              />
              <span className='block my-5 md:my-0 md:mx-5'>Or</span>
              <PriceButton
                iconPath='/assets/img/subasta.png'
                title='English auction'
                subtitle='Auction the highest bidder'
                selected={priceType}
                setSelected={setPriceType}
              />
            </div>

            <PriceForm priceType={priceType} />

            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-4'>
              <button
                type='button'
                className='font-bold w-full text-lg px-6 text-white bg-[#A66ED8] rounded-lg mt-5 md:mt-20 py-2 self-center uppercase'
                onClick={() => router.push('/nft/create')}
              >
                Back
              </button>

              <button
                type='button'
                className='font-bold w-full text-lg px-6 text-white bg-[#A66ED8] rounded-lg mt-5 md:mt-20 py-2 self-center uppercase'
                onClick={handleComplete}
              >
                Complete listing (3/3)
              </button>
            </div>
          </div>

          <div className='col-auto row-start-1 md:row-auto md:col-span-2'>
            <NFTImage />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ListNFT;
