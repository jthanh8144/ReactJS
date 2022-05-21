import axiosPublic from "./axiosPublic";
import axiosPrivate from "./axiosPrivate";

const feedbackApi = {
    sendFeedback: (data) => {
        const url = "/feedback/send/";
        return axiosPublic.post(url, data);
    },

    getAll: (params) => {
        const url = "/feedback";
        return axiosPrivate.get(url, { params });
    },
};

export default feedbackApi;
