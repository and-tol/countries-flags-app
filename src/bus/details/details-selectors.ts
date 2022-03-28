import { AppState } from '../../init/root-reducer';
import { ICurrentCountryType } from '../../types';
import { InitialStateDetailsReduserType } from './details-reducer';
export const selectCurrentCountry = (
  state: AppState
): ICurrentCountryType | null => state.details.currentCountry;
export const selectDetails = (
  state: AppState
): InitialStateDetailsReduserType => state.details;
export const selectNeighbors = (state: AppState): string[] =>
  state.details.neighbors;
