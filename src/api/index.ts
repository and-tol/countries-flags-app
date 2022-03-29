const BASE_URL = 'https://restcountries.com/v2/';

export interface IApiType {
  ALL_COUNTRIES: string;
  searchByCountry: (name: string | string[] | undefined) => string;
  filterByCode: (codes: string[] | undefined) => string;
}

export const api: Readonly<IApiType> = Object.freeze({
  ALL_COUNTRIES: BASE_URL + 'all?fields=name,capital,flags,population,region',

  searchByCountry: (name) => BASE_URL + 'name/' + name,

  filterByCode: (codes) => BASE_URL + 'alpha?codes=' + codes?.join(','),
});
