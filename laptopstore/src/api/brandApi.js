import axiosPublic from "./axiosPublic";

const brandApi = {
    getAll: (params) => {
        const url = '/brands';
        return axiosPublic.get(url, { params });
    },
    getProductsByBrand: (id) => {
        const url = `/brands/${id}/products`;
        return axiosPublic.get(url);
    }
}

export default brandApi;
