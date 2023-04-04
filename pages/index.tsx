/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BaseLayout, Categories, Dropdown, NftList, TrendCard } from '@ui';
import { useNetwork } from '@hooks/web3';
import Carousel from '../components/ui/Partial/Carousel';
import { ExclamationIcon } from '@heroicons/react/solid';

const Slide = () => {
  return (
    <article className='grid md:grid-cols-2 items-center gap-12 h-fit rounded-xl max-w-7xl mx-auto'>
      <figure className='py-6 px-6 md:px-0'>
        <Image
          src='/assets/img/partenrs.png'
          alt='partners'
          width={653}
          height={271}
        />
      </figure>
      <section className='py-6 flex flex-col px-6 md:px-0'>
        <h3 className='text-blue dark:text-blue-light uppercase text-3xl'>
          Amax
        </h3>
        <h4 className='text-black dark:text-gray text-lg'>EVM Token</h4>
        <p className='text-2xl mb-6'>
          We&apos;ve launched the utility token AMAX native to the Amacrux
          platform 🚀
        </p>
        <Link href='/'>
          <a className='bg-gray text-blue text-xl uppercase rounded-lg px-4 py-2 font-bold self-end'>
            Buy Amax
          </a>
        </Link>
      </section>
    </article>
  );
};

const categories = [
  {
    image: '/assets/icons/PFP.png',
    name: 'PFP',
  },
  {
    image: '/assets/icons/cuadro.png',
    name: 'Art',
  },
  {
    image: '/assets/icons/3D.png',
    name: '3d',
  },
  {
    image: '/assets/icons/entradas.png',
    name: 'Tickets',
  },
  {
    image: '/assets/icons/auriculares.png',
    name: 'Multimedia',
  },
  {
    image: '/assets/icons/gaming.png',
    name: 'Gaming',
  },
  {
    image: '/assets/icons/gafas-de-realidad-virtual.png',
    name: 'Metaverse',
  },
];

const Home: NextPage = () => {
  const { network } = useNetwork();

  return (
    <BaseLayout hasMargin={false}>
      <section className='bg-gradient-transparent'>
        <Carousel>
          <Slide />
          {/* <Slide /> */}
          {/* <Slide /> */}
        </Carousel>
      </section>
      <div className='relative pt-16 pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6'>
          <section className=' mb-24'>
            <div className='mb-14'>
              <h2 className='text-blue dark:text-white uppercase text-4xl flex gap-4 items-center'>
                All Categories
                <Image
                  src='/assets/icons/tarot.png'
                  width={40}
                  height={40}
                  alt='tarot'
                />
              </h2>
              <div className='grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-8 mt-6'>
                {categories.map((categorie, index) => (
                  <Categories
                    key={`categorie-${index}`}
                    image={categorie.image}
                    name={categorie.name}
                  />
                ))}
              </div>
            </div>
            <div>
              <h2 className='uppercase text-blue dark:text-white text-4xl flex items-center gap-4'>
                Trends
                <Image
                  src='/assets/icons/fuego.png'
                  width={40}
                  height={40}
                  alt='tarot'
                />
              </h2>
              <Dropdown />
              <div className='flex gap-6 mt-4 overflow-x-scroll md:overflow-x-hidden'>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <TrendCard key={`card-${index}`} />
                ))}
              </div>
            </div>
          </section>
          {network.isConnectedToNetwork ? (
            <NftList />
          ) : (
            <div className='rounded-md bg-yellow-50 p-4 mt-10'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <ExclamationIcon
                    className='h-5 w-5 text-yellow-400'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-3'>
                  <h3 className='text-sm font-medium text-yellow-800'>
                    Attention needed
                  </h3>
                  <div className='mt-2 text-sm text-yellow-700'>
                    <p>
                      {network.isLoading
                        ? 'Loading...'
                        : `Connect to ${network.targetNetwork}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
