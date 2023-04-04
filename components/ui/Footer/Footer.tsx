import { InputField } from '@ui/Partial';
import Logo from '@ui/Partial/Logo';
import { cryptoOptions } from 'helpers/nftOptions';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DiscordIcon from './DiscordIcon';
import FooterMenus from './FooterMenus';
import Image from 'next/image';

const companyLinks = [

  {
    name: 'Community rules',
    href: 'https://amacrux.com/community-rules/',
  },
  {
    name: 'Disclamer',
    href: 'https://amacrux.com/disclaimer/',
  },
];
const productsLinks = [

  {
    name: 'Flash swap',
    href: '/',
    isDisable: true,
  },
  {
    name: 'AMAX',
    href: '/',
    isDisable: true,
  },
  {
    name: 'Amacrux DAO',
    href: '/',
    isDisable: true,
  },
];
const supportLinks = [
  {
    name: 'Repositories',
    href: '/',
    isDisable: true,
  },
  {
    name: 'How it works',
    href: 'https://amacrux.com/howitworks/',
  },

  {
    name: 'FAQ',
    href: 'https://amacrux.com/faq/',
  },
];

const Footer = () => {
  return (
    <footer className='bg-blue flex justify-center py-12 px-6 md:px-0'>
      <div className='max-w-6xl grid md:grid-cols-[1fr_1fr_1fr_1fr_2fr] gap-x-8 gap-y-12'>
        <figure className='md:col-span-5'>
          <Logo className='w-20 md:w-1/4 dark-bg' />
        </figure>
        <section>
          <h3 className='font-semibold text-white'>
            Get the lastest news and updates
          </h3>
          <form action="https://formspree.io/f/xqkodqgb" method="post" className='flex bg-gradient-transparent rounded-xl overflow-hidden mt-5 mb-6'>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              className='bg-inherit placeholder:text-white border-none pl-4 text-sm w-full md:w-[inherit]'
            />

            <button
              type='submit'
              className='bg-violet px-2 rounded-xl text-sm text-white'
            >
              Suscribe
            </button>
          </form>
          <ul className='flex justify-between items-center mt-10'>
            <li>
              <a
                href='https://twitter.com/Amacruxdotcom'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TwitterIcon className='w-8 h-8 text-white' />
              </a>
            </li>
            <li>
              <a
                href='https://discord.com/channels/1060677443955982397/1060677443955982399'
                target='_blank'
                rel='noopener noreferrer'
              >
                <DiscordIcon className='w-8 h-8 text-white' />
              </a>
            </li>
            <li>
              <a
                href='https://t.me/amacruxmarketplace'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TelegramIcon className='w-8 h-8 text-white' />
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/people/Amacrux/100083785384190/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FacebookIcon className='w-8 h-8 text-white' />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/amacrux.nft/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstagramIcon className='w-8 h-8 text-white' />
              </a>
            </li>
          </ul>
        </section>
        <FooterMenus title='Company' links={companyLinks} />
        <FooterMenus title='Products' links={productsLinks} />
        <FooterMenus title='Support' links={supportLinks} />

        <section className='rounded-2xl relative text-center overflow-hidden px-4 pt-6 before:absolute before:inset-0 before:bg-gradient-transparent before:opacity-30 before:z-0'>
          <h3 className='text-blue-light uppercase text-sm z-10'>Donations</h3>
          <p className='text-xs z-10 my-6 text-white'>
            You can donate to the developer community here
          </p>
          <form className='z-10 bg-gradient-transparent rounded-lg mb-6'>
            <div className='flex'>
              <input
                type='number'
                placeholder='Amount'
                className='w-full z-10 bg-inherit border-none shadow-inherit'
                style={{
                  boxShadow: 'none !important',
                }}
              />
              <div className='min-w-[105px] -mt-1'>
                <InputField
                  type='select'
                  inputName='network'
                  selectOptions={cryptoOptions}
                />
              </div>
            </div>
          </form>
          <figure className='flex justify-end'>
            <Image
              src='/assets/img/cajafuerte.png'
              width={60}
              height={160}
              alt='cajafuerte'
            />
          </figure>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
