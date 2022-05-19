import classNames from "classnames/bind";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Notification from "~/components/Notification";
import styles from "../Login/Login.module.scss";
import userApi from "~/api/userApi";

const cx = classNames.bind(styles);

function Register() {
    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const fetchUser = async () => {
            try {
                const response = await userApi.register(
                    JSON.stringify({
                        username,
                        email,
                        firstname,
                        lastname,
                        password,
                        re_password: rePassword,
                    })
                );
                if (response.status === "register success") {
                    // alert("success");
                    navigate("/login")
                } else {
                    setMessage(response.status);
                }
            } catch (error) {
                console.log("Failed: ", error);
            }
        };
        if (
            username &&
            email &&
            firstname &&
            lastname &&
            password &&
            rePassword
        ) {
            fetchUser();
        }
    };

    return (
        <div className={cx("login-form-body")}>
            <div className={cx("login-box")}>
                <h2>Đăng kí</h2>
                {message && <Notification message={message} />}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={cx("user-box")}>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            name="username"
                            required
                        />
                        <label>Tài khoản</label>
                    </div>
                    <div className={cx("user-box")}>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            required
                        />
                        <label>Email</label>
                    </div>
                    <div className={cx("user-box")}>
                        <input
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            type="text"
                            name="firstname"
                            required
                        />
                        <label>Tên</label>
                    </div>
                    <div className={cx("user-box")}>
                        <input
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            type="text"
                            name="lastname"
                            required
                        />
                        <label>Họ</label>
                    </div>
                    <div className={cx("user-box")}>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            required
                        />
                        <label>Mật khẩu</label>
                    </div>
                    <div className={cx("user-box")}>
                        <input
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            type="password"
                            name="re_password"
                            required
                        />
                        <label>Nhập lại mật khẩu</label>
                    </div>
                    <button onClick={(e) => handleSubmit(e)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Đăng kí
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
