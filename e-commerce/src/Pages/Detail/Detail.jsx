import React from 'react'
import { useParams } from 'react-router-dom'
import { lista_productos } from '../../data'

const Detail = () => {

    const {productId} = useParams()
    console.log(productId)

    const producto = lista_productos.find(producto => producto.id === Number(productId))
    console.log(producto)
    return (
        <div>
            <h1>{producto.titulo} <span>#{producto.id}</span></h1>
            <h2>Precio:${producto.precio}</h2>
            <button>Comprar</button>
        </div>
    )
}

export default Detail