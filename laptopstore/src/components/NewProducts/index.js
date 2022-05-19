import { useEffect, useState } from "react";

import ProductItem from "~/components/ProductItem";
import productsApi from "~/api/productsApi";

function NewProducts() {
    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productsApi.getNewProducts();
                setNewProducts(response);
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
                                SẢN PHẨM MỚI VỀ
                            </h2>
                        </div>
                    </div>

                    {newProducts.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewProducts;
