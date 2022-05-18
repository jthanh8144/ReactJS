import classNames from "classnames/bind";

import Notification from "~/components/Notification";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login({ message }) {
    return (
        <div className={cx("login-form-body")}>
            <div className={cx("login-box")}>
                <h2>Đăng nhập</h2>
                {message && <Notification message={message} />}
                <form>
                    <div className={cx("user-box")}>
                        <input type="text" name="username" required />
                        <label>Tài khoản</label>
                    </div>
                    <div className={cx("user-box")}>
                        <input type="password" name="password" required />
                        <label>Mật khẩu</label>
                    </div>
                    <button>
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
