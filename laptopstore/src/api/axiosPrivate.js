import axios from "axios";
import queryString from "query-string";

const BASE_URL = "http://laptopstoreapi-jthanh8144.herokuapp.com/";
// const BASE_URL = "http://127.0.0.1:8888/";

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosPrivate.interceptors.request.use(async (config) => {
    let authTokens = localStorage.getItem("authTokens")
        ? localStorage.getItem("authTokens")
        : null;
    if (authTokens) {
        config.headers.Authorization = `Bearer ${authTokens}`;
    }
    return config;
});

axiosPrivate.interceptors.response.use(
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

export default axiosPrivate;
