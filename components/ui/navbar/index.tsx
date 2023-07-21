// import Cookies from 'js-cookie';
import Cookies from 'js-cookie';
import { useContext, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import { useAccount, useNetwork } from '@hooks/web3';
import Logo from '@ui/Partial/Logo';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Link from 'next/link';

import Walletbar from '@ui/navbar/Walletbar';
import { useTheme } from '@mui/material/styles';
import { ThemeModes } from '@_types/enums';
import { ColorModeContext } from 'context/theme';
import MenuIcon from '@mui/icons-material/Menu';

const navigation = [
  { name: 'Explore', href: '/explore', current: true, isDisable: false },
  { name: 'Sell', href: '/nft', current: false, isDisable: false },
  {
    name: 'Swap',
    href: '/nft',
    current: false,
    isDisable: true,
    message: 'Soon',
  },
];

export default function Navbar() {
  const { mode } = useTheme().palette;
  const { account } = useAccount();
  const { network } = useNetwork();


  const [isOpen, setIsOpen] = useState(false);

  const colorMode = useContext(ColorModeContext);

  const handleToggleTheme = () => {
    colorMode.toggleColorMode();
    // const selectedTheme =
    //   mode === ThemeModes.Light ? ThemeModes.Dark : ThemeModes.Light;
    const selectedTheme = ThemeModes.Dark;
    Cookies.set('theme', selectedTheme);
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between gap-4 w-full'>
          <figure className='flex items-center w-1/2 md:w-1/4'>
            <Link href='/'>
              <a className='cursor-pointer'>
                <Logo />
              </a>
            </Link>
          </figure>
          <div
            className={`${
              isOpen ? 'flex' : 'hidden'
            } fixed inset-0 bg-blue justify-center gap-8 flex-col md:bg-transparent md:bg-none md:static md:shadow-none md:flex items-center md:justify-between md:flex-row md:gap-4 z-20`}
          >
            <form>
              <label className='border-4 rounded-lg pl-4 py-1'>
                <SearchRoundedIcon />
                <input
                  type='search'
                  name='search'
                  placeholder='Search'
                  className='bg-inherit border-none py-2'
                />
              </label>
            </form>
            {/* <button
              onClick={handleToggleTheme}
              className='bg-gradient-to-bl from-[rgba(255,255,255,0.45)] to-[rgba(255,255,255,0.20)] shadow-2xl rounded-sm py-1 px-3'
            >
              {mode === ThemeModes.Dark ? (
                <SunIcon className='w-8 h-8' />
              ) : (
                <MoonIcon className='w-8 h-8' />
              )}
            </button> */}
            <div className='flex gap-2'>
              <button>
                <NotificationsActiveRoundedIcon />
              </button>
            </div>
            <nav className=''>
              <ul className='flex-col md:flex-row flex gap-4'>
                {navigation.map(item => (
                  <li
                    key={item.name}
                    className={`${item.isDisable && 'cursor-not-allowed'}`}
                  >
                    <Link href={item.href}>
                      <a
                        className={`${
                          item.isDisable &&
                          'pointer-events-none hover:text-gray dark:hover:text-gray text-gray'
                        } dark:hover:text-blue-light hover:text-blue px-3 py-2 rounded-md text-base font-medium transition duration-300 uppercase relative`}
                        aria-disabled={item.isDisable}
                      >
                        {item.name}
                        {item.message && (
                          <span className='absolute text-[0.5rem] leading-4 bg-blue-light text-blue px-[4px] py-[1px] rounded-2xl -right-2 -bottom-1'>
                            {item.message}
                          </span>
                        )}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className='flex items-center'>
              <Walletbar
                isInstalled={account.isInstalled}
                isLoading={account.isLoading}
                connect={account.connect}
                account={account.data}
              />
            </div>
          </div>
          <div className='md:hidden z-30'>
            <MenuIcon className='w-10 h-10' onClick={handleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
