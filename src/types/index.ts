export interface ICountriesType {
  name: string;
  capital: string;
  region: string;
  population: number;
  flags: {
    svg: string;
    png: string;
  };
  independent: boolean;
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
}

export interface ILanguagesType {
  name: string;
}
