import type { NextPage } from 'next';
import { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card';

import { ICountriesType, ICountryInfoType } from '../types';

const HomePage: NextPage = (): ReactElement => {
  const router = useRouter();

  const countries: ICountriesType[] = [];

  return (
    <>
      <Head>
        <title>Flags</title>
      </Head>
      <Controls />

      <List>
        {countries.map((c: ICountriesType): ReactElement => {
          const countryInfo: ICountryInfoType = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={c.name}
              onClick={() => router.push(`/country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;
