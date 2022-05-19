import classNames from "classnames/bind";
import { useState } from "react";

import Notification from "~/components/Notification";
import styles from "./Login.module.scss";
import userApi from "~/api/userApi";

const cx = classNames.bind(styles);

function Login({ message }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const fetchUser = async () => {
            try {
                const response = await userApi.login(
                    JSON.stringify({
                        username,
                        password,
                    })
                );
                console.log(response);
                // if (response.status === "register success") {
                //     // alert("success");
                //     navigate("/login")
                // } else {
                //     setMessage(response.status);
                // }
            } catch (error) {
                console.log("Failed: ", error);
            }
        };
        if (
            username &&
            password
        ) {
            fetchUser();
        }
    };

    return (
        <div className={cx("login-form-body")}>
            <div className={cx("login-box")}>
                <h2>Đăng nhập</h2>
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            required
                        />
                        <label>Mật khẩu</label>
                    </div>
                    <button onClick={(e) => handleSubmit(e)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
