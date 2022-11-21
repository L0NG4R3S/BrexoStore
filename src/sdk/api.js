import axios from 'axios';
import { API_URL } from './../constants';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
  }
});

export function get(url) {
  return axiosInstance.get(url);
}

export function post(url, data) {
  return axiosInstance.post(url, data);
}

export function del(url) {
  return axiosInstance.delete(url);
}

export function setAxiosAuthorization(token) {
  if (token === null) {
    return delete axiosInstance.defaults.headers.Authorization;
  }
  return (axiosInstance.defaults.headers.Authorization = `Bearer ${token}`);
}
