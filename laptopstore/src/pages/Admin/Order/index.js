import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "../Admin.module.scss";
import { AuthContext } from "~/context/AuthContext";
import adminApi from "~/api/adminApi";
import productsApi from "~/api/productsApi";

const cx = classNames.bind(styles);

function Order() {
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);

    const [listOrder, setListOrder] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await adminApi.getAll();
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
                console.log(response);
                setListOrder(response);
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

    const handleUpdateStatus = (id) => {
        (async () => {
            try {
                const response = await adminApi.updateOrderStatus({
                    order_id: id,
                });
                if (response.status === "Change status success") {
                    alert("Thay đổi trạng thái đơn hàng thành công");
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

    const handleCancel = (id) => {
        (async () => {
            try {
                const response = await adminApi.cancelOrder({
                    order_id: id,
                });
                if (response.status === "Cancel success") {
                    alert("Hủy đơn hàng thành công");
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
        <>
            <div className="row">
                <div className="col-12">
                    <span className={cx("dashboard-title")}>Đơn hàng</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 table-responsive">
                    {listOrder.map((order) => (
                        <div key={order.id}>
                            <br />
                            <table className="table align-middle table-bordered bg-white">
                                <thead>
                                    <tr>
                                        <th colSpan="4">
                                            ĐƠN HÀNG #{order.id}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={cx("w-50")}>
                                            Ngày đặt hàng
                                        </td>
                                        <td colSpan="3">{order.created_at}</td>
                                    </tr>
                                    <tr>
                                        <td>Tài khoản</td>
                                        <td colSpan="3">username</td>
                                    </tr>
                                    <tr>
                                        <td>Địa chỉ</td>
                                        <td colSpan="3">{order.address}</td>
                                    </tr>
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <th
                                            className={cx(
                                                "text-center",
                                                "w-10"
                                            )}
                                        >
                                            Giá
                                        </th>
                                        <th
                                            className={cx(
                                                "text-center",
                                                "w-10"
                                            )}
                                        >
                                            Số lượng
                                        </th>
                                        <th>Hình ảnh</th>
                                    </tr>

                                    {order.details.map((item, index) => (
                                        <tr key={index}>
                                            <td className="align-middle">
                                                {item.name}
                                            </td>
                                            <th
                                                className={cx(
                                                    "align-middle",
                                                    "text-center"
                                                )}
                                            >
                                                {item.price}$
                                            </th>
                                            <th
                                                className={cx(
                                                    "align-middle",
                                                    "text-center"
                                                )}
                                            >
                                                {item.quantity}
                                            </th>
                                            <th>
                                                <img
                                                    src={item.img}
                                                    alt="product"
                                                    height="100px"
                                                    width="150px"
                                                />
                                            </th>
                                        </tr>
                                    ))}

                                    <tr>
                                        <th>Tổng giá:</th>
                                        <th colSpan="2">{order.total}$</th>
                                        <th>
                                            {order.status === "done" && (
                                                <span className="text-success">
                                                    Đã hoàn tất
                                                </span>
                                            )}
                                            {order.status === "canceled" && (
                                                <span className="text-danger">
                                                    Đã hủy
                                                </span>
                                            )}
                                            {order.status === "pending" && (
                                                <button
                                                    className="btn btn-success"
                                                    onClick={() =>
                                                        handleUpdateStatus(
                                                            order.id
                                                        )
                                                    }
                                                >
                                                    Xác nhận đơn hàng
                                                </button>
                                            )}
                                            {order.status === "confirmed" && (
                                                <button
                                                    className="btn btn-success"
                                                    onClick={() =>
                                                        handleUpdateStatus(
                                                            order.id
                                                        )
                                                    }
                                                >
                                                    Hoàn thành đơn hàng
                                                </button>
                                            )}
                                            {order.status !== "canceled" && order.status !== "done" && (
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        handleCancel(order.id)
                                                    }
                                                >
                                                    Hủy
                                                </button>
                                            )}
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Order;
