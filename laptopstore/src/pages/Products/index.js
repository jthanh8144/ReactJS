import { useState, useEffect } from "react";

import productsApi from "~/api/productsApi";
import BannerTop from "~/components/BannerTop";
import Brand from "~/components/Brand";
import ProductItem from "~/components/ProductItem";

function Products() {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productsApi.getAll();
                setListProduct(response);
            } catch (error) {
                console.log("Failed: ", error);
            }
        };
        fetchProductList();
    }, []);
    return (
        <>
            <BannerTop />
            <Brand />

            <div className="section">
                <div className="container">
                    <div className="row">
                        {listProduct.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
