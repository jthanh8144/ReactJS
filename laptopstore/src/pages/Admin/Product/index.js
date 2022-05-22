import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopMedical, faPen } from "@fortawesome/free-solid-svg-icons";

import styles from "../Admin.module.scss";
import productsApi from "~/api/productsApi";
import { AuthContext } from "~/context/AuthContext";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Product() {
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await productsApi.getAll();
                setListProduct(response);
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
                    <span className={cx("dashboard-title")}>
                        Tất cả sản phẩm
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 table-responsive">
                    <table className="table table-bordered table-hover bg-white align-middle-dt">
                        <thead>
                            <tr>
                                <th>Mã SP</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Thông số</th>
                                <th>Hình ảnh</th>
                                <th>Số lượng</th>
                                <th className={cx("text-center")}>
                                    <Link
                                        to="/admin/product/add/"
                                        className="btn btn-success"
                                    >
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faLaptopMedical}
                                            />
                                        </i>
                                        <span>Thêm</span>
                                    </Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {listProduct.map((product, index) => (
                                <tr key={index}>
                                    <th>{product.product_code}</th>
                                    <td>{product.name}</td>
                                    <td className={cx("text-center")}>
                                        {product.price}$
                                    </td>
                                    <td>{product.description}</td>
                                    <td>
                                        <img
                                            src={product.img || images.placeholderImage}
                                            alt={product.product_code}
                                            className="add-pr"
                                        />
                                    </td>
                                    <td className={cx("text-center")}>
                                        {product.stock}
                                    </td>
                                    <td className={cx("text-center")}>
                                        <Link
                                            to={`/admin/product/${decodeURIComponent(
                                                product.product_code
                                            )}`}
                                            className="btn btn-danger"
                                        >
                                            <FontAwesomeIcon icon={faPen} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Product;
