import axios from 'axios';

const api = axios.create({
    baseURL: 'https://611d0b877d273a0017e2f5e2.mockapi.io/',
    // baseURL: 'http://localhost:8080'
})

export default api;