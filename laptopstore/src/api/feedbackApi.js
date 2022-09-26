import axiosPublic from "./axiosPublic";
import axiosPrivate from "./axiosPrivate";

const feedbackApi = {
    sendFeedback: (data) => {
        const url = "/feedbacks";
        return axiosPublic.post(url, data);
    },

    getAll: (params) => {
        const url = "/admin/feedbacks";
        return axiosPrivate.get(url, { params });
    },
};

export default feedbackApi;
