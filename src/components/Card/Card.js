import "./Card.css";
import { Link } from 'react-router-dom';

const Card = ({title, photo, description, price, category}) => {
    return(
        <div className="card">
            <Link to={`product/${title}`} >
                <img alt={`product/${title}`} src={photo} className="product_image" />
                <div className="description-container">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{category}</p>
                    <p>{price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;