import { RootState } from '../../init/root-reducer';
import { ICountriesType, ISelectCountriesInfo } from '../../types';

export const selectCountriesInfo = (
  state: RootState
): ISelectCountriesInfo => ({
  status: state.countries.status,
  error: state.countries.error,
  gty: state.countries.list.length,
});

export const selectAllCountries = (state: RootState): ICountriesType[] =>
  state.countries.list;

export const selectVisibleCountries = (
  state: RootState,
  { search = '' }: { search: string }
): ICountriesType[] => {
  return state.countries.list.filter((country: ICountriesType) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );
};
