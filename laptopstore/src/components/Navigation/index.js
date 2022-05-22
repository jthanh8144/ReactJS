import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Navigation.module.scss";
import brandApi from "~/api/brandApi";

const cx = classNames.bind(styles);

function Navigation() {
    const [listBrand, setListBrand] = useState([]);

    useEffect(() => {
        const fetchBrandList = async () => {
            try {
                const response = await brandApi.getAll();
                setListBrand(response);
            } catch (error) {
                console.log("Failed: ", error);
            }
        };
        fetchBrandList();
    }, []);

    return (
        <div className={cx("wrapper")}>
            <div className="container">
                <div className={cx("row align-items-center")}>
                    <div className="col-lg-9 col-md-6 col-4">
                        <div className="nav-inner">
                            <div
                                className={cx("mega-category-menu", "content")}
                            >
                                <span className="cat-button">
                                    <i className="lni lni-menu" />
                                    Danh mục sản phẩm
                                </span>
                                <ul className="sub-category">
                                    {listBrand.map((brand, index) => (
                                        <li key={index}>
                                            <Link
                                                to={`/products/search/${brand.brand_name}`}
                                            >
                                                {brand.brand_name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <nav className="navbar navbar-expand-lg">
                                <div className="collapse navbar-collapse sub-menu-bar">
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link
                                                to="/"
                                            >
                                                Trang chủ
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/introduction">
                                                Giới thiệu
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/products/">Sản phẩm</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/feedback/">Phản hồi</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-8">
                        <div className="nav-social">
                            <ul>
                                <li>
                                    {/* eslint-disable-next-line */}
                                    <a href="#">
                                        <i className="lni lni-facebook-filled" />
                                    </a>
                                </li>
                                <li>
                                    {/* eslint-disable-next-line */}
                                    <a href="#">
                                        <i className="lni lni-twitter-original" />
                                    </a>
                                </li>
                                <li>
                                    {/* eslint-disable-next-line */}
                                    <a href="#">
                                        <i className="lni lni-instagram" />
                                    </a>
                                </li>
                                <li>
                                    {/* eslint-disable-next-line */}
                                    <a href="#">
                                        <i className="lni lni-skype" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
