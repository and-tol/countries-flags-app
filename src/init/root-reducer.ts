// Root
import { combineReducers } from 'redux';
import {
  controlsReducer,
  InitialStateControlsReducerType,
} from '../bus/controls/controls-reducer';
import {
  countriesReducer,
  IInitialStateCountriesReducer,
} from '../bus/countries/countries-reducer';
import { themeReducer } from '../bus/theme/theme-reducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export interface RootState {
  theme: string;
  countries: IInitialStateCountriesReducer;
  controls: InitialStateControlsReducerType;
}
