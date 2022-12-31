import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import useCartContext from '../CartContext/CartContext';
import classes from './ItemCount.module.css'

const ItemCount = ({ item }) => {
    const [count, setCount] = useState(1);
    const { addToCart } = useCartContext()

    const increment = () => {
        if (count < item.stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.counter}>
                <Button onClick={decrement}>-</Button>
                <div className="ProductAmount">{count} </div>
                <Button onClick={increment} size="small">+</Button>
            </div>
            
            
            <Button variant="contained" color="primary" disabled={!count} onClick={() => addToCart(item, count)}>Add to Cart</Button>
               
            
        </div>
    );
}

export default ItemCount;