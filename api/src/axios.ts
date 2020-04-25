import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.instagram.com',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
