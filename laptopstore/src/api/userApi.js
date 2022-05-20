import axiosPublic from "./axiosPublic";

const userApi = {
    register: (data) => {
        const url = "/user/register/";
        return axiosPublic.post(url, data);
    },

    login: (data) => {
        const url = "/user/login/";
        return axiosPublic.post(url, data);
    },

    // , { headers: { isAuth: "true" } }

    // getAll: (params) => {
    //     const url = '/products';
    //     return axiosPublic.get(url, { params });
    // },

    // get: (id) => {
    //     const url = `/products/${id}`;
    //     return axiosPublic.get(url)
    // },

    // getHotProducts: (params) => {
    //     const url = '/products/hot';
    //     return axiosPublic.get(url, { params });
    // },

    // getNewProducts: (params) => {
    //     const url = '/products/new';
    //     return axiosPublic.get(url, { params });
    // },

    // getInstockProducts: (params) => {
    //     const url = '/products/instock';
    //     return axiosPublic.get(url, { params });
    // },
};

export default userApi;
