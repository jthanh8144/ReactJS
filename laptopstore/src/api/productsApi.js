import axiosPublic from './axiosPublic';

const productsApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosPublic.get(url, { params });
    },

    get: (code) => {
        const url = `/products/${code}`;
        return axiosPublic.get(url);
    },

    getById: (id) => {
        const url = `/products`;
        return axiosPublic.get(url, { params: { id } });
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

    search: (name) => {
        const url = '/products';
        return axiosPublic.get(url, { params: { q: name } });
    },
};

export default productsApi;
