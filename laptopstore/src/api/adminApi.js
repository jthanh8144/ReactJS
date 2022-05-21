import axiosPrivate from "./axiosPrivate";

const adminApi = {
    getAll: (params) => {
        const url = "/admin/order";
        return axiosPrivate.get(url, { params });
    },

    updateOrderStatus: (data) => {
        const url = "/admin/order/";
        return axiosPrivate.post(url, data);
    },

    cancelOrder: (data) => {
        const url = "/admin/order/";
        return axiosPrivate.delete(url, { data: data });
    },

    addProduct: (data) => {
        const url = "/admin/product/";
        return axiosPrivate.post(url, data);
    },

    editProduct: (data) => {
        const url = "/admin/product/";
        return axiosPrivate.put(url, data);
    },

    deleteProduct: (data) => {
        const url = "/admin/product/";
        return axiosPrivate.delete(url, { data: data });
    },
};

export default adminApi;
