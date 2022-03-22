import { ICountriesType } from '../../types';
import { IAction } from '../../types/commonTypes';
import { countriesType } from './countries-types';

enum STATUS {
  idle = 'idle',
  loading = 'loading',
  received = 'received',
  rejected = 'rejected',
}

export interface IInitialStateCountriesReducer {
  // status: 'idle' | 'loading' | 'received' | 'rejected';
  status: STATUS;
  error: null | string;
  list: ICountriesType[];
}

const initialState: IInitialStateCountriesReducer = {
  // status: 'idle', // loading | received | rejected
  status: STATUS.idle,
  error: null,
  list: [],
};

export const countriesReducer = (
  state: IInitialStateCountriesReducer = initialState,
  { type, payload }: IAction<string>
) => {
  switch (type) {
    case countriesType.SET_LOADING:
      return {
        ...state,
        status: STATUS.loading,
        error: null,
      };
    case countriesType.SET_ERROR:
      return {
        ...state,
        status: STATUS.rejected,
        error: payload,
      };
    case countriesType.SET_COUNTRIES:
      return {
        ...state,
        status: STATUS.received,
        list: payload,
      };

    default:
      return state;
  }
};
