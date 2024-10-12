import { useState, useMemo, useRef } from "react";

const LearnUseMemo = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products,
        {
            name,
            price: +price //Number
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    const total = useMemo(() => {
        const result = products.reduce((result, product) => {
            console.log('Tinh toan lai')
            return result + product.price
        }, 0)

        return result
    }, [products])

    return <div>
        <h1>LearnUseMemo</h1>
        <input
            ref={nameRef}
            value={name}
            placeholder="Enter Name ..."
            onChange={e => setName(e.target.value)}
        />
        <input
            value={price}
            placeholder="Enter Price ..."
            onChange={e => setPrice(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <h1>Total:{total}</h1>
        <ul>
            {products.map((product, index) => (
                <li key={index}>
                    Name: {product.name} <br />
                    Price: {product.price}
                </li>
            ))}
        </ul>
    </div>;
};

export default LearnUseMemo;