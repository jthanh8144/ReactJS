import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import {
    faCartShopping,
    faPhoneAlt,
    faSearch,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;

    return (
        <div className={cx("wrapper")}>
            <div className="container">
                <div class={cx("row align-items-center", "content")}>
                    <div className="col-lg-3 col-md-5 col-sm-5 col-5">
                        <div className="head-logo">
                            <Link to="/">
                                <img src={images.logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-0 col-sm-0 col-0 d-max-992-none">
                        <form>
                            <div className="search-head dp-flex">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm sản phẩm"
                                    className="form-control"
                                />
                                <button type="button">
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className={cx("search-icon")}
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-5 col-md-7 col-sm-7 col-7 dp-flex no-decoration">
                        <div class="item-hotline dp-flex d-max-1200-none">
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
                            {currentUser ? (
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
                                {currentUser ? (
                                    <Link to="/user" className="no-decoration">
                                        TÀI KHOẢN
                                    </Link>
                                ) : (
                                    <span className="no-decoration">
                                        TÀI KHOẢN
                                    </span>
                                )}
                                <div className="dn-dk">
                                    {currentUser ? (
                                        <>
                                            <div className="cart-items">
                                                <span className={cx("user")}>
                                                    thanh vo
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
                                            <a href="#" className="no-decoration">
                                                <span class="cursor-poin">
                                                    Đăng xuất
                                                </span>
                                            </a>
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
                            {currentUser ? (
                                <span className="countproductincart">0</span>
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
