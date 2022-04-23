import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsApi from "../api/productsApi";

function Product() {
    const { productCode } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productsApi.get(productCode);
                setProduct(response);
            } catch (error) {
                navigate('..');
                // console.log(error);
            }
        }
        fetchProductList();
    }, [product]);

    return (
        <div>
            <h2
                style={{
                    padding: '1rem'
                }}
            >
                Invoice #{product?.id} for {product?.product_code}
            </h2>
            <h3>
                Price {product?.price}
            </h3>
            <img src={product?.img}/>
        </div>
    );
}

export default Product;
