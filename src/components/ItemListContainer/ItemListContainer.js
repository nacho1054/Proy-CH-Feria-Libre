import "./ItemListContainer.css";
import Card from "../Card/Card";
import productsList from "../../ProductsAPI/ProductsAPI"


const ItemListContainer = () => {
    return(
        <div className="ItemListContainer">
            {productsList.map((product, i)=> (
                <Card
                title = {product.title}
                photo = {product.photo}
                description = {product.description}
                price = {product.price}
                category = {product.category}
            />
            ))}
        </div>
    )
}

export default ItemListContainer;