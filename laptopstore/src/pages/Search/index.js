import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import productsApi from "~/api/productsApi";
import BannerTop from "~/components/BannerTop";
import Brand from "~/components/Brand";
import ProductItem from "~/components/ProductItem";

function Search() {
    const { name } = useParams();
    const [listSearch, setListSearch] = useState([]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productsApi.search({ name: name });
                setListSearch(response);
            } catch (error) {
                console.log("Failed: ", error);
            }
        };
        fetchProductList();
        // eslint-disable-next-line
    }, [name]);

    return (
        <>
            <BannerTop />
            <Brand />

            <div className="section">
                <div className="container">
                    <div className="row">
                        {listSearch.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;
