import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fluxo-caixa-od3r.onrender.com/api'
});

export default api;