import { useState, useMemo, useRef } from 'react';

function Content() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price,// ép kiểu sang số
        }]);
        setName('');
        setPrice('');
        nameRef.current.focus();
    };
    const total = useMemo(() => {
        const t = products.reduce((result, prod) => {
            return result + prod.price;
        }, 0);

        return t;
    }, [products]);

    return (
        <>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <br/>
            <input
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br/>
            <button onClick={handleSubmit}>Add</button>
            <br/>
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </>
    );
}

export default Content;