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
                console.log(listSearch);
            } catch (error) {
                console.log("Failed: ", error);
            }
        };
        fetchProductList();
        // eslint-disable-next-line
    }, [listSearch]);

    return (
        <>
            <BannerTop />
            <Brand />

            <div class="section">
                <div class="container">
                    <div class="row">
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
