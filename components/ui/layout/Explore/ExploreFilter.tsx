import React, { useEffect, useState } from 'react';
import { AccordionCard } from '../DetailsNFT';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { ThemeModes } from '@_types/enums';

const categoriesFilter = [
  {
    name: 'PFP',
    value: 'pfp',
  },
  {
    name: 'Art',
    value: 'art',
  },
  {
    name: '3D',
    value: '3d',
  },
  {
    name: 'Tickets',
    value: 'tickets',
  },
  {
    name: 'Multimedia',
    value: 'multimedia',
  },
  {
    name: 'Metaverse',
    value: 'metaverse',
  },
  {
    name: 'All in',
    value: 'all_in',
  },
];
const statusFilter = [
  {
    name: 'Buy now',
    value: 'now',
  },
  {
    name: 'On auction',
    value: 'auction',
  },
  {
    name: 'All in',
    value: 'all_in',
  },
];
const sortFilter = [
  {
    name: 'NFTs',
    value: 'nfts',
  },
  {
    name: 'Collections',
    value: 'collections',
  },
  {
    name: 'Best sellers',
    value: 'best_sellers',
    isDisabled: true,
  },
];

interface FilterProps {
  item: {
    name: string;
    value: string;
    isDisabled?: boolean;
  };
}

const FilterItem = ({ item }: FilterProps) => {
  const { name, isDisabled } = item;
  return (
    <li className='mb-3'>
      <Link href='#'>
        <a className='text-base text-black dark:text-white'>{name}</a>
      </Link>
    </li>
  );
};

const ExploreFilter = () => {
  const [titleStyle, settitleStyle] = useState({
    color: 'white',
    fontSize: '1.2rem',
  });

  const { mode } = useTheme().palette;

  useEffect(() => {
    if (mode === ThemeModes.Light) {
      settitleStyle({ ...titleStyle, color: 'black' });
    } else {
      settitleStyle({ ...titleStyle, color: 'white' });
    }
  }, [mode]);

  return (
    <section className='flex flex-col mt-0'>
      <h1 className='text-2xl'>
        Search results for{' '}
        <strong className='text-blue dark:text-gray'>PFP</strong>
      </h1>
      <section className='grid md:grid-cols-[3fr_2fr_2fr_2fr] gap-6 md:px-8 my-8'>
        <form className='flex flex-col gap-4 grid-col-'>
          <label className='text-[1.2rem]'>Price</label>
          <div className='flex items-center gap-2'>
            <div className='w-28 bg-gradient-transparent rounded-xl'>
              <input
                type='number'
                placeholder='min'
                className='bg-transparent placeholder:text-blue dark:placeholder:text-gray border-0 w-full py-3 px-4'
              />
            </div>
            <span>to</span>
            <div className='w-28 bg-gradient-transparent rounded-xl'>
              <input
                type='number'
                placeholder='max'
                className='bg-transparent placeholder:text-blue dark:placeholder:text-gray border-0 w-full py-3 px-4'
              />
            </div>
            <div className='w-28 bg-gradient-transparent rounded-xl'>
              <select className='bg-transparent w-full focus:outline-none text-sm py-4 px-6 rounded-md border-0'>
                <option>BNB</option>
              </select>
            </div>
          </div>
          <button className='text-blue-light dark:text-blue bg-blue dark:bg-blue-light rounded-md text-center px-6 py-3'>
            Apply
          </button>
        </form>
        <div>
          <AccordionCard title='Categories' titleStyles={titleStyle}>
            <ul>
              {categoriesFilter.map(item => (
                <FilterItem key={item.value} item={item} />
              ))}
            </ul>
          </AccordionCard>
        </div>
        <div>
          <AccordionCard title='Status' titleStyles={titleStyle}>
            <ul>
              {statusFilter.map(item => (
                <FilterItem key={item.value} item={item} />
              ))}
            </ul>
          </AccordionCard>
        </div>
        <div>
          <AccordionCard title='Sort by' titleStyles={titleStyle}>
            <ul>
              {sortFilter.map(item => (
                <FilterItem key={item.value} item={item} />
              ))}
            </ul>
          </AccordionCard>
        </div>
      </section>
      <button className='bg-gradient-transparent rounded-xl px-4 py-2 self-end mb-10'>
        Clear
      </button>
    </section>
  );
};

export default ExploreFilter;
