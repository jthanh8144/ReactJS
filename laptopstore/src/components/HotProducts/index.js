import { useEffect, useState } from "react";

import ProductItem from "~/components/ProductItem";
import productsApi from "~/api/productsApi";

function HotProducts() {
    const [hotProducts, setHotProducts] = useState([]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productsApi.getHotProducts();
                setHotProducts(response);
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
                                SẢN PHẨM BÁN CHẠY
                            </h2>
                        </div>
                    </div>

                    {hotProducts.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HotProducts;
