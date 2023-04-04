import Link from 'next/link';
import Image from 'next/image';

interface Props {
  image: string;
  name: string;
}

const Categories = ({ image, name }: Props) => {
  return (
    <Link href='/'>
      <a className='bg-gradient-transparent flex flex-col items-center px-4 py-6 rounded-lg md:px-0 md:w-auto'>
        <Image src={image} width={87} height={87} alt='Categorie' />
        <strong className='uppercase text-blue dark:text-blue-light text-xs md:text-sm font-semibold mt-4'>
          {name}
        </strong>
      </a>
    </Link>
  );
};

export default Categories;
