import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 8899,
};

export const sampleWithPartialData: IEmployee = {
  id: 29906,
  firstName: 'João',
  lastName: 'Reis',
  email: 'Benicio_Souza@gmail.com',
  phoneNumber: 'furthermore gasoso ah',
  salary: 9334,
};

export const sampleWithFullData: IEmployee = {
  id: 19019,
  firstName: 'Ofélia',
  lastName: 'Moreira',
  email: 'Maite_Albuquerque47@live.com',
  phoneNumber: 'boo caderno',
  hireDate: dayjs('2025-12-24T06:19'),
  salary: 7424,
  commissionPct: 24282,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
