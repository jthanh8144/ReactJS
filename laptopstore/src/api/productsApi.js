import axiosPublic from "./axiosPublic";

const productsApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosPublic.get(url, { params });
    },

    get: (id) => {
        const url = `/products/${id}`;
        return axiosPublic.get(url)
    },

    getHotProducts: (params) => {
        const url = '/products/hot';
        return axiosPublic.get(url, { params });
    },

    getNewProducts: (params) => {
        const url = '/products/new';
        return axiosPublic.get(url, { params });
    },

    getInstockProducts: (params) => {
        const url = '/products/instock';
        return axiosPublic.get(url, { params });
    },

    search: (data) => {
        const url = '/products/search/';
        return axiosPublic.post(url, data);
    }
}

export default productsApi;
