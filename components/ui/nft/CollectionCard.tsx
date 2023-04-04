import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tag from './Tag';
import EthereumIcon from './EthereumIcon';
import BNBIcon from './BNBIcon';

export const CollectionCard = () => {
  return (
    <Link href='/collections/id'>
      <a className='bg-gradient-transparent rounded-2xl pb-8 overflow-hidden flex flex-col justify-between'>
        <header className='relative'>
          <Image
            src='/assets/img/nft/image.png'
            width={500}
            height={250}
            objectFit='cover'
            alt='collection'
            className='rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-between flex-wrap px-4 pt-4'>
            <div className='flex items-end -mb-3'>
              <Image
                src='/images/default_avatar.png'
                width={50}
                height={50}
                alt='profile avatar'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
            <div>
              <Tag text='ART' />
            </div>
          </div>
        </header>

        <section className='bg-gradient-transparent rounded-lg grid grid-cols-[3fr_1fr] mt-6 px-4 py-2'>
          <div className='flex flex-col justify-between'>
            <h3 className='text-xs'>Borded ape yatch..</h3>
            <span className='text-xs'>Daniel Capote</span>
            <span className='text-[.7rem] text-blue dark:text-blue-light'>
              0 Items
            </span>
          </div>
          <div className='justify-self-end'>
            <Image
              src='/assets/icons/BNB-card-icon.png'
              alt='ethereum icon'
              width={20}
              height={20}
            />
          </div>
        </section>
        <footer className='flex justify-center gap-6 text-center mt-6'>
          <div className='flex flex-col justify-center'>
            <span className='text-xs'>Floor price</span>
            <span className='text-xs flex gap-1 justify-center items-center'>
              <BNBIcon
                width='10'
                height='10'
                className='fill-blue dark:fill-white'
              />{' '}
              76.12
            </span>
          </div>
          <div className='flex flex-col justify-center'>
            <span className='text-xs'>Floor price</span>
            <span className='text-xs flex gap-1 justify-center items-center'>
              <BNBIcon
                width='10'
                height='10'
                className='fill-blue dark:fill-white'
              />{' '}
              76.12
            </span>
          </div>
        </footer>
      </a>
    </Link>
  );
};
