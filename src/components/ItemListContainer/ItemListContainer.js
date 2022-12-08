import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import productsList from "../../ProductsAPI/ProductsAPI"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchItem from "../../fetchItem/FetchItem";


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    useEffect(() => {
        FetchItem(2000, productsList.filter(items => {
            if (idCategory === undefined) return items;
            return items.categoryId === idCategory
        }))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, [datos]);

    const onAdd = (qty) => {
        alert("Seleccionaste" + qty + "items.");
    }


    return(
        <>
            <ItemList items={datos} />
        </>
    )



/*
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

            
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
*/
} 


export default ItemListContainer;