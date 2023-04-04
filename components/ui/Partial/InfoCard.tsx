import Image from 'next/image';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const InfoCard: React.FC<Props> = ({ children }) => {
  return (
    <aside className='bg-gradient-transparent h-full px-4 pb-10'>
      <header className='flex justify-center relative before:w-64 before:h-64 before:bg-[#340C5F] before:absolute before:rounded-full before:-top-[9.5rem]'>
        <figure className='rounded-full overflow-hidden w-52 h-52 -mt-32 z-10'>
          <Image
            src='/images/default_avatar.png'
            width={222}
            height={222}
            alt='profile avatar'
            objectFit='cover'
            className='w-full h-full'
          />
        </figure>
      </header>
      {children}
    </aside>
  );
};

export default InfoCard;
