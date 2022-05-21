import axiosPrivate from "./axiosPrivate";

const adminApi = {
    getAll: (params) => {
        const url = "/admin/order";
        return axiosPrivate.get(url, { params });
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
