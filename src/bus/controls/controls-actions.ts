import { IAction } from '../../types/commonTypes';
import { controlsType } from './controls-types';

export const controlsActions = Object.freeze({
  setSearch: (search: string): IAction<string> => ({
    type: controlsType.SET_SEARCH,
    payload: search,
  }),

  setRegion: (region: string): IAction<string> => ({
    type: controlsType.SET_REGION,
    payload: region,
  }),

  clearControls: () => ({
    type: controlsType.CLEAR_CONTROLS,
  }),
});
