import axios, { AxiosError, AxiosStatic } from 'axios';
import { Dispatch } from 'redux';
import { api, IApiType } from '../../api';
import { ICodesType } from '../../types';

import { IAction } from '../../types/commonTypes';
import { detailsTypes } from './details-types';

export const detailsActions = Object.freeze({
  setLoading: () => ({
    type: detailsTypes.SET_LOADING,
  }),
  setError: (err: string) => ({
    type: detailsTypes.SET_ERROR,
    payload: err,
  }),

  setCountry: (country: string) => ({
    type: detailsTypes.SET_COUNTRY,
    payload: country,
  }),
  clearDetails: () => ({
    type: detailsTypes.CLEAR_DETAILS,
  }),
  setNeighbors: (countries: string[]) => ({
    type: detailsTypes.SET_NEIGHBORS,
    payload: countries,
  }),

  // Async action
  loadCountryByName:
    (name: string | string[] | undefined) =>
    async (
      dispatch: Dispatch<IAction<string>>,
      _: unknown,
      { client, api }: { client: AxiosStatic; api: IApiType }
    ) => {
      dispatch(detailsActions.setLoading());

      client
        .get<string>(api.searchByCountry(name))
        .then(({ data }) => dispatch(detailsActions.setCountry(data[0])))
        .catch((err: Error | AxiosError) => {
          if (axios.isAxiosError(err)) {
            dispatch(detailsActions.setError(err.message));
          } else {
            console.error(err.message);
          }
        });
    },
  loadCountryByNameNormal:
    (name: string | string[] | undefined) =>
    async (dispatch: Dispatch<IAction<string>>) => {
      dispatch(detailsActions.setLoading());

      const response = await axios.get<string>(api.searchByCountry(name));
      if (response.status === 200) {
        dispatch(detailsActions.setCountry(response?.data[0]));
      } else {
        dispatch(detailsActions.setError(response?.statusText));
      }
    },
  loadNeighborsByBorders:
    (codes: string[]) =>
    async (
      dispatch: Dispatch<IAction<string[] | string>>,
      _: unknown,
      { client, api }: { client: AxiosStatic; api: IApiType }
    ) => {
      dispatch(detailsActions.setLoading());

      client
        .get<ICodesType[]>(api.filterByCode(codes))
        .then(({ data }) =>
          dispatch(detailsActions.setNeighbors(data.map((c) => c.name)))
        )
        .catch((err: Error | AxiosError) => {
          if (axios.isAxiosError(err)) {
            dispatch(detailsActions.setError(err.message));
          } else {
            console.error(err.message);
          }
        });
    },
});
