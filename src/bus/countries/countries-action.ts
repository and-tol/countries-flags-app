import axios, { AxiosError, AxiosStatic } from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ALL_COUNTRIES, ApiType } from '../../config';
import { ICountriesType } from '../../types';
import { IAction } from '../../types/commonTypes';
import { countriesType } from './countries-types';
import { AppState } from '../../init/root-reducer';

export const countriesActions = Object.freeze({
  setCountries: (countries: ICountriesType[]): IAction<ICountriesType[]> => {
    return {
      type: countriesType.SET_COUNTRIES,
      payload: countries,
    };
  },
  setLoading: (): IAction<boolean> => ({
    type: countriesType.SET_LOADING,
  }),
  setError: (err: string): IAction<string> => ({
    type: countriesType.SET_ERROR,
    payload: err,
  }),
  // Async
  loadCountries:
    (): ThunkAction<void, AppState, never, AnyAction> =>
    (
      dispatch: Dispatch<IAction<any>>,
      _: any,
      { client, api }: { client: AxiosStatic; api: ApiType }
    ) => {
      dispatch(countriesActions.setLoading());

      client
        .get<ICountriesType[]>(api.ALL_COUNTRIES)
        .then(({ data }) => {
          dispatch(countriesActions.setCountries(data));
        })
        .catch((err: Error | AxiosError) => {
          if (axios.isAxiosError(err)) {
            dispatch(countriesActions.setError(err.message));
          } else {
            console.error(err.message);
          }
        });
    },
  loadCountriesNormal:
    (): ThunkAction<void, AppState, never, AnyAction> =>
    async (dispatch: Dispatch<IAction<any>>, _: any) => {
      dispatch(countriesActions.setLoading());

      const response = await axios.get(ALL_COUNTRIES);

      if (response.status === 200) {
        dispatch(countriesActions.setCountries(response.data));
      } else {
        dispatch(countriesActions.setError(response?.statusText));
      }
    },
});
