import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "~/context/AuthContext";
import images from "~/assets/images";
import userApi from "~/api/userApi";
import productsApi from "~/api/productsApi";
import BannerTop from "~/components/BannerTop";

function Order() {
    const navigate = useNavigate();
    const { user, logoutUser } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await userApi.order();
                if (response.status !== "You don't have orders.") {
                    console.log(response);
                    for (let i = 0; i < response.length; i++) {
                        for (let j = 0; j < response[i].details.length; j++) {
                            const req = await productsApi.getById(
                                response[i].details[j].product
                            );
                            response[i].details[j].name = req.name;
                            response[i].details[j].price = req.price;
                            response[i].details[j].img = req.img;
                        }
                    }
                    setOrders(response);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    logoutUser();
                    alert("Bạn chưa đăng nhập");
                    navigate("/");
                }
            }
        })();
        // eslint-disable-next-line
    }, [isUpdate]);

    const handleCancel = (orderId) => {
        (async () => {
            try {
                const response = await userApi.cancelOrder({
                    order_id: orderId,
                });
                if (
                    response?.status ===
                    "Your order has been successfully canceled"
                ) {
                    setIsUpdate((prev) => !prev);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
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
            <div className="section pd-top-20">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-11 no-pd">
                            <h5>Lịch sử đơn hàng</h5>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-11 bg-white bd-rd-5 mg-bottom-20 table-responsive">
                            {orders.length < 1 ? (
                                <div className="flex-column-1 items-cart items-empty-cart">
                                    <img
                                        src={images.emptyCart}
                                        alt="Empty Cart"
                                        className="rounded mx-auto d-block"
                                    />
                                    <p className="text-center">
                                        Không có lịch sử mua hàng.
                                    </p>
                                    <Link to="/" className="btn btn-primary">
                                        Tiếp tục mua sắm
                                    </Link>
                                </div>
                            ) : (
                                orders.map((order, index) => {
                                    let status = "";
                                    switch (order.status) {
                                        case "pending":
                                            status = "Đang chờ xử lí";
                                            break;
                                        case "confirmed":
                                            status = "Đã Xác Nhận";
                                            break;
                                        case "done":
                                            status = "Đã Hoàn Tất";
                                            break;
                                        case "canceled":
                                            status = "Đã Hủy";
                                            break;
                                        default:
                                            break;
                                    }

                                    return (
                                        <div key={index}>
                                            <br />
                                            <table className="table align-middle table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th colSpan="4">
                                                            MÃ ĐƠN HÀNG #
                                                            {order.id}
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Ngày đặt hàng</td>
                                                        <td colSpan="3">
                                                            {order.created_at}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tài khoản</td>
                                                        <td colSpan="3">
                                                            {user}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Địa chỉ</td>
                                                        <td colSpan="3">
                                                            {order.address}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Tên sản phẩm:</th>
                                                        <th>Giá:</th>
                                                        <th>Số lượng</th>
                                                        <th>Hình ảnh</th>
                                                    </tr>

                                                    {order.details.map(
                                                        (product, i) => (
                                                            <tr key={i}>
                                                                <td className="align-middle">
                                                                    {
                                                                        product.name
                                                                    }
                                                                </td>
                                                                <th className="align-middle">
                                                                    {
                                                                        product.price
                                                                    }
                                                                    $
                                                                </th>
                                                                <th className="align-middle">
                                                                    {
                                                                        product.quantity
                                                                    }
                                                                </th>
                                                                <th>
                                                                    <img
                                                                        src={
                                                                            product.img
                                                                        }
                                                                        alt="product"
                                                                        height="100px"
                                                                        width="150px"
                                                                    />
                                                                </th>
                                                            </tr>
                                                        )
                                                    )}

                                                    <tr>
                                                        <th>Tổng giá:</th>
                                                        <th colSpan="2">
                                                            {order.total}$
                                                        </th>
                                                        <th>
                                                            <span className="btn btn-warning">
                                                                {status}
                                                            </span>
                                                            {status !==
                                                                "Đã Hủy" && (
                                                                <button
                                                                    className="btn btn-danger"
                                                                    onClick={() =>
                                                                        handleCancel(
                                                                            order.id
                                                                        )
                                                                    }
                                                                >
                                                                    Hủy đơn
                                                                </button>
                                                            )}
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
