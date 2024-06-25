import React from 'react'
import {PI, doSomething, Titulos} from './funciones.jsx'
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

/* Esto es un error, no se puede hacer componentes que retornen multiples elementos, solo pueden retornar un elemento */
/* const ContactPage = () => {
    return (
        <h1>Formulario de contacto</h1>
        <ContactForm/>
    )
} */

/* 
Queremos que h1 y ContactForm tengan un padre contenedor en comun, por ejemplo un <main></main> o un <div></div>? 
*/

/* SI la respuesta es SI */
/* const ContactPage = () => {
    return (
        <main>
            <h1>Formulario de contacto</h1>
            <ContactForm/>
        </main>
    )
} */


/* SI la respuesta es NO */

const ContactPage = () => {
    return (
        <>
            <h1>Formulario de contacto</h1>
            <ContactForm/>
        </>
    )
}


const Pages = () => {
    return (

        <main>
            <ContactPage/>
        </main>
    )
}

/* 
html:
<main>
    <h1></h1>
    <form></form>

</main>
*/

/* El html resultante de Pages es:
<section>
    <h1></h1>
    <form></form>
</section>

*/




const ListItem = () => {
    return (
        <li>
            {/* Pone el codigo que quieras */}
            <h2></h2>
            <ContactPage/>
        </li>

    )
}

