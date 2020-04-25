import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  async (response) => {
    await new Promise((r) => setTimeout(r, 2000));
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
