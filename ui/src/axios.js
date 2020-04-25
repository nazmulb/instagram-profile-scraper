import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL ? process.env.API_URL : "http://localhost",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
