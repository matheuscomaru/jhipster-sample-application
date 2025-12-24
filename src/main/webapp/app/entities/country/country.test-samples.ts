import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 30729,
};

export const sampleWithPartialData: ICountry = {
  id: 20425,
  countryName: 'and desorganizado towards',
};

export const sampleWithFullData: ICountry = {
  id: 28151,
  countryName: 'fooey fooey carro',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
