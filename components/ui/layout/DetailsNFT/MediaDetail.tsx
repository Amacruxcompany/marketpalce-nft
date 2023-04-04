import Image from 'next/image';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';

const MediaDetail = () => {
  return (
    <aside className='shadow-lg px-8 pt-6 pb-4 h-fit bg-gradient-to-tr from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.10)] rounded-2xl'>
      <figure className='flex justify-center items-center relative before:absolute before:inset-0 before:bg-[rgba(0,0,0,0.2)] before:z-10'>
        <Image
          src='/assets/img/nft/image.png'
          alt='nft'
          objectFit='cover'
          width={500}
          height={500}
        />
        <button className='absolute z-20'>
          <PlayCircleOutlineIcon className='w-52 h-52' />
        </button>
        <button className='absolute top-3 right-3 z-20'>
          <div className='flex justify-center items-center relative'>
            <FavoriteBorderIcon className='w-12 h-12' />
            <span className='absolute text-sm'>80</span>
          </div>
        </button>
      </figure>
      <section className='mt-6 flex justify-between'>
        <span className='text-xs dark:text-gray'>2000x2000px IMAGE</span>
        <div className='flex gap-2'>
          <button>
            <DownloadIcon className='text-blue dark:text-blue-light' />
          </button>
          <button>
            <ShareIcon className='text-blue dark:text-blue-light' />
          </button>
          <button>
            <MoreVertIcon className='text-black dark:text-gray' />
          </button>
        </div>
      </section>
      <footer className='flex justify-center mt-4'>
        <button className='text-center bg-blue text-blue-light dark:bg-blue-light dark:text-blue px-2 py-1 uppercase rounded-lg text-lg flex items-center gap-2'>
          <AppsIcon /> View Collection
        </button>
      </footer>
    </aside>
  );
};

export default MediaDetail;
