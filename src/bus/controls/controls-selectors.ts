import { RootState } from '../../init/root-reducer';

export const selectSearch = (state: RootState): string => state.controls.search;
