import axiosPrivate from "./axiosPrivate";

const adminApi = {
    getAll: (params) => {
        const url = "/admin/order";
        return axiosPrivate.get(url, { params });
    },

    // addToCart: (data) => {
    //     const url = "/cart/add/";
    //     return axiosPrivate.post(url, data);
    // },

    // updateCart: (data) => {
    //     const url = "/cart/update/";
    //     return axiosPrivate.put(url, data);
    // },

    // checkout: (data) => {
    //     const url = "/cart/checkout/";
    //     return axiosPrivate.post(url, data);
    // },
};

export default adminApi;
