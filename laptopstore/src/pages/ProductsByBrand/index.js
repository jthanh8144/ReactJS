import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import brandApi from "~/api/brandApi";
import BannerTop from "~/components/BannerTop";
import Brand from "~/components/Brand";
import ProductItem from "~/components/ProductItem";

function ProductsByBrand() {
    const { id } = useParams();
    const [listProducts, setListProducts] = useState([]);
    console.log(id);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await brandApi.getProductsByBrand(id);
                setListProducts(response);
            } catch (error) {
                console.log("Failed: ", error);
            }
        };
        fetchProductList();
        // eslint-disable-next-line
    }, [id]);

    return (
        <>
            <BannerTop />
            <Brand />

            <div className="section">
                <div className="container">
                    <div className="row">
                        {listProducts.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsByBrand;
