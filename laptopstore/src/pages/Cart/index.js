import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import { AuthContext } from "~/context/AuthContext";
import images from "~/assets/images";
import cartApi from "~/api/cartApi";
import productsApi from "~/api/productsApi";
import styles from "./Cart.module.scss";
import BannerTop from "~/components/BannerTop";

const cx = classNames.bind(styles);

function Cart() {
    const navigate = useNavigate();

    const { logoutUser } = useContext(AuthContext);

    const [listProduct, setListProduct] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);

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
            } catch (error) {
                if (error.response.status === 401) {
                    logoutUser();
                    alert("Bạn chưa đăng nhập");
                    navigate("/");
                }
            }
        })();
        // eslint-disable-next-line
    }, [isUpdate]);

    const updateCart = (id, action) => {
        (async () => {
            try {
                await cartApi.updateCart({
                    product_id: id,
                    operator: action,
                });
                setIsUpdate((prev) => !prev);
            } catch (error) {
                if (error.response.status === 401) {
                    logoutUser();
                    alert("Bạn chưa đăng nhập");
                    navigate("/");
                }
            }
        })();
    };

    return (
        <div className="bg-color-brown">
            <BannerTop />
            {listProduct.length < 1 ? (
                <div className="section pd-top-20">
                    <div className="container">
                        <div className="row align-items-center justify-content-center bd-rd-5">
                            <div className="col-11 flex-column-1 items-cart items-empty-cart">
                                <img
                                    src={images.emptyCart}
                                    alt="Empty Cart"
                                    className="rounded mx-auto d-block"
                                />
                                <p className="text-center">
                                    Không có sản phẩm nào trong giỏ hàng của
                                    bạn.
                                </p>
                                <Link to="/" className="btn btn-primary">
                                    Tiếp tục mua sắm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="section pd-top-20">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-11 col-12 no-pd">
                                <h5>GIỎ HÀNG</h5>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-12">
                                <div className="row align-items-center justify-content-center">
                                    {listProduct.map((product) => (
                                        <div
                                            key={product.product}
                                            className="col-12 flex-column-1 items-cart mg-bottom-20 bd-rd-5"
                                        >
                                            <div className="align-middle dp-flex">
                                                <img
                                                    src={product.img}
                                                    alt="product"
                                                    height="100px"
                                                    width="150px"
                                                />
                                                <div className="dp-flex cart-p-content align-items-center">
                                                    <div className="cart-p-desc dp-flex align-items-center">
                                                        <div>
                                                            <span>
                                                                {product.name}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span>
                                                                <b className="text-danger">
                                                                    {
                                                                        product.price
                                                                    }
                                                                    $
                                                                </b>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="cart-p-actions dp-flex align-items-center">
                                                        <div
                                                            className={cx(
                                                                "cart-action"
                                                            )}
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faMinus}
                                                                className={cx(
                                                                    "update-cart",
                                                                    product.quantity ===
                                                                        1
                                                                        ? "disabled"
                                                                        : ""
                                                                )}
                                                                onClick={() =>
                                                                    updateCart(
                                                                        product.product,
                                                                        "-"
                                                                    )
                                                                }
                                                            />
                                                            <span>
                                                                <b
                                                                    className={cx(
                                                                        "cart-quantity"
                                                                    )}
                                                                >
                                                                    {
                                                                        product.quantity
                                                                    }
                                                                </b>
                                                            </span>
                                                            <FontAwesomeIcon
                                                                icon={faPlus}
                                                                className={cx(
                                                                    "update-cart",
                                                                    product.quantity +
                                                                        1 >
                                                                        product.instock
                                                                        ? "disabled"
                                                                        : ""
                                                                )}
                                                                onClick={() =>
                                                                    updateCart(
                                                                        product.product,
                                                                        "+"
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                        <button className="btn btn-danger">
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faTrashCan
                                                                }
                                                                className={cx(
                                                                    "delete-cart"
                                                                )}
                                                                onClick={() =>
                                                                    updateCart(
                                                                        product.product,
                                                                        "x"
                                                                    )
                                                                }
                                                            />
                                                        </button>
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
                                            <span>Tạm tính</span>

                                            <span className="font-weight-500">
                                                {cartTotal}$
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span>Giảm giá</span>
                                            <span className="font-weight-500">
                                                0$
                                            </span>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between text-right">
                                            <span>Tổng cộng</span>
                                            <div className="">
                                                <span className="font-weight-500 total-price-1">
                                                    {cartTotal}$
                                                </span>
                                                <span className="total-price-2">
                                                    (Đã bao gồm VAT nếu có)
                                                </span>
                                            </div>
                                        </div>
                                        <Link to="/checkout">
                                            <button className="btn muahang">
                                                Đặt Hàng
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
