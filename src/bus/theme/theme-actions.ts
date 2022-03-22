import { IAction } from '../../types/commonTypes';
import { themeTypes } from './theme-types';

export const setTheme = (theme: string): IAction<string> => ({
  type: themeTypes.SET_THEME,
  payload: theme,
});
