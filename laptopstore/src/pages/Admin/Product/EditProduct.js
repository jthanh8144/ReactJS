import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "../Admin.module.scss";
import images from "~/assets/images";
import productsApi from "~/api/productsApi";
import { AuthContext } from "~/context/AuthContext";
import brandApi from "~/api/brandApi";
import adminApi from "~/api/adminApi";

const cx = classNames.bind(styles);

function EditProduct() {
    const { code } = useParams();
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);

    const [listBrand, setListBrand] = useState([]);
    const [avatar, setAvatar] = useState(null);
    const [productId, setProductId] = useState("");
    const [productCode, setProductCode] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [brand, setBrand] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const resBrand = await brandApi.getAll();
                setListBrand(resBrand);
                const resProduct = await productsApi.get(code);
                setProductId(resProduct.id);
                setAvatar(resProduct.img);
                setProductCode(resProduct.product_code);
                setName(resProduct.name);
                setDescription(resProduct.description);
                setPrice(resProduct.price);
                setStock(resProduct.stock);
                setBrand(resProduct.brand);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    logoutUser();
                    alert("Bạn chưa đăng nhập");
                    navigate("/");
                }
            }
        })();
        // eslint-disable-next-line
    }, [code]);

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const handleEdit = () => {
        if (productCode && name && price && description && stock && brand) {
            (async () => {
                try {
                    const response = await adminApi.editProduct({
                        product_id: productId,
                        product_code: productCode,
                        name,
                        price,
                        description,
                        stock,
                        img: "",
                        brand_id: brand,
                    });
                    if (response.status === "Update product success") {
                        alert("Chỉnh sửa sản phẩm thành công");
                        navigate("/admin/product");
                    }
                } catch (error) {
                    if (error.response && error.response.status === 401) {
                        logoutUser();
                        alert("Bạn chưa đăng nhập");
                        navigate("/");
                    }
                }
            })();
        }
    };

    const handleDelete = () => {
        (async () => {
            try {
                console.log({ product_id: productId });
                const response = await adminApi.deleteProduct({ product_id: productId });
                if (response.status === "Delete product success") {
                    alert("Xóa sản phẩm thành công");
                    navigate("/admin/product");
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
                    <span className={cx("dashboard-title")}>
                        Chỉnh sửa sản phẩm
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mg-top-20">
                    <div className="row justify-content-center">
                        <div className="col-md-11 col-12 bg-white bd-rd-5 mg-bottom-20">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Hình ảnh</th>
                                        <td>
                                            <img
                                                className={cx("image-preview")}
                                                src={
                                                    avatar ||
                                                    images.placeholderImage
                                                }
                                                alt="product"
                                            />
                                            <input
                                                type="file"
                                                onChange={(e) =>
                                                    imageHandler(e)
                                                }
                                                accept="image/*"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <td>
                                            <input
                                                value={productCode}
                                                onChange={(e) =>
                                                    setProductCode(
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                className="form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <td>
                                            <input
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                type="text"
                                                className="form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Thông số sản phẩm</th>
                                        <td>
                                            <textarea
                                                value={description}
                                                onChange={(e) =>
                                                    setDescription(
                                                        e.target.value
                                                    )
                                                }
                                                className="form-control"
                                                id=""
                                                cols="30"
                                                rows="10"
                                            ></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Giá sản phẩm</th>
                                        <td>
                                            <input
                                                value={price}
                                                onChange={(e) =>
                                                    setPrice(e.target.value)
                                                }
                                                type="number"
                                                className="form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Số lượng trong kho</th>
                                        <td>
                                            <input
                                                value={stock}
                                                onChange={(e) =>
                                                    setStock(e.target.value)
                                                }
                                                type="number"
                                                className="form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Hãng</th>
                                        <td>
                                            <select
                                                className="form-control"
                                                value={brand}
                                                onChange={(e) =>
                                                    setBrand(e.target.value)
                                                }
                                            >
                                                <option value={""}>
                                                    -- Chọn hãng --
                                                </option>
                                                {listBrand.map((item) => (
                                                    <option
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.brand_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={handleEdit}
                                            >
                                                Lưu thay đổi
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={handleDelete}
                                            >
                                                Xóa sản phẩm
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProduct;
