import Image from 'next/image';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { InfoCard } from '@ui/Partial';

const ProfileInfo: React.FC = () => {
  return (
    <InfoCard>
      <section className='mt-12 text-center md:w-64'>
        <h2 className='text-2xl uppercase mb-8 text-blue dark:text-white'>
        Anonymous Friend
        </h2>
        <span className='bg-blue dark:bg-blue-light text-blue-light dark:text-blue px-2 py-1 rounded-md text-sm shadow-md font-semibold uppercase'>
          NFT Minter
        </span>
        <p className='text-left mt-8 text-black dark:text-[#B2B2B2]'>
          Este es tu perfil de Amacrux en fase Testnet.
          Acá podrás apreciar todos los NFT que has creado en nuestro Market.
          ¡¡Diviértete Creando!!
        </p>
      </section>
      {/* <footer>
        <ul className='flex gap-8 mt-10 justify-center'>
          <li>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <InstagramIcon className='w-8 h-8' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
              <TwitterIcon className='w-8 h-8' />
            </a>
          </li>
          <li>
            <a href='https://google.com' target='_blank' rel='noreferrer'>
              <WysiwygIcon className='w-8 h-8' />
            </a>
          </li>
        </ul>
      </footer> */}
    </InfoCard>
  );
};

export default ProfileInfo;
