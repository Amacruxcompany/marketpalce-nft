/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { BaseLayout, CollectionContainer } from '@ui';
import Head from 'next/head';
import { ExploreContainer } from '@ui/layout/Explore';

const Explore: NextPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Explore</title>
      </Head>
      <ExploreContainer />
    </BaseLayout>
  );
};

export default Explore;
