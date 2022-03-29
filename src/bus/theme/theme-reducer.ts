import { HYDRATE } from 'next-redux-wrapper';
import { IAction } from '../../types/commonTypes';
import { themeTypes } from './theme-types';

const initialState: string = 'light';

export const themeReducer = (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case HYDRATE: {
      return action.payload?.theme;
    }

    case themeTypes.SET_THEME:
      return action.payload;

    default:
      return state;
  }
};
