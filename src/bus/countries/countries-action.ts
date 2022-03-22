import axios, { AxiosError, AxiosStatic } from 'axios';
import { Dispatch } from 'react';
import { ApiType } from '../../config';
import { ICountriesType } from '../../types';
import { IAction } from '../../types/commonTypes';
import { countriesType } from './countries-types';

export const countriesActions = Object.freeze({
  setCountries: (countries: ICountriesType[]): IAction<ICountriesType[]> => ({
    type: countriesType.SET_COUNTRIES,
    payload: countries,
  }),
  setLoading: (): IAction<boolean> => ({
    type: countriesType.SET_LOADING,
  }),
  setError: (err: string): IAction<string> => ({
    type: countriesType.SET_ERROR,
    payload: err,
  }),
  // Async
  loadCountries:
    () =>
    (
      dispatch: Dispatch<IAction<any>>,
      _: any,
      { client, api }: { client: AxiosStatic; api: ApiType }
    ) => {
      dispatch(countriesActions.setLoading());

      client
        .get<ICountriesType[]>(api.ALL_COUNTRIES)
        .then(({ data }) => dispatch(countriesActions.setCountries(data)))
        .catch((err: Error | AxiosError) => {
          if (axios.isAxiosError(err)) {
            dispatch(countriesActions.setError(err.message));
          } else {
            console.error(err.message);
          }
        });
    },
});
