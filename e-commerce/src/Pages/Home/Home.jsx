import React from 'react'
import { Navbar } from '../../Components'
import { Link } from 'react-router-dom'
import { lista_productos } from '../../data'
import { BiAngry, BiBaseball } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";
const Home = () => {

    
    return (
        <div>
            <Navbar/>
            <h1>Lista de productos</h1>
            <div>
                {lista_productos.map(producto => {
                    return (
                        <div key={producto.id}>
                            <h2>{producto.titulo}</h2>
                            <span>Precio: ${producto.precio}</span>
                            <Link to={'/detalle/' + producto.id}>Ver detalle <BiAngry /></Link>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home