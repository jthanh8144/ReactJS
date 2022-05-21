import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "../Admin.module.scss";
import { AuthContext } from "~/context/AuthContext";
import feedbackApi from "~/api/feedbackApi";

const cx = classNames.bind(styles);

function Feedback() {
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await feedbackApi.getAll();
                console.log(response);
                setFeedback(response);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    logoutUser();
                    alert("Bạn chưa đăng nhập");
                    navigate("/");
                }
            }
        })();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <span className={cx("dashboard-title")}>Phản hồi</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mg-top-20">
                    {feedback.map((item) => (
                        <table
                            key={item.id}
                            className="table table-hover table-bordered table-hover mg-bt-20 align-middle bg-white"
                        >
                            <tbody>
                                <tr>
                                    <th className={cx("w-30")}>Thư số</th>
                                    <td className={cx("w-70")}>{item.id}</td>
                                </tr>
                                <tr>
                                    <td>Tiêu đề</td>
                                    <td>{item.title}</td>
                                </tr>
                                <tr>
                                    <th colspan="2">THÔNG TIN LIÊN HỆ</th>
                                </tr>
                                <tr>
                                    <td>Tên người gửi</td>
                                    <td>{item.name}</td>
                                </tr>
                                <tr>
                                    <td>E-Mail</td>
                                    <td>{item.email}</td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại</td>
                                    <td>{item.phone}</td>
                                </tr>
                                <tr>
                                    <th colspan="2">NỘI DUNG</th>
                                </tr>
                                <tr>
                                    <td colspan="2">{item.content}</td>
                                </tr>
                            </tbody>
                        </table>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Feedback;
