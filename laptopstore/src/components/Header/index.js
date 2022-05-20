import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faPhoneAlt,
    faSearch,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import { AuthContext } from "~/context/AuthContext";
import cartApi from "~/api/cartApi";

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();

    const { user, logoutUser } = useContext(AuthContext);

    const [searchInput, setSearchInput] = useState("");
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        if (user) {
            (async () => {
                try {
                    const response = await cartApi.get();
                    setCartCount(response?.length);
                } catch (error) {
                    console.log("Failed: ", error);
                }
            })();
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/products/search/${decodeURIComponent(searchInput)}`);
        setSearchInput("");
    };

    return (
        <div className={cx("wrapper")}>
            <div className="container">
                <div className={cx("row align-items-center", "content")}>
                    <div className="col-lg-3 col-md-5 col-sm-5 col-5">
                        <div className="head-logo">
                            <Link to="/">
                                <img src={images.logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-0 col-sm-0 col-0 d-max-992-none">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="search-head dp-flex">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm sản phẩm"
                                    className="form-control"
                                    name="name"
                                    value={searchInput}
                                    onChange={(e) =>
                                        setSearchInput(e.target.value)
                                    }
                                />
                                <button type="button" onClick={handleSubmit}>
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className={cx("search-icon")}
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-5 col-md-7 col-sm-7 col-7 dp-flex no-decoration">
                        <div className="item-hotline dp-flex d-max-1200-none">
                            <a
                                href="tel:0782 378 407"
                                className={cx("hotline")}
                            >
                                <FontAwesomeIcon
                                    icon={faPhoneAlt}
                                    className={cx("phone-icon")}
                                />
                            </a>
                            <h5>
                                Hotline: <span>0782 378 407</span>
                            </h5>
                        </div>

                        <div className="item-account dp-flex">
                            {!!user ? (
                                <img
                                    src={images.placeholder}
                                    className="preview-img"
                                    alt="placeholder"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faUserCircle}
                                    className={cx("user-icon")}
                                />
                            )}
                            <h5>
                                {!!user ? (
                                    <Link to="/user" className="no-decoration">
                                        TÀI KHOẢN
                                    </Link>
                                ) : (
                                    <span className="no-decoration">
                                        TÀI KHOẢN
                                    </span>
                                )}
                                <div className="dn-dk">
                                    {!!user ? (
                                        <>
                                            <div className="cart-items">
                                                <span className={cx("user")}>
                                                    {user}
                                                </span>
                                                <div className="shopping-item">
                                                    <div className="dropdown-cart-header">
                                                        <span>
                                                            <Link
                                                                to="/user/orders"
                                                                className="no-decoration"
                                                            >
                                                                Lịch sử đơn hàng
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span> | </span>
                                            {/* eslint-disable-next-line */}
                                            <span
                                                className="no-decoration"
                                                onClick={() => {
                                                    logoutUser();
                                                }}
                                            >
                                                <span className="cursor-poin">
                                                    Đăng xuất
                                                </span>
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <div className="cart-items">
                                                <Link
                                                    to="/login"
                                                    className="no-decoration"
                                                >
                                                    <span> Đăng nhập</span>
                                                </Link>
                                            </div>
                                            <span> | </span>
                                            <Link
                                                to="/register"
                                                className="no-decoration"
                                            >
                                                <span> Đăng ký</span>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </h5>
                        </div>

                        <Link
                            to="/cart"
                            className={cx(
                                "item-account dp-flex align-items-center",
                                "cart"
                            )}
                        >
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className={cx("cart-icon")}
                            />
                            {!!user ? (
                                <span className="countproductincart">
                                    {cartCount}
                                </span>
                            ) : (
                                <></>
                            )}
                            <div className="d-xs-none">
                                <h5>Giỏ hàng</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
