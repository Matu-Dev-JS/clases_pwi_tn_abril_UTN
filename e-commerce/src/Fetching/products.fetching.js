export const obtenerProductos = async () => {
    const response = await fetch(
        '/data.json', 
        {
            method: "GET"
        }
    )
    /* console.log('Response de fetch productos', response) */
    return  response.json()
    /* console.log('Data productos', data) */
}