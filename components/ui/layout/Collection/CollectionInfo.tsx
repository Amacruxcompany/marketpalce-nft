import { useState, useEffect } from 'react';
import Image from 'next/image';
import { InfoCard } from '@ui/Partial';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { AccordionCard } from '../DetailsNFT';
import Checkbox from '@mui/material/Checkbox';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import EthereumIcon from '@ui/nft/EthereumIcon';
import { useTheme } from '@mui/material/styles';
import { ThemeModes } from '@_types/enums';
import BNBIcon from '@ui/nft/BNBIcon';

const Icon = () => {
  return <BNBIcon width='19' height='19' />;
};

const CollectionInfo: React.FC = () => {
  const { mode } = useTheme().palette;
  const isDarkTheme = mode === ThemeModes.Dark;

  const [checkBoxStyles, setCheckBoxStyles] = useState({});

  useEffect(() => {
    const checkBoxLight = {
      color: '#8BF7D1',
      '&.Mui-checked': {
        color: '#8BF7D1',
      },
    };

    const checkBoxDark = {
      color: '#112A51',
      '&.Mui-checked': {
        color: '#112A51',
      },
    };

    if (isDarkTheme) {
      setCheckBoxStyles(checkBoxLight);
    } else {
      setCheckBoxStyles(checkBoxDark);
    }
  }, [mode]);

  return (
    <InfoCard>
      <section className='mt-12 text-center flex flex-wrap md:w-64 justify-between itemc-center'>
        <h2 className='text-md uppercase font-semibold'>
          Bored APE YATCH CLUB
        </h2>
        <span>
          <Image
            src='/assets/icons/bnb-chain-icon.png'
            alt='ethereum icon'
            width={20}
            height={20}
          />
        </span>
        <strong className='text-sm w-full text-left my-1'>
          <span className='text-xs text-blue dark:text-gray'>Created by </span>
          Daniel Capote
        </strong>
        <p className='text-sm'>16,00 Items</p>
      </section>
      <section className='bg-gradient-transparent rounded-md grid grid-cols-3 items-center mt-4'>
        <div className=' text-center'>
          <strong className='text-lg'>65 k</strong>
          <h4 className='text-[0.55rem] font-semibold uppercase'>Onwers</h4>
        </div>
        <div className='border-l border-r border-blue dark:border-blue-light text-center h-full flex flex-col justify-center py-4'>
          <strong className='text-lg flex items-center gap-1 justify-center'>
            <BNBIcon
              width='13'
              height='13'
              className='fill-blue dark:fill-white'
            />{' '}
            73.12
          </strong>
          <h4 className='text-[0.55rem] font-semibold uppercase'>
            Floor Price
          </h4>
        </div>
        <div className=' text-center'>
          <strong className='text-lg flex items-center gap-1 justify-center'>
            <BNBIcon
              width='13'
              height='13'
              className='fill-blue dark:fill-white'
            />{' '}
            200
          </strong>
          <h4 className='text-[0.55rem] font-semibold uppercase'>
            Volume Traded
          </h4>
        </div>
      </section>
      <section className='mt-4'>
        <AccordionCard Icon={FilterAltIcon} title='Status'>
          <form className='pl-4'>
            <label className='flex justify-between font-semibold items-center text-black dark:text-white'>
              Buy now
              <Checkbox sx={checkBoxStyles} />
            </label>
            <label className='flex justify-between font-semibold items-center text-black dark:text-white'>
              On auction
              <Checkbox sx={checkBoxStyles} />
            </label>
          </form>
        </AccordionCard>

        <AccordionCard
          Icon={Icon}
          title='Price'
          titleStyles={{
            display: 'flex',
            gap: '1rem',
          }}
        >
          <form className='flex flex-col justify-center'>
            <div className='flex gap-2 justify-center items-center text-black dark:text-white'>
              <input
                type='number'
                placeholder='min'
                className='bg-transparent bg-gradient-transparent rounded-md w-16 border-none py-1 px-2 text-sm placeholder:text-black dark:placeholder:text-[#FFFFFFd8]'
              />
              to
              <input
                type='number'
                placeholder='Max'
                className='bg-transparent bg-gradient-transparent rounded-md w-16 border-none py-1 px-2 text-sm text-black dark:placeholder:text-[#FFFFFFd8]'
              />
              <select className='bg-[rgba(255,255,255,0.15)] rounded-md border-none text-sm py-1 placeholder:text-black dark:placeholder:text-[#FFFFFFd8] withoutArrow'>
                <option>ETH</option>
              </select>
            </div>
            <div className='flex gap-4 justify-center mt-10'>
              <button className='bg-blue dark:bg-blue-light text-blue-light dark:text-blue uppercase py-2 px-1 rounded-md'>
                Clear
              </button>
              <button className='bg-blue dark:bg-blue-light text-blue-light dark:text-blue uppercase py-2 px-1 rounded-md'>
                Done
              </button>
            </div>
          </form>
        </AccordionCard>
      </section>
      <footer>
        <ul className='flex gap-4 mt-10 justify-center'>
          <li>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <InstagramIcon className='w-6 h-6' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
              <TwitterIcon className='w-6 h-6' />
            </a>
          </li>
          <li>
            <a href='https://google.com' target='_blank' rel='noreferrer'>
              <WysiwygIcon className='w-6 h-6' />
            </a>
          </li>
        </ul>
      </footer>
    </InfoCard>
  );
};

export default CollectionInfo;
