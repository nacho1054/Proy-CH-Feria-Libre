import React from "react";
import Item from "../Item/Item";


const  ItemList = ({ items }) => {
    return(
        <div>
            {
                items.map(item => <Item key={item.id} title={item.title} photo={item.photo} />)
            }
        </div>
    )
}

export default ItemList;