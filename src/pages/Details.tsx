import { NextPage } from 'next';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { IoArrowBack } from 'react-icons/io5';
import Head from 'next/head';

import { Button } from '../components/Button';
import { Info } from '../components/Info';

const DetailsPage: NextPage = (): ReactElement => {
  const router = useRouter();

  const currentCountry = null;

  return (
    <>
      <Head>
        <title>Flags - Details</title>
      </Head>
      <div>
        <Button onClick={() => router.back()}>
          <IoArrowBack /> Back
        </Button>
        {currentCountry && <Info push={router} {...currentCountry} />}
      </div>
    </>
  );
};

export default DetailsPage;