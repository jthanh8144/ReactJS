import axiosPublic from "./axiosPublic";

const brandApi = {
    getAll: (params) => {
        const url = '/brand';
        return axiosPublic.get(url, { params });
    },
}

export default brandApi;
