import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 12482,
};

export const sampleWithPartialData: ILocation = {
  id: 30179,
  postalCode: 'voto',
  city: 'Barros de Nossa Senhora',
};

export const sampleWithFullData: ILocation = {
  id: 22007,
  streetAddress: 'abraçar given',
  postalCode: 'underneath curtir excluding',
  city: 'Noah do Sul',
  stateProvince: 'resistente café quickly',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
