import classNames from "classnames/bind";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Notification from "~/components/Notification";
import styles from "./Login.module.scss";
import userApi from "~/api/userApi";
import { AuthContext } from "~/context/AuthContext";

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();

    const { loginUser } = useContext(AuthContext);

    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const fetchUser = async () => {
            try {
                const response = await userApi.login({
                    username,
                    password,
                });
                loginUser(response.access, response.refresh, response.username);
                const res = await userApi.get();
                if (res.user.is_staff) {
                    navigate("/admin");
                } else {
                    navigate(-1);
                }
            } catch (error) {
                setMessage("Sai tài khoản hoặc mật khẩu");
            }
        };
        if (username && password) {
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
