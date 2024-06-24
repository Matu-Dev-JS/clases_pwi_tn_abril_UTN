import React from "react"
import { Item } from "../CarritoItem/CarritoItem"

export const Carrito = () => {
    /* Llamada al carrito de la API */
    return (
        <section>
            <h1>Este es el carrito</h1>
            <div>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </section>
        
    )
}




/* export {Carrito} */