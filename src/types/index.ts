export enum STATUS {
  idle = 'idle',
  loading = 'loading',
  received = 'received',
  rejected = 'rejected',
}

export interface ICountriesType {
  name: string;
  capital: string;
  region: string;
  population: number;
  flags: IFlags;
  independent: boolean;
}

export interface ICurrentCountryType extends ICountriesType {
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: ICurrencyType[];
  languages: ILanguagesType[];
  borders: string[];
  flag: string;
}

export interface ICardListType {
  title: string;
  description: string;
}

export interface ICountryInfoType {
  img: string;
  name: string;
  info: IInfoType[];
}

export interface IInfoType {
  title: string;
  description: string;
}

export interface ICurrencyType {
  code: string;
  name: string;
  symbol?: string;
}

export interface ILanguagesType {
  name: string;
  iso639_1?: string;
  iso639_2?: string;
  nativeName?: string;
}

export interface ISelectCountriesInfo {
  status: string;
  error?: string | null;
  gty: number;
}

export type OptionMapValueType = {
  value: string;
  label: string;
};
export interface IOptionsMapType extends Record<string, any> {
  Africa: OptionMapValueType;
  America: OptionMapValueType;
  Asia: OptionMapValueType;
  Europe: OptionMapValueType;
  Oceania: OptionMapValueType;
}

export interface ICodesType {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: IFlags;
  currencies: ICurrencyType[];
  languages: ILanguagesType[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
  independent: boolean;
}

export interface IFlags {
  svg: string;
  png: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
}

export interface Translations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}
