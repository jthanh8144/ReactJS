import axiosPublic from "./axiosPublic";
import axiosPrivate from "./axiosPrivate";

const userApi = {
    register: (data) => {
        const url = "/user/register/";
        return axiosPublic.post(url, data);
    },

    login: (data) => {
        const url = "/user/login/";
        return axiosPublic.post(url, data);
    },

    get: (params) => {
        const url = '/user';
        return axiosPrivate.get(url, { params });
    },

    changePass: (data) => {
        const url = "/user/changepass/";
        return axiosPrivate.put(url, data);
    },

    updateUser: (data) => {
        const url = "/user/updateuser/";
        return axiosPrivate.put(url, data);
    },
};

export default userApi;
