import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import productsList from "../../ProductsAPI/ProductsAPI"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchItems from "../../fetchItem/FetchItem";
//import { collection, getDocs } from "firebase"; // 


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const loadItems = async () => {
            const items = await fetchItems()
            console.log(items)
            setDatos(items)
        }

        loadItems()
    }, []);



    const onAdd = (qty) => {
        alert("Seleccionaste" + qty + "items.");
    }


    return(
        <>
            <ItemList items={datos} />
        </>
    )

} 


export default ItemListContainer;