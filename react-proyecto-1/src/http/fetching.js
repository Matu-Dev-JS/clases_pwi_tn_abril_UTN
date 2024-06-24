const obtenerProductos = async () =>{
    const response = await fetch('/api/products')
    return response.json()
}

export {obtenerProductos}