import type { GetServerSideProps, NextPage } from 'next';
import { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector, useDispatch, connect } from 'react-redux';

import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card';

import { ICountriesType, ICountryInfoType } from '../types';
import {
  selectAllCountries,
  selectCountriesInfo,
} from '../bus/countries/counties-selectors';
import { countriesActions } from '../bus/countries/countries-action';
import { STATUS } from '../bus/countries/countries-reducer';
import { wrapper } from '../init/store';
import { AppState } from '../init/root-reducer';

type PropsType = {
  children?: never;
};

const HomePage: NextPage = (): ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();

  const countries: ICountriesType[] = useSelector(selectAllCountries);
  const { status, error, gty } = useSelector(selectCountriesInfo);
  console.log('countries >>', countries);
  console.log('status >>', status);

  useEffect(() => {
    if (!gty) {
      dispatch(countriesActions.loadCountries());
    }
  }, [gty, dispatch]);

  return (
    <>
      <Head>
        <title>Flags</title>
      </Head>
      <Controls />

      {error && <h2>Can not fetch data</h2>}

      {status === STATUS.loading && <h2>Loading...</h2>}

      {status === STATUS.received && (
        <List>
          {countries?.map((c: ICountriesType): ReactElement => {
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
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PropsType> =
  wrapper.getServerSideProps((store) => async () => {
    console.log(
      'store state on the server before dispatch >>>>',
      store.getState().countries.list[0]
    );

    await store.dispatch(countriesActions.loadCountriesNormal());

    console.log('store state on the server after dispatch >>>>', [
      store.getState().countries.list[0],
    ]);

    return {
      props: {},
    };
  });

export default HomePage;
