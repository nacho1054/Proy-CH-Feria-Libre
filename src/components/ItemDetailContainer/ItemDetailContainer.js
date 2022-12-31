import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { fetchSingleItem } from "../../fetchItem/FetchItem";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const { idItem } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        const loadItem = async () => {
            const item = await fetchSingleItem(idItem)
            setItem(item)
        }

        loadItem()
    }, [])

    return(
        <ItemDetail item={item} />
    );
};

export default ItemDetailContainer;