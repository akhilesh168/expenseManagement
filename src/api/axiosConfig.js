import axios from 'axios';

const AxiosApi = axios.create({
  baseURL:
    process.env.VERCEL_URL ||
    process.env.REACT_APP_BASEURL ||
    'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});
AxiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.replace('/login');
      return;
    }
    return error;
  }
);
export default AxiosApi;
