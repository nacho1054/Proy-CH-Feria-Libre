import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <div className="ProductAmountContainer">
            <Button onClick={increment}>+</Button>
            <div className="ProductAmount">{count} </div>
            <Button onClick={decrement}>-</Button>
            {
                stock && count
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="contained" disabled>Add to Cart</Button>
            }
            
        </div>
    );
}

export default ItemCount;