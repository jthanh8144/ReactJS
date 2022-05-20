import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AuthContext } from "~/context/AuthContext";
import images from "~/assets/images";
import cartApi from "~/api/cartApi";
import productsApi from "~/api/productsApi";

import BannerTop from "~/components/BannerTop";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function Cart() {
    const navigate = useNavigate();

    const { logoutUser } = useContext(AuthContext);

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await cartApi.get();
                response.forEach(async (product, index) => {
                    const req = await productsApi.getById(product.product);
                    response[index].img = req.img;
                    response[index].price = req.price;
                    response[index].name = req.name;
                });
                console.log(response);
                setListProduct(response);
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
                                    {listProduct.map((product) => {
                                        console.log(product);
                                    })}
                                </div>
                            </div>
                            <div className="col-lg-3 col-12">
                                <div className="row">
                                    <div className="col-12 flex-column-1 items-cart mg-left-20 bd-rd-5 mg-bottom-20">
                                        <div className="d-flex justify-content-between mg-bottom-10">
                                            <span>Tạm tính</span>

                                            <span className="font-weight-500">
                                                $auth.user.cart.carttotal$
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
                                                    $auth.user.cart.carttotal$
                                                </span>
                                                <span className="total-price-2">
                                                    (Đã bao gồm VAT nếu có)
                                                </span>
                                            </div>
                                        </div>
                                        <Link to="cart/checkout">
                                            <button
                                                type="button"
                                                className="btn muahang"
                                            >
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
