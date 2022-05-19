import axiosClient from "./axiosClient";

const productsApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url)
    },

    getHotProducts: (params) => {
        const url = '/products/hot';
        return axiosClient.get(url, { params });
    },

    getNewProducts: (params) => {
        const url = '/products/new';
        return axiosClient.get(url, { params });
    },

    getInstockProducts: (params) => {
        const url = '/products/instock';
        return axiosClient.get(url, { params });
    },

    search: (data) => {
        const url = '/products/search/';
        return axiosClient.post(url, data);
    }
}

export default productsApi;
