import React from 'react';
import { useRouter } from 'next/router';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { PencilIcon } from '@heroicons/react/solid';
import CategoriesProfileMenu from './CategoriesProfileMenu';
import MyCollection from './MyCollection';
import NftsCreatedContainer from './NftsCreatedContainer';

const tabs = [
  // {
  //   name: 'My Collection',
  //   href: '/profile',
  //   current: true,
  //   Icon: DashboardIcon,
  // },
  {
    name: 'Created',
    href: '/profile#created',
    current: false,
    Icon: PencilIcon,
  },
];

function CollectionsProfile() {
  const router = useRouter();
  return (
    <>
      <CategoriesProfileMenu tabs={tabs} />
      {/* {router.asPath === tabs[0].href && <MyCollection />} */}
      {router.asPath === tabs[0].href && <NftsCreatedContainer />}
      <NftsCreatedContainer />
    </>
  );
}

export default CollectionsProfile;
