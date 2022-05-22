import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import { AuthContext } from "~/context/AuthContext";
import styles from "./Checkout.module.scss";
import cartApi from "~/api/cartApi";
import productsApi from "~/api/productsApi";
import userApi from "~/api/userApi";
import BannerTop from "~/components/BannerTop";
import Notification from "~/components/Notification";

const cx = classNames.bind(styles);

function Checkout() {
    const navigate = useNavigate();

    const { logoutUser } = useContext(AuthContext);

    const [listProduct, setListProduct] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [user, setUser] = useState(null);
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const response = await cartApi.get();
                for (let i = 0; i < response.num; i++) {
                    const req = await productsApi.getById(
                        response.products[i].product
                    );
                    response.products[i].img = req.img;
                    response.products[i].price = req.price;
                    response.products[i].name = req.name;
                    response.products[i].instock = req.stock;
                }
                setListProduct(response.products);
                setCartTotal(response.total);

                const req = await userApi.get();
                setUser(req.user);
            } catch (error) {
                if (error.response.status === 401) {
                    logoutUser();
                    alert("Bạn chưa đăng nhập");
                    navigate("/");
                }
            }
        })();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = () => {
        if (address) {
            (async () => {
                const response = await cartApi.checkout({ address });
                if (response.status === "pending") {
                    setMessage("Đặt hàng thành công");
                } else {
                    setMessage("Đã xảy ra lỗi");
                }
            })();
        }
    };

    return (
        <div className="bg-color-brown">
            <BannerTop />
            <div className="section pd-top-20">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-11 col-12 no-pd">
                            <h5>THANH TOÁN</h5>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12 section-checkout">
                            <div className="row align-items-center justify-content-center">
                                {listProduct.map((product) => (
                                    <div
                                        key={product.product}
                                        className="col-12 flex-column-1 items-cart mg-bottom-20 bd-rd-5"
                                    >
                                        <div className="align-middle dp-flex-boostrap">
                                            <img
                                                alt="product"
                                                src={product.img}
                                                height="100px"
                                                width="150px"
                                            />
                                            <div className="dp-flex cart-p-content align-items-center">
                                                <div className="cart-p-desc dp-flex align-items-center">
                                                    <div className="pd-lr">
                                                        <span>
                                                            {product.name}
                                                        </span>
                                                    </div>
                                                    <div className="checkout-sl">
                                                        <div className="pd-lr">
                                                            <span>
                                                                <b className="text-danger">
                                                                    {
                                                                        product.price
                                                                    }
                                                                    $
                                                                </b>
                                                            </span>
                                                        </div>
                                                        <div className="pd-lr">
                                                            <span>
                                                                <b className="text-danger">
                                                                    Số lượng:
                                                                    {
                                                                        product.quantity
                                                                    }
                                                                </b>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="row">
                                <div className="col-12 flex-column-1 items-cart mg-left-20 bd-rd-5 mg-bottom-20">
                                    <div className="d-flex justify-content-between mg-bottom-10">
                                        <span>
                                            <b className={cx("checkout-title")}>
                                                Giao tới
                                            </b>
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between mg-bottom-10">
                                        <span>Tên</span>
                                        <span className="font-weight-500">
                                            {user?.first_name || ""}{" "}
                                            {user?.last_name || ""}
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between mg-bottom-10">
                                        <span>Email</span>
                                        <span className="font-weight-500">
                                            {user?.email || ""}
                                        </span>
                                    </div>
                                    <div className="justify-content-between">
                                        <span className="font-weight-500">
                                            <input
                                                value={address}
                                                onChange={(e) =>
                                                    setAddress(e.target.value)
                                                }
                                                className="form-control no-bd"
                                                type="text"
                                                placeholder="Nhập địa chỉ giao hàng..."
                                                required
                                            />
                                        </span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between text-right">
                                        <span>Tổng</span>
                                        <div className="">
                                            <span className="font-weight-500 total-price-1">
                                                {cartTotal} $
                                            </span>
                                        </div>
                                    </div>
                                    {!!message && (
                                        <Notification message={message} />
                                    )}
                                    <button
                                        className="btn muahang"
                                        onClick={handleSubmit}
                                    >
                                        Thanh Toán
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
