import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    faCartShopping,
    faEnvelopeOpenText,
    faLaptop,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "../Admin.module.scss";
import { AuthContext } from "~/context/AuthContext";
import productsApi from "~/api/productsApi";
import feedbackApi from "~/api/feedbackApi";
import adminApi from "~/api/adminApi";

const cx = classNames.bind(styles);

function Dashboard() {
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);

    const [product, setProduct] = useState(0);
    const [order, setOrder] = useState(0);
    const [feedback, setFeedback] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const reqProduct = await productsApi.getAll();
                setProduct(reqProduct.length);
                const reqOrder = await adminApi.getAll();
                setOrder(reqOrder.length);
                const reqFeedback = await feedbackApi.getAll();
                setFeedback(reqFeedback.length);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    logoutUser();
                    alert("Bạn chưa đăng nhập");
                    navigate("/");
                }
            }
        })();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <span className={cx("dashboard-title")}>Dashboard</span>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="user-adm user">
                        <div className="d-column">
                            <Link to="/">USERS</Link>
                            <span>∞</span>
                        </div>
                        <div>
                            <Link to="/">
                                <i>
                                    <FontAwesomeIcon icon={faUser} />
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="product-adm user">
                        <div className="d-column">
                            <Link to="/admin/product/">PRODUCTS</Link>
                            <span>{product}</span>
                        </div>
                        <div>
                            <Link to="/admin/product/">
                                <i>
                                    <FontAwesomeIcon icon={faLaptop} />
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="order-adm user">
                        <div className="d-column">
                            <Link to="/admin/order/">ORDERS</Link>
                            <span>{order}</span>
                        </div>
                        <div>
                            <Link to="/admin/order/">
                                <i>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="messages-adm user">
                        <div className="d-column">
                            <Link to="/admin/feedback/">Feedback</Link>
                            <span>{feedback}</span>
                        </div>
                        <div>
                            <Link to="/admin/feedback/">
                                <i>
                                    <FontAwesomeIcon
                                        icon={faEnvelopeOpenText}
                                    />
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
