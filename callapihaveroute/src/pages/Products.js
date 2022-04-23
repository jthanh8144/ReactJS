import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import productsApi from '../api/productsApi';

function Products() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productsApi.getAll();
                setProductList(response);
            } catch (error) {
                console.log('Failed: ', error);
            }
        }
        fetchProductList();
    }, []);

    return (
        <main>
            <h2>Products</h2>
            <div style={{ display: 'flex' }}>
                <nav style={{ padding: '1rem' }}>
                    {productList.map(product => (
                        <Link 
                            to={product.product_code.toString()}
                            key={product.id}
                            style={{
                                display: 'block',
                                margin: '1rem'
                            }}
                        >
                            {product.product_code}
                        </Link>
                    ))}
                </nav>
                <Outlet />
            </div>
        </main>
    );
}

export default Products;
