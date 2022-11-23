import "./Card.css";

const Card = ({title, photo, description, price, category}) => {
    return(
        <div className="card">
            <img alt={`product/${title}`} src={photo} className="product_image" />
            <div className="description-container">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{category}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Card;