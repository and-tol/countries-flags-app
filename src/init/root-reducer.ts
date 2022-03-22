// Root
import { combineReducers } from 'redux';
import {
  countriesReducer,
  IInitialStateCountriesReducer,
} from '../bus/countries/countries-reducer';
import { themeReducer } from '../bus/theme/theme-reducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export interface RootState {
  theme: string;
  countries: IInitialStateCountriesReducer;
}
