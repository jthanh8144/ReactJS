import axios from "axios";
import queryString from "query-string";

const BASE_URL = "http://laptopstoreapi-jthanh8144.herokuapp.com/";
// const BASE_URL = "http://127.0.0.1:8888/";


const axiosPublic = axios.create({
    baseURL: BASE_URL, // process.env.REACT_APP_API_URL
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosPublic.interceptors.request.use(async (config) => {
    // hanle token
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
