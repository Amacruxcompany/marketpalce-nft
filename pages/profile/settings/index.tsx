/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react';
import type { NextPage } from 'next';
import { BaseLayout, ProfileSettingsContainer } from '@ui';
import Head from 'next/head';

const ProfileSettings: NextPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Profile Settings</title>
      </Head>
      <ProfileSettingsContainer />
    </BaseLayout>
  );
};

export default ProfileSettings;
