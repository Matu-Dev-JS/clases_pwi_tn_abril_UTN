import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components'
import { Link } from 'react-router-dom'

import { BiAngry, BiBaseball } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";
import { obtenerProductos } from '../../Fetching/products.fetching';



const Home = () => {

    const [listaProductos, setListaProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchString, setSearchString] = useState('')
    const [isWritting, setIsWritting] = useState(false)
    
    useEffect(
        () => {
            /* Aca va la funcionalidad que queremos controlar */
            setTimeout(
                () => {
                    obtenerProductos()
                    .then(   /* Este then se ejecuta cuando la promesa se resuelva */
                        (productos)=> {
                            console.log('productos', productos)
                            if(searchString){
                                const nuevaListaProductos = productos.filter(
                                    producto => 
                                        producto.titulo.toLowerCase().includes(searchString.toLowerCase())
                                )
                                setListaProductos(nuevaListaProductos)
                            }
                            else{
                                setListaProductos(productos)
                            }
                            setIsLoading(false)
                        }
                    )
                },
                500
            )
            
        },
        [searchString]
    )
    
   

    const handleChangeValue = (e) =>{
        console.log(e.target.value)
        setSearchString(e.target.value)
    }
    const handleChangeFocus = () => {
        setIsWritting(true)
    }
    const handleAbortFocus = () => {
        setIsWritting(false)
    }

    
    return (
        <div>
            <Navbar/>
            <img src='/auto.avif' alt="" />
            <h1>Lista de productos</h1>
            {isWritting && <h2>Escribiendo...</h2>}
            <input 
            placeholder='buscar producto' 
            onChange={handleChangeValue} 
            value={searchString} 
            onFocus={handleChangeFocus}
            onBlur={handleAbortFocus}
            />
            {searchString != '' ? <h2>Escribiendo</h2> : <h2>Esperando cambios</h2>}
            <div>
                {
                    isLoading 
                    ? <h2>Cargando</h2>
                    : listaProductos.map(producto => {
                        return (
                            <div key={producto.id}>
                                <h2>{producto.titulo}</h2>
                                <span>Precio: ${producto.precio}</span>
                                <Link to={'/detalle/' + producto.id}>Ver detalle <BiAngry /></Link>
                                <hr />
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Home