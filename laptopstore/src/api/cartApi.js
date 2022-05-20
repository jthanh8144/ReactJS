import axiosPrivate from "./axiosPrivate";

const cartApi = {
    get: (params) => {
        const url = "/cart/";
        return axiosPrivate.get(url, {
            params,
        });
    },

    addToCart: (data) => {
        const url = "/cart/add/";
        return axiosPrivate.post(url, data);
    },
};

export default cartApi;
