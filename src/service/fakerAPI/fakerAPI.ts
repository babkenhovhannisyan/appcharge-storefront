import axios from 'axios';
import { API_URL } from './constants';

if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

export const fakerAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}); 