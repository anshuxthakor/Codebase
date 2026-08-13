import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com"
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("API Interceptors Request —> ", config);
    return config;
  },
  (error) => {
    console.error("API Interceptors Request Error —> ", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("API Interceptors Response —> ", response);
    return response;
  },
  (error) => {
    console.error("API Interceptors Error —> ", error);
    return Promise.reject(error);
  }
);
