import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import productsApi from "~/api/productsApi";
import InstockProducts from "~/components/InstockProducts";

function Product() {
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
    }, [product]);

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
                                    <p>
                                        <b>Còn Hàng</b>
                                    </p>
                                ) : (
                                    <p>
                                        <b>Hết Hàng</b>
                                    </p>
                                )
                            ) : (
                                ""
                            )}

                            <button className="btn btn-danger">MUA HÀNG</button>
                        </div>
                    </div>
                </div>
            </div>
            <InstockProducts />
        </>
    );
}

export default Product;
