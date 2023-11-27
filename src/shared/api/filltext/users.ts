import { AxiosPromise } from 'axios';
import { apiInstance } from './base.ts';
import { User } from './models.ts';

export const getUsersList = (): AxiosPromise<User[]> => {
  return apiInstance.get('/');
};
