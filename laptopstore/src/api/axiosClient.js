import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: "http://laptopstoreapi-jthanh8144.herokuapp.com/", // process.env.REACT_APP_API_URL
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
});

axiosClient.interceptors.response.use(response => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, async (error) => {
    if (error.response.status === 401) {

    } else {
        throw error;
    }
});

export default axiosClient;