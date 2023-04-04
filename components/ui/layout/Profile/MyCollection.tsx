import { CollectionCard } from '@ui/nft/CollectionCard';
import LogoIcon from '@ui/Partial/LogoIcon';
import Link from 'next/link';

function MyCollection() {
  return (
    <section
      // className='mt-8 pb-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 h-96 overflow-y-auto pr-4'
      className='mt-8 pb-16 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-3 md:h-96 pr-4'
      aria-labelledby='gallery-heading'
    >
      <section className='border-2 rounded-lg border-blue-light px-6 py-4 flex flex-col justify-between items-center'>
        <p className='text-xs text-center'>
          Create, list and manage NFT collections to stand out in the market
        </p>
        <LogoIcon />
        <Link href='/collections/create'>
          <a className='bg-blue-light text-blue text-xs rounded-md shadow-md px-1 py-2 -mb-8'>
            Create a collection
          </a>
        </Link>
      </section>
      <CollectionCard />
      <CollectionCard />
    </section>
  );
}

export default MyCollection;
