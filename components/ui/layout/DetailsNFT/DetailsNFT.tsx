import { InfoNFT, MediaDetail } from '@ui';

const DetailsNFT: React.FC = () => {
  return (
    <section className='max-w-6xl mx-auto grid grid-cols-1 gap-20 min-h-screen pb-16 mt-8 md:grid-cols-[9fr_10fr]'>
      <MediaDetail />
      <InfoNFT />
    </section>
  );
};

export default DetailsNFT;
