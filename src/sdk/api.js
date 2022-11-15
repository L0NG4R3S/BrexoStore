import axios from 'axios';
import { API_URL } from './../constants';

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

export function get(url) {
  return axiosInstance.get(url);
}

export function post(url, data) {
  return axiosInstance.post(url, data);
}

export function setAxiosAuthorization(token) {
  if (token === null) {
    return delete axiosInstance.defaults.headers.Authorization;
  }
  return (axiosInstance.defaults.headers.Authorization = `Bearer ${token}`);
}
