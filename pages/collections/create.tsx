/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react';
import type { NextPage } from 'next';
import { BaseLayout, CollectionContainer, CreateCollection } from '@ui';
import { useOwnedNfts } from '@hooks/web3';
import Head from 'next/head';

const CollectionCreate: NextPage = () => {
  const { nfts } = useOwnedNfts();
  return (
    <BaseLayout>
      <Head>
        <title>Create Collection</title>
      </Head>
      <CreateCollection />
    </BaseLayout>
  );
};

export default CollectionCreate;
