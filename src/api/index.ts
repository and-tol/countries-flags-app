const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES =
  BASE_URL + 'all?fields=name,capital,flags,population,region';
export function searchByCountry(name: string | string[] | undefined): string {
  return BASE_URL + 'name/' + name;
}

export function filterByCode(codes: string[] | undefined): string {
  return BASE_URL + 'alpha?codes=' + codes?.join(',');
}

export interface IApiType {
  BASE_URL: string;
  ALL_COUNTRIES: string;
  searchByCountry: (name: string | string[] | undefined) => string;
  filterByCode: (codes: string[] | undefined) => string;
}

export const api: Readonly<IApiType> = Object.freeze({
  BASE_URL: 'https://restcountries.com/v2/',
  ALL_COUNTRIES: BASE_URL + 'all?fields=name,capital,flags,population,region',
  searchByCountry(name) {
    return this.BASE_URL + 'name/' + name;
  },
  filterByCode(codes) {
    return this.BASE_URL + 'alpha?codes=' + codes?.join(',');
  },
});
