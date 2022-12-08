import { Card } from "@mui/material";
import React from "react";
import productsAPI from "../../ProductsAPI/ProductsAPI";

const Input = () => {
    return(
        <div>
            <input 
            id="filter"
            name="filter"
            type="text"
            value={filter}
            onChange={(event)=> setFilter(event.target.value)}
            />

            <div className="cards-container">
                {productsAPI
                    .filter((producto)=> producto.title.includes(filter)).filter((producto)=> producto.category === "Inmuebles")
                    .map((product, i)=> (
                        <Card
                            id={product.id}
                            key={i}
                            name={product.title}
                            image={product.photo}
                            category={product.category}
                            price={product.price}
                            stock={product.stock}
                            descripion={product.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Input;