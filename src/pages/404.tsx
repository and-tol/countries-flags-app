import { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';

const NotFoundPage: NextPage = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Flags - Page Not Found</title>
      </Head>
      <div>This page doesn't exist</div>
    </>
  );
};

export default NotFoundPage;
