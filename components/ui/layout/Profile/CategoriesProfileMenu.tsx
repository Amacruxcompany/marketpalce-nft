import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  tabs: {
    name: string;
    href: string;
    current: boolean;
    Icon: any;
  }[];
}

interface TabProp {
  href: string;
  current: boolean;
  name: string;
  Icon: any;
}

const Tab = ({ href, current, name, Icon }: TabProp) => {
  const router = useRouter();

  const isActive = router.asPath === href;

  return (
    <li>
      <Link href={href}>
        <a
          aria-current={isActive ? 'page' : undefined}
          className={`${
            isActive
              ? 'text-black dark:text-blue-light'
              : 'text-blue dark:text-white'
          }
  px-1 text-base flex gap-2 items-center`}
        >
          <Icon className='w-8 h-8 text-blue dark:text-blue-light' />
          {name}
        </a>
      </Link>
    </li>
  );
};

const CategoriesProfileMenu: React.FC<Props> = ({ tabs }) => {
  return (
    <ul className='flex my-14 px-6 gap-12' aria-label='Tabs'>
      {tabs.map(tab => (
        <Tab
          key={tab.name}
          href={tab.href}
          current={tab.current}
          name={tab.name}
          Icon={tab.Icon}
        />
      ))}
    </ul>
  );
};

export default CategoriesProfileMenu;
