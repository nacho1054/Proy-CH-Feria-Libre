import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState({});

    const addToCart = (item, qty) => {
       const current = cartList[item.id]

       if (current) {
            const currentQty = current.number
            
            if (currentQty + qty > item.stock) {
                return alert('No hay mas stock')
            }
            return setCartList({ ...cartList, [item.id]: {...current, number: currentQty + qty} })
       }

       setCartList({ ...cartList, [item.id]: {...item, number: qty} })
    }



    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = () => {

    }

    return (
        <CartContext.Provider value={{addToCart, cartList, removeList, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    const cartContext = useContext(CartContext)

    return cartContext
}

export default useCartContext
