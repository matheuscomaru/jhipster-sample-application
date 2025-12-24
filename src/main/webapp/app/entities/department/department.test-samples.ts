import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 32001,
  departmentName: 'phew',
};

export const sampleWithPartialData: IDepartment = {
  id: 18435,
  departmentName: 'representar phew daintily',
};

export const sampleWithFullData: IDepartment = {
  id: 13276,
  departmentName: 'cutucar',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'líquido if',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
