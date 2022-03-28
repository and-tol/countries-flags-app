import { RootState } from '../../init/root-reducer';
import { InitialStateControlsReducerType } from './controls-reducer';

export const selectSearch = (state: RootState): string => state.controls.search;
export const selectRegion = (state: RootState): string => state.controls.region;
export const selectControls = (
  state: RootState
): InitialStateControlsReducerType => state.controls;
