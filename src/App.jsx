import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);

    console.log;
    return (
        <>
            <div className="container">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default App;
