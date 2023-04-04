/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react';
import type { NextPage } from 'next';
import { BaseLayout, CollectionContainer } from '@ui';
import { useOwnedNfts } from '@hooks/web3';
import Head from 'next/head';

const CollectionDetail: NextPage = () => {
  const { nfts } = useOwnedNfts();
  return (
    <BaseLayout>
      <Head>
        <title>Collection</title>
      </Head>
      <CollectionContainer nfts={nfts} />
    </BaseLayout>
  );
};

export default CollectionDetail;
