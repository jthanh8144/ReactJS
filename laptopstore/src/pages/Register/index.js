import classNames from "classnames/bind";

import Notification from "~/components/Notification";
import styles from "../Login/Login.module.scss";

const cx = classNames.bind(styles);

function Register({ message }) {
    return (
        <div className={cx("login-form-body")}>
            <div className={cx("login-box")}>
                <h2>Đăng kí</h2>
                {message && <Notification message={message} />}
                <form>
                    <div className={cx("user-box")}>
                        <input type="text" name="username" required />
                        <label>Tài khoản</label>
                    </div>
                    <div className={cx("user-box")}>
                        <input type="email" name="email" required />
                        <label>Email</label>
                    </div>
                    <div className={cx("user-box")}>
                        <input type="text" name="firstname" required />
                        <label>Tên</label>
                    </div>
                    <div className={cx("user-box")}>
                        <input type="text" name="lastname" required />
                        <label>Họ</label>
                    </div>
                    <div className={cx("user-box")}>
                        <input type="password" name="password" required />
                        <label>Mật khẩu</label>
                    </div>
                    <div className={cx("user-box")}>
                        <input type="password" name="re_password" required />
                        <label>Nhập lại mật khẩu</label>
                    </div>
                    <button>
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
