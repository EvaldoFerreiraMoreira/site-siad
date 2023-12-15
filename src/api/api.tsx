import axios from 'axios';

const api = axios.create({
   baseURL: 'https://fvendas.ddns.net/api',
});

export default api;