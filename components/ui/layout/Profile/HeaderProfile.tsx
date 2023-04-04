import Image from 'next/image';
import Link from 'next/link';
import { PencilIcon, LinkIcon } from '@heroicons/react/solid';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const HeaderProfile: React.FC = () => {
  return (
    <header className='relative z-10'>
      <figure className='w-full h-52 md:w-[1152px] md:h-[360px] relative'>
        <Image
          objectFit='cover'
          layout='fill'
          src={'/images/amacrux-background.jpg'}
          alt='amacrux background'
        />
      </figure>
      <aside className='absolute inset-x-4 inset-y-3 flex flex-col-reverse md:flex-col items-end justify-between'>
        <div className='flex items-center gap-4'>
          <Link href='/profile/settings'>
            <a className='text-blue-light w-12 h-12'>
              <SettingsOutlinedIcon className='min-w-full min-h-full' />
            </a>
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default HeaderProfile;
