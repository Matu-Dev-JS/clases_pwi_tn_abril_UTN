import React from 'react'
import {PI, doSomething, Titulos} from './funciones'
import { Carrito } from './Components/Carrito/Carrito'

console.log(PI)
/* doSomething() */

const App = () => {
    return (
        <div>
            <Titulos/>
            <h1>Hola desde react</h1>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <Carrito/>
        </div>
    )
}

const ProductCard = () => {
    return (
        <> {/* Esto es un fragmento, sirven para evitar crear elementos padres */}
            <div>
                <h3>Titulo producto</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nobis dolor eligendi fugiat suscipit officia. Aspernatur blanditiis, temporibus a beatae consectetur nostrum, autem vero sapiente voluptatibus rem eos dolores fugit!</p>
                <span>Precio: $value</span>
                <button>Comprar</button>
            </div>
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </>

    )
}




export default App


/* 
Crear un componente llamado Carrito

El componente carrito tendra un h1 que dira 'Carrito de compras'

Luego crear otro componente llamado Item
El componente Item tendra la sig estructura
<div>
    <h2>nombre producto</h2>
    <span>Cantidad: x</span>
    <button>Eliminar</button>
</div>

Se debe renderizar 3 items en el carrito

Mostrar el Carrito en el componente App

*/