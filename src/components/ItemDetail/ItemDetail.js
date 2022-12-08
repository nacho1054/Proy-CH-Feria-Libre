import ItemCount from "../ItemCount/ItemCount";
import { Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.")
    }

    return (
        <>
        {
            item && item.image
            ?
            <div className="DetailContainer">
                <div className="WrapperDetail">
                    <div className="ImgContainer">
                        <div className="ImageDetail" src={item.image[0]} />
                    </div>
                    <div className="InfoContainer">
                        <div className="Title">{item.title}</div>
                        <div className="Desc">{item.description}</div>
                        <div className="Price">{item.price}</div>
                        <div className="Stock">{item.stock} unidades en stock</div>
                    </div>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button>CheckOut</Button></Link>
                    }
                </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;