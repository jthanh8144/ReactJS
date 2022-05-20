import { useState } from "react";
import classNames from "classnames";

import styles from "./Feedback.module.scss";
import BannerTop from "~/components/BannerTop";
import images from "~/assets/images";
import feedbackApi from "~/api/feedbackApi";

const cx = classNames.bind(styles);

function Feedback() {
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const submit = async () => {
            try {
                const response = await feedbackApi.sendFeedback({
                    feedback: {
                        title,
                        name,
                        email,
                        phone,
                        content,
                    },
                });
                setTitle("");
                setName("");
                setEmail("");
                setPhone("");
                setContent("");
                setMessage(response.status);
            } catch (error) {
                console.log("Failed: ", error);
            }
        };

        if (title && name && phone && content) {
            submit();
        }
    };

    return (
        <>
            <BannerTop />
            <div className="section section-lienhe pd-top-20">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-12">
                            <div className="form-lienhe">
                                <h5 className={cx("feedback-title")}>
                                    Phản hồi
                                </h5>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Tiêu đề</td>
                                            <td>
                                                <input
                                                    value={title}
                                                    onChange={(e) =>
                                                        setTitle(e.target.value)
                                                    }
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Họ và tên</td>
                                            <td>
                                                <input
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Địa chỉ Email</td>
                                            <td>
                                                <input
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    type="email"
                                                    className="form-control"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Số điện thoại</td>
                                            <td>
                                                <input
                                                    value={phone}
                                                    onChange={(e) =>
                                                        setPhone(e.target.value)
                                                    }
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Nội dung</td>
                                            <td>
                                                <textarea
                                                    value={content}
                                                    onChange={(e) =>
                                                        setContent(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Xin quý khách vui lòng mô tả chi tiết"
                                                    className="form-control"
                                                ></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <input
                                                    type="button"
                                                    className="btn btn-primary"
                                                    value="Gửi"
                                                    onClick={(e) =>
                                                        handleSubmit(e)
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {!!message && (
                                    <span className="btn-outline-danger">
                                        {message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 d-max-992-none icons-lienhe align-items-center">
                            <img
                                className="lh1"
                                src={images.lh1}
                                alt="feedback"
                            />
                            <a href="tel:0782378407">
                                <i className="fas fa-phone-alt"></i>
                                <span>0782 378 407</span>
                            </a>
                            <a href="mailto:thanhvo618@gmail.com">
                                <i className="bi bi-envelope"></i>
                                <span>thanhvo618@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feedback;
