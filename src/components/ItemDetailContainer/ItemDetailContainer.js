import Card from "../Card/Card";
import "./ItemDetailContainer.css";
import productsList from "../../ProductsAPI/ProductsAPI";
import { useState, useEffect } from "react";
import FetchItem from "../../fetchItem/FetchItem";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
    const [dato, setDato] = useState({});

    useEffect(() => {
        FetchItem(2000, productsList[0])
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);


    return(
        <ItemDetail item= {dato} />
    );

    /*
    return(
        <div className="ItemDetailContainer">
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
    */
};

export default ItemDetailContainer;