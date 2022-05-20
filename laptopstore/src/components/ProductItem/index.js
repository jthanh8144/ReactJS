import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "~/context/AuthContext";
import cartApi from "~/api/cartApi";

function ProductItem({ product }) {
    const navigate = useNavigate();
    const { setCartNum, logoutUser } = useContext(AuthContext);

    const addToCart = () => {
        (async () => {
            try {
                await cartApi.addToCart({ product_id: product.id });
                const response = await cartApi.get();
                setCartNum(response?.length);
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
        <div className="col-lg-3 col-md-4 col-6 items-product mg-bt-30">
            <div className="product-img">
                <Link
                    to={`/products/${decodeURIComponent(product.product_code)}`}
                >
                    <img
                        src={product.img}
                        alt={product.product_code}
                        className="img-fluid rounded mx-auto d-block pd-10"
                    />
                </Link>
            </div>
            <div className="product-info">
                <Link
                    to={`/products/${decodeURIComponent(product.product_code)}`}
                >
                    <h6>{product.name}</h6>
                </Link>
                <span>{product.price}$</span>
                <button
                    className="btn btn-danger add-to-cart col-12"
                    onClick={addToCart}
                >
                    Mua Ngay
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
