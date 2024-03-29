import axios from 'axios';
import Cookies from 'js-cookie';
import queryString from 'query-string';
import axiosCSRF from './axiosCSRF';

const axiosPublic = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosPublic.interceptors.request.use(async (config) => {
    const token = await axiosCSRF.get('/csrf-token');
    Cookies.set('csrftoken', token);
    config.xsrfCookieName = 'csrftoken';
    config.xsrfHeaderName = 'X-CSRFTOKEN';
    config.withCredentials = true;
    return config;
});

axiosPublic.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    async (error) => {
        throw error;
    }
);

export default axiosPublic;
