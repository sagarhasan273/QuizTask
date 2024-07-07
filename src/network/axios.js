import axios from 'axios';
import { getCookie } from '../helpers/authentication/getCookie';
import { API_URL } from './Api';

const AXIOS = axios.create({
  baseURL: API_URL,
});

AXIOS.interceptors.request.use(
  (config) => {
    // =============AXIOS REQUEST============
    const accesstoken = getCookie('accessToken');

    config.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accesstoken}`,
    };

    return config;
  },
  (error) => Promise.reject(error)
);

AXIOS.interceptors.response.use(
  (response) =>
    // ==============AXIOS RESPONSE============
    response.data,
  (error) => Promise.reject(error)
);

export default AXIOS;
