import { useEffect, useState } from "react";

import productsApi from "~/api/productsApi";
import ProductItem from "~/components/ProductItem";

function InstockProducts() {
    const [instockProducts, setInstockProducts] = useState([]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productsApi.getInstockProducts();
                setInstockProducts(response);
            } catch (error) {
                console.log("Failed: ", error);
            }
        };
        fetchProductList();
    }, []);

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block__header">
                            <h2 className="block-header-title text-center">
                                SẢN PHẨM NỔI BẬT
                            </h2>
                        </div>
                    </div>

                    {instockProducts.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InstockProducts;
