import { IAction } from '../../types/commonTypes';
import { controlsType } from './controls-types';

export type InitialStateControlsReducerType = {
  search: string;
  region: string;
};

const initialState: InitialStateControlsReducerType = {
  search: '',
  region: '',
};

export const controlsReducer = (
  state: InitialStateControlsReducerType = initialState,
  action: IAction<string>
) => {
  switch (action.type) {
    case controlsType.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case controlsType.SET_REGION:
      return {
        ...state,
        region: action.payload,
      };
    case controlsType.CLEAR_CONTROLS:
      return initialState;

    default:
      return state;
  }
};
