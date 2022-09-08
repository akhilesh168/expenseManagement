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

export default AxiosApi;
