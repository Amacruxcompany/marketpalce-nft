/* eslint-disable @next/next/no-img-element */

import { Nft } from '@_types/nft';
import { CryptoSWRResponse } from '@_types/hooks';
import { HeaderProfile, ProfileInfo } from '@ui';
import { useRouter } from 'next/router';
import CollectionsProfile from './CollectionsProfile';
import ListingContainer from './ListingContainer';
import Link from 'next/link';

interface Props {
  nfts: CryptoSWRResponse<Nft[]>;
}

interface TabProp {
  href: string;
  name: string;
}

const profileTabs = [
  {
    name: 'Items',
    href: '/profile',
  },
  // {
  //   name: 'Listings',
  //   href: '/profile#listing',
  // },
];

const ProfileTabs = ({ href, name }: TabProp) => {
  const router = useRouter();

  const isActive = router.asPath === href;

  return (
    <li>
      <Link href={href}>
        <a
          className={`${
            isActive
              ? 'text-black dark:text-white'
              : 'bg-blue dark:bg-blue-light text-blue-light dark:text-blue'
          } border-2 border-blue dark:border-blue-light rounded-lg  uppercase py-2 px-6`}
        >
          {name}
        </a>
      </Link>
    </li>
  );
};

const ProfileContainer: React.FC<Props> = ({ nfts }) => {
  const router = useRouter();

  return (
    <section className='max-w-6xl -mb-16'>
      <HeaderProfile />
      {/* <section className='grid grid-cols-[5fr_16fr_4fr] gap-4 -mt-[6px]'> */}
      <section className='grid md:grid-cols-[5fr_20fr] gap-4 -mt-[6px]'>
        <ProfileInfo />
        <main>
          <nav className='mt-12 px-6'>
            <ul className='flex gap-4'>
              {profileTabs.map((link, index) => (
                <ProfileTabs key={`link-${index}`} {...link} />
              ))}
            </ul>
          </nav>
          {!router.asPath.includes('listing') && <CollectionsProfile />}
          {router.asPath.includes('listing') && <ListingContainer />}
        </main>
      </section>
    </section>
  );
};

export default ProfileContainer;
