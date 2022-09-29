import axios from 'axios';
import queryString from 'query-string';

const axiosCSRF = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosCSRF.interceptors.request.use(async (config) => {
    config.xsrfCookieName = 'csrftoken';
    config.xsrfHeaderName = 'X-CSRFTOKEN';
    config.withCredentials = true
    return config;
});

axiosCSRF.interceptors.response.use(
    (response) => {
        if (response && response.data.token) {
            return response.data.token;
        }
        return response;
    },
    async (error) => {
        throw error;
    }
);

export default axiosCSRF;
