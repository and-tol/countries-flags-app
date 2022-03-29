import type { GetServerSideProps, NextPage } from 'next';
import { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import nookies from 'nookies';

import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card';

import { ICountriesType, ICountryInfoType, STATUS } from '../types';
import {
  selectCountriesInfo,
  selectVisibleCountries,
} from '../bus/countries/counties-selectors';
import { countriesActions } from '../bus/countries/countries-actions';

import { selectControls } from '../bus/controls/controls-selectors';
import { RootState } from '../init/root-reducer';
import { wrapper } from '../init/store';
import { setTheme } from '../bus/theme/theme-actions';

type PropsType = {
  children?: never;
};

const HomePage: NextPage<PropsType> = (): ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state: RootState) =>
    selectVisibleCountries(state, { search, region })
  );
  const { status, error, gty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!gty) {
      dispatch(countriesActions.loadCountriesNormal());
    }
  }, [gty, dispatch]);

  return (
    <>
      <Head>
        <title>Countries Flags</title>
      </Head>
      <Controls />

      {error && <h2>Can not fetch data</h2>}

      {status === STATUS.loading && <h2>Loading...</h2>}

      {status === STATUS.received && (
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
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PropsType> =
  wrapper.getServerSideProps((store) => async (context) => {
    console.log(
      'store state on the server before dispatch >>>>',
      store.getState().countries.list[0]
      // store.getState().theme
    );
    const cookies = nookies.get(context);
    if (cookies.theme) {
      await store.dispatch(setTheme(cookies.theme));
    }
    await store.dispatch(countriesActions.loadCountriesNormal());

    console.log('store state on the server after dispatch >>>>', [
      store.getState().countries.list[0],
      // store.getState().theme,
    ]);

    return {
      props: {},
    };
  });

export default HomePage;
