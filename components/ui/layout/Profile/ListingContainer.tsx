import React from 'react';
import CategoriesProfileMenu from './CategoriesProfileMenu';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import NftsCreatedContainer from './NftsCreatedContainer';
import { useRouter } from 'next/router';
import BindingOrders from './BindingOrders';

const tabs = [
  {
    name: 'Fixed Price',
    href: '/profile#listing',
    current: true,
    Icon: LocalOfferOutlinedIcon,
  },
  {
    name: 'Binding orders',
    href: '/profile#listingBinding',
    current: false,
    Icon: GavelOutlinedIcon,
  },
];

function ListingContainer() {
  const router = useRouter();
  return (
    <>
      <CategoriesProfileMenu tabs={tabs} />
      {router.asPath === tabs[0].href && <NftsCreatedContainer />}
      {router.asPath === tabs[1].href && <BindingOrders />}
    </>
  );
}

export default ListingContainer;
