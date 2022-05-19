import axiosClient from "./axiosClient";

const userApi = {
    register: (data) => {
        const url = '/user/register/';
        return axiosClient.post(url, data);
    },

    login: (data) => {
        const url = '/user/login/';
        return axiosClient.post(url, data);
    },

    // getAll: (params) => {
    //     const url = '/products';
    //     return axiosClient.get(url, { params });
    // },

    // get: (id) => {
    //     const url = `/products/${id}`;
    //     return axiosClient.get(url)
    // },

    // getHotProducts: (params) => {
    //     const url = '/products/hot';
    //     return axiosClient.get(url, { params });
    // },

    // getNewProducts: (params) => {
    //     const url = '/products/new';
    //     return axiosClient.get(url, { params });
    // },

    // getInstockProducts: (params) => {
    //     const url = '/products/instock';
    //     return axiosClient.get(url, { params });
    // },
}

export default userApi;
