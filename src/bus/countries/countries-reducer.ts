import { HYDRATE } from 'next-redux-wrapper';
import { ICountriesType, STATUS } from '../../types';
import { IAction } from '../../types/commonTypes';
import { countriesType } from './countries-types';

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
  action: IAction<any>
): any => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state, // use previous state
        list: action.payload.countries.list, // apply delta from hydration
      };
      if (state.list.length !== 0) {
        nextState.list = state.list;
        nextState.status = STATUS.received;
      }

      return nextState;
    }

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
        error: action.payload,
      };
    case countriesType.SET_COUNTRIES: {
      return {
        ...state,
        status: STATUS.received,
        list: action.payload,
      };
    }

    default:
      return state;
  }
};
