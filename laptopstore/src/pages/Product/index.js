import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import productsApi from "~/api/productsApi";
import cartApi from "~/api/cartApi";
import InstockProducts from "~/components/InstockProducts";
import { AuthContext } from "~/context/AuthContext";

function Product() {
    const navigate = useNavigate();

    const { setCartNum, logoutUser } = useContext(AuthContext);

    const { productCode } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productsApi.get(productCode);
                setProduct(response);
            } catch (error) {
                // navigate('..');
                console.log(error);
            }
        };
        fetchProductList();
        // eslint-disable-next-line
    }, [productCode]);

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
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img
                            className="item img-fluid"
                            src={product ? product.img : ""}
                            alt={product ? product.product_code : ""}
                        />
                    </div>
                    <div className="col-md-6 col-12 info-product-right align-items-center">
                        <h4>{product ? product.name : ""}</h4>
                        <div>
                            <span className="price">
                                {product ? product.price : ""}$
                            </span>
                        </div>
                        <ul className="review">
                            <li>
                                <i className="lni lni-star-filled"></i>
                            </li>
                            <li>
                                <i className="lni lni-star-filled"></i>
                            </li>
                            <li>
                                <i className="lni lni-star-filled"></i>
                            </li>
                            <li>
                                <i className="lni lni-star-filled"></i>
                            </li>
                            <li>
                                <i className="lni lni-star-filled"></i>
                            </li>
                            <li>
                                <span>5.0</span>
                            </li>
                        </ul>
                        <hr />
                        <div className="product-info-items">
                            {product
                                ? product.description
                                      .split("\\n")
                                      .map((s, index) => <p key={index}>{s}</p>)
                                : ""}

                            {product ? (
                                product.stock > 1 ? (
                                    <>
                                        <p>
                                            <b>Còn Hàng</b>
                                        </p>
                                        <button
                                            className="btn btn-danger"
                                            onClick={addToCart}
                                        >
                                            MUA HÀNG
                                        </button>
                                    </>
                                ) : (
                                    <p>
                                        <b>Hết Hàng</b>
                                    </p>
                                )
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <InstockProducts />
        </>
    );
}

export default Product;
