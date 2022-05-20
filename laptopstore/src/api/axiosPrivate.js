import axios from "axios";
import queryString from "query-string";
import jwt_decode from "jwt-decode";

const BASE_URL = "http://laptopstoreapi-jthanh8144.herokuapp.com/";

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
        const user = jwt_decode(authTokens);
        const isExpired = user.exp < Date.now() / 1000;
        console.log(isExpired);
        if (isExpired) {
            const refresh = localStorage.getItem("refresh")
                ? localStorage.getItem("refresh")
                : null;
            const response = await axiosPrivate.post("/api/token/refresh/", {
                refresh,
            });
            localStorage.setItem("authTokens", response.access);
            authTokens = response.access;
        }
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
