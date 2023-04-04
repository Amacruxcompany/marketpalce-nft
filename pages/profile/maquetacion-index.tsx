/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react';
import type { NextPage } from 'next';
import { BaseLayout, ProfileContainer } from '@ui';
import { useOwnedNfts } from '@hooks/web3';
import Head from 'next/head';

const Profile: NextPage = () => {
  const { nfts } = useOwnedNfts();
  return (
    <BaseLayout>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfileContainer nfts={nfts} />
    </BaseLayout>
  );
};

export default Profile;
