import axiosPublic from "./axiosPublic";

const feedbackApi = {
    sendFeedback: (data) => {
        const url = "/feedback/send/";
        return axiosPublic.post(url, data);
    },
};

export default feedbackApi;
