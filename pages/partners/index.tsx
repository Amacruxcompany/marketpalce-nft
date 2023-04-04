/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react';
import type { NextPage } from 'next';
import { BaseLayout, CollectionContainer, PartnersContainer } from '@ui';
import { useOwnedNfts } from '@hooks/web3';
import Head from 'next/head';

const Partners: NextPage = () => {
  const { nfts } = useOwnedNfts();
  return (
    <BaseLayout>
      <Head>
        <title>Partners</title>
      </Head>
      <PartnersContainer />
    </BaseLayout>
  );
};

export default Partners;
