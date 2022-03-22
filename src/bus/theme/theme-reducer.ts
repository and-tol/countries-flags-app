import { HYDRATE } from 'next-redux-wrapper';
import { IAction } from '../../types/commonTypes';
import { themeTypes } from './theme-types';

const initialState = 'light';

export const themeReducer = (
  state = initialState,
  { type, payload }: IAction<string>
) => {
  switch (type) {
    case HYDRATE:
      return state;

    case themeTypes.SET_THEME:
      return payload;

    default:
      return state;
  }
};
