import axios from 'axios';

const baseURL = import.meta.env.VITE_URL;

const axiosInstance =  axios.create({ baseURL: baseURL , });

 axiosInstance.interceptors.request.use((config:any) => {
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  axiosInstance.interceptors.response.use((response:any) => {
     return response;
  }, (error) => {
     return Promise.reject(error);
  });

export default axiosInstance