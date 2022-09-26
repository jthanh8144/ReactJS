import axiosPrivate from "./axiosPrivate";

const adminApi = {
    getAll: (params) => {
        const url = "/admin/orders";
        return axiosPrivate.get(url, { params });
    },

    updateOrderStatus: (data) => {
        const url = "/admin/orders";
        return axiosPrivate.post(url, data);
    },

    cancelOrder: (data) => {
        const url = "/admin/orders";
        return axiosPrivate.delete(url, { data });
    },

    addProduct: (data) => {
        const url = "/admin/products";
        return axiosPrivate.post(url, data);
    },

    editProduct: (data) => {
        const url = "/admin/products";
        return axiosPrivate.put(url, data);
    },

    deleteProduct: (data) => {
        const url = "/admin/products";
        return axiosPrivate.delete(url, { data: data });
    },
};

export default adminApi;
