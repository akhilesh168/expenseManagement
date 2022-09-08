import axios from 'axios';

const AxiosApi = axios.create({
  baseURL:
    env.process.VERCEL_URL ||
    env.process.REACT_APP_BASEURL ||
    'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosApi;
