import { Link } from "react-router-dom";

function ProductItem({ product }) {
    return (
        <div className="col-lg-3 col-md-4 col-6 items-product mg-bt-30">
            <div className="product-img">
                <Link to={`/products/${decodeURIComponent(product.product_code)}`}>
                    <img
                        src={product.img}
                        alt={product.product_code}
                        className="img-fluid rounded mx-auto d-block pd-10"
                    />
                </Link>
            </div>
            <div className="product-info">
                <Link to={`/products/${decodeURIComponent(product.product_code)}`}>
                    <h6>{product.name}</h6>
                </Link>
                <span>{product.price}$</span>
                <button
                    type="button"
                    className="btn btn-danger add-to-cart col-12"
                >
                    Mua Ngay
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
