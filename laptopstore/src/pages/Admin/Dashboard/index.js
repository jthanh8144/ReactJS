import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    faCartShopping,
    faEnvelopeOpenText,
    faLaptop,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./Dashboard.module.scss";
import productsApi from "~/api/productsApi";
import feedbackApi from "~/api/feedbackApi";
import adminApi from "~/api/adminApi";

const cx = classNames.bind(styles);

function Dashboard() {
    const [product, setProduct] = useState(0);
    const [order, setOrder] = useState(0);
    const [feedback, setFeedback] = useState(0);

    useEffect(() => {
        (async () => {
            const reqProduct = await productsApi.getAll();
            setProduct(reqProduct.length);
            const reqOrder = await adminApi.getAll();
            setOrder(reqOrder.length);
            const reqFeedback = await feedbackApi.getAll();
            setFeedback(reqFeedback.length);
        })();
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
                            <Link to="/admin/products">PRODUCTS</Link>
                            <span>{product}</span>
                        </div>
                        <div>
                            <Link to="">
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
                            <Link to="/admin/orders">ORDERS</Link>
                            <span>{order}</span>
                        </div>
                        <div>
                            <Link to="">
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
                            <Link to="/admin/feedback">Feedback</Link>
                            <span>{feedback}</span>
                        </div>
                        <div>
                            <Link to="">
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
