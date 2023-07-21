/* eslint-disable @next/next/no-img-element */
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

type WalletbarProps = {
  isLoading: boolean;
  isInstalled: boolean;
  account: string | undefined;
  connect: () => void;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Walletbar: FunctionComponent<WalletbarProps> = ({
  isInstalled,
  isLoading,
  connect,
  account,
}) => {
  if (isLoading) {
    return (
      <div>
        <button
          onClick={() => {}}
          type='button'
          className='inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Loading ...
        </button>
      </div>
    );
  }

  if (account) {
    return (
      <Menu as='div' className='ml-3 relative'>
        <div>
          <Menu.Button className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray focus:ring-white items-center gap-4 mt-6'>
            <span className='sr-only'>Open user menu</span>
            <img
              className='h-8 w-8 rounded-full'
              src='/images/default_user_image.png'
              alt=''
            />
            <span className='font-semibold text-base relative'>
              Hello, Friend
              <span className='absolute text-[0.5rem] leading-4 bg-blue-light text-blue px-[4px] py-[1px] rounded-2xl left-0 -top-5 uppercase'>
                Pro
              </span>
            </span>
          </Menu.Button>
          {`0x${account[2]}${account[3]}${account[4]}....${account.slice(-4)}`}
        </div>

        <Menu.Items className='z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <Menu.Item>
            {() => (
              <button
                disabled={true}
                className='disabled:text-gray text-xs block px-4 pt-2 text-gray'
              >
                {`0x${account[2]}${account[3]}${account[4]}....${account.slice(
                  -4
                )}`}
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href='/profile'>
                <a
                  className={classNames(
                    active ? 'bg-gray' : '',
                    'block px-4 py-2 text-sm text-gray'
                  )}
                >
                  Profile
                </a>
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    );
  }

  if (isInstalled) {
    return (
      <div>
        <button
          onClick={() => {
            connect();
          }}
          type='button'
          className='inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Connect Wallet
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() => {
            window.open('https://metamask.io', '_ blank');
          }}
          type='button'
          className='inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          No Wallet
        </button>
      </div>
    );
  }
};

export default Walletbar;
