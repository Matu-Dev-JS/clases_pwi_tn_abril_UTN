/* console.log('hola')

console.log('chau')


prompt(alert()) */


/* CALLSTACK : PILA DE LLAMADAS*/

/* 
Primero se resuelve la alerta
y luego se resuelve el prompt
*/

/* Fetch  */
/* CONSULTA HTTP */

/* GET http://miServidor.com/productos */
/* 
Responde con JSON: 
{
    productos: []
}
*/


const URL_API = 'https://jsonplaceholder.typicode.com'

/* 
async function obtenerPosts (){
    const response = await fetch(URL_API + '/posts', {
        method: 'GET',
    })
    
    console.log(response)
    console.log('resuelto')
}

obtenerPosts()
*/


const obtenerUsuarios = async () => {

    const response = await fetch(URL_API + '/users', {
        method: 'GET',
    })

    const data = await response.json()
    console.log(data)


}



obtenerUsuarios()




/* 
Callstack:

console.log(pending) 

*/

/* 
Si fetchean a esta direccion: https://jsonplaceholder.typicode.com/users/1
Obtendran el detalle de un usuario
El usuario tendra este formato
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

Mostrar en HTML dentro de un div

h2: {user.name}
span: phone: {user.phone}
span: email: {user.email}

(OPCIONAL)
Si no se cargo el fetch debera mostrar un h2 que diga 'cargando...'


Incialmente esta cargando

Cuando se resuelve dejamos de mostrar el cargando
*/

/* const buscarUserPorId = async (id) =>{
    const response = await fetch(URL_API + '/users/' + id, {
        method: 'GET'
    })
    const user = await response.json()
    return user
}





const obtenerUsuarioPorId = async (id) =>{
    const userInfoHTML = document.getElementById('user-info')
    userInfoHTML.innerHTML = `<h2>Cargando...</h2>`
    const user = await buscarUserPorId(id)
    renderizarUsuario(user)

}

const renderizarUsuario = ( user ) => {
    const userInfoHTML = document.getElementById('user-info')
       userInfoHTML.innerHTML = `<h2>Cargando...</h2>`
    userInfoHTML.innerHTML = `
    <h2>Nombre: ${user.name}</h2>
    <span>Email: ${user.email}</span>
    <br>
    <span>Phone: ${user.phone}</span>
    `
}
 */







/* 
const buscarUserPorId = async (id) =>{
    const response = await fetch(URL_API + '/users/' + id, {
        method: 'GET'
    })
    const user = await response.json()
    return user
}

const renderizarUsuario = async ( valorBusqueda, buscarUsuarioCallback ) => {
    const userInfoHTML = document.getElementById('user-info')
    userInfoHTML.innerHTML = `<h2>Cargando...</h2>`

    const user = await buscarUsuarioCallback(valorBusqueda)

    userInfoHTML.innerHTML = `
    <h2 class='titulo'>Nombre: ${user.name}</h2>
    <span>Email: ${user.email}</span>
    <br>
    <span>Phone: ${user.phone}</span>
    `
}

renderizarUsuario(1, buscarUserPorId)
 */
