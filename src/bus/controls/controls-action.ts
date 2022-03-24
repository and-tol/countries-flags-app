import { IAction } from '../../types/commonTypes';
import { controlsType } from './controls-types';

export const setSearch = (search: string): IAction<string> => ({
  type: controlsType.SET_SEARCH,
  payload: search,
});
