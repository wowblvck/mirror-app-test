import axios from 'axios';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { API_URL } from '@/shared/config';

export const apiInstance = axios.create({
  baseURL: API_URL,
});
