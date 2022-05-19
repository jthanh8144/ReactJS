import axiosClient from "./axiosClient";

const brandApi = {
    getAll: (params) => {
        const url = '/brand';
        return axiosClient.get(url, { params });
    },
}

export default brandApi;
