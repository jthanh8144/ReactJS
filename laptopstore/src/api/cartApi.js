import axiosPrivate from "./axiosPrivate";

const cartApi = {
    get: (params) => {
        const url = "/cart/";

        return axiosPrivate.get(url, {
            params,
        });
    },
};

export default cartApi;
