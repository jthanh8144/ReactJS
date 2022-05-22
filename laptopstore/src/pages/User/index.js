import classNames from "classnames/bind";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./User.module.scss";
import images from "~/assets/images";
import userApi from "~/api/userApi";
import { AuthContext } from "~/context/AuthContext";
import BannerTop from "~/components/BannerTop";

const cx = classNames.bind(styles);

function User() {
    const navigate = useNavigate();

    const { logoutUser } = useContext(AuthContext);

    const [avatar, setAvatar] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reNewPassword, setReNewPassword] = useState("");

    const [isEditing, setIsEditing] = useState(false);
    const [editUserMessage, setEditUserMessage] = useState("");
    const [changePassMessage, setChangePassMessage] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const response = await userApi.get();
                const user = response?.user;
                setAvatar(user.img || "");
                setFirstname(user.first_name);
                setLastname(user.last_name);
                setEmail(user.email);
                setUsername(user.username);
            } catch (error) {
                if (error.response.status === 401) {
                    logoutUser();
                    alert("Bạn chưa đăng nhập");
                }
            }
        })();
        // eslint-disable-next-line
    }, []);

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const handleEditUser = () => {
        if (email && firstname && lastname) {
            (async () => {
                try {
                    const data = {
                        email,
                        first_name: firstname,
                        last_name: lastname,
                        default_address: "",
                        ship_address: "",
                        img: "",
                    };
                    const response = await userApi.updateUser(data);
                    setEditUserMessage(response?.status);
                    setIsEditing(false)
                } catch (error) {
                    if (error.response.status === 401) {
                        logoutUser();
                        alert("Bạn chưa đăng nhập");
                        navigate("/");
                    }
                }
            })();
        }
    };

    const handleChangePass = () => {
        if (password && newPassword && reNewPassword) {
            (async () => {
                try {
                    const response = await userApi.changePass({
                        password,
                        new_password: newPassword,
                        rnew_password: reNewPassword,
                    });
                    setChangePassMessage(response?.status);
                } catch (error) {
                    if (error.response.status === 401) {
                        logoutUser();
                        alert("Bạn chưa đăng nhập");
                        navigate("/");
                    }
                }
            })();
        }
    };

    return (
        <div className="bg-color-brown">
            <BannerTop />
            <div className="section section-info-customer pd-top-20">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-12 bg-white bd-rd-5 mg-bottom-20 table-responsive">
                            <span className={cx("user-title")}>
                                Thông tin cá nhân
                            </span>
                            <table className="table table-borderless align-middle">
                                <tbody>
                                    <tr>
                                        <td>Avatar</td>
                                        <td>
                                            <img
                                                alt="avatar"
                                                src={
                                                    avatar || images.placeholder
                                                }
                                                width="100px"
                                                height="auto"
                                            />
                                            {isEditing && (
                                                <input
                                                    type="file"
                                                    onChange={(e) =>
                                                        imageHandler(e)
                                                    }
                                                    accept="image/*"
                                                />
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tên</td>
                                        <td>
                                            <input
                                                value={firstname}
                                                onChange={(e) =>
                                                    setFirstname(e.target.value)
                                                }
                                                disabled={!isEditing}
                                                type="text"
                                                className="form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Họ</td>
                                        <td>
                                            <input
                                                value={lastname}
                                                onChange={(e) =>
                                                    setLastname(e.target.value)
                                                }
                                                disabled={!isEditing}
                                                type="text"
                                                className="form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>
                                            <input
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                disabled={!isEditing}
                                                className="form-control"
                                                type="email"
                                            />
                                        </td>
                                    </tr>
                                    {!!editUserMessage && (
                                        <tr>
                                            <td></td>
                                            <td className="bg-danger">
                                                {editUserMessage}
                                            </td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td></td>
                                        <td>
                                            {isEditing ? (
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={handleEditUser}
                                                >
                                                    Lưu thay đổi
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn btn-danger"
                                                    type="button"
                                                    onClick={() => {
                                                        setIsEditing(true);
                                                    }}
                                                >
                                                    Chỉnh sửa
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-5 col-12 mg-left-20 bg-white bd-rd-5 mg-bottom-20">
                            <span className={cx("user-title")}>
                                Thông tin đăng nhập
                            </span>
                            <table className="table table-borderless align-middle">
                                <tbody>
                                    <tr>
                                        <td>Tài khoản</td>
                                        <td>
                                            <input
                                                value={username}
                                                type="text"
                                                readOnly
                                                className="form-control"
                                                disabled
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mật khẩu cũ</td>
                                        <td>
                                            <input
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                type="password"
                                                className="form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mật khẩu mới</td>
                                        <td>
                                            <input
                                                value={newPassword}
                                                onChange={(e) =>
                                                    setNewPassword(
                                                        e.target.value
                                                    )
                                                }
                                                type="password"
                                                className="form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Xác nhận mật khẩu</td>
                                        <td>
                                            <input
                                                value={reNewPassword}
                                                onChange={(e) =>
                                                    setReNewPassword(
                                                        e.target.value
                                                    )
                                                }
                                                type="password"
                                                className="form-control"
                                            />
                                        </td>
                                    </tr>
                                    {!!changePassMessage && (
                                        <tr>
                                            <td></td>
                                            <td className="bg-danger">
                                                {changePassMessage}
                                            </td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td></td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={handleChangePass}
                                            >
                                                Lưu thay đổi
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
