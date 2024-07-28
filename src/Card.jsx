import "./Card.css";

function Card({ product }) {
    return (
        <div className="card-item">
            <div className="img-container">
                <img src={product.image} alt="" />
            </div>

            <p className="title-tag">{product.title}</p>

            <div>
                <p className="shipment-tag">Free shipping</p>
                <p className="price-tag">${product.price}</p>
                <div className="card-btns">
                    <button className="add-btn">Add Cart</button>
                    <button className="buy-btn">Buy</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
