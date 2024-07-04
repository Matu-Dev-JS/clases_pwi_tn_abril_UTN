function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password) {
    return (  Boolean(password) && password.length > 6 && password != password.toLowerCase() )
}




function obtenerDato (data){

    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}


const DATOS = Object.freeze({
    EMAIL: {
        mensaje: "Bienvenido, por favor ingrese su email: ",
        error: "Error, por favor ingrese un email valido: ",
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje: "Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ",
        error: "Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ", 
        validacion: validarPassword
    }
})


const ACCIONES_DISPONIBLES = {
    'CANCELAR':{
        mensaje: 'has cancelado la operacion',

    },
    'LOGEAR':{
        mensaje: 'Has empezado el logeo',
        accion: login
    }
}

const PASSWORD_BACKEND = 'asdsasad'
const PI = 3.14





function login() {
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
}



/* function renderizarHistorial (historialRecibido){
    
    let listaStrHistorial = ''
    for (const item of historialRecibido){

        listaStrHistorial = listaStrHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
        `
        }
    return listaStrHistorial
    
} */
/* function renderizarHistorial( historial ){
    const arrayDeElementos =  historial.map (function(elemento){
        return 'accion: ' + elemento.accion + '\n' + 'operacion: ' + elemento.operacion + '\n' + 'numeros: ' + elemento.a + ', ' + elemento.b + '\n' + 'resultado: ' + elemento.resultado + '\n'}
    )
    return arrayDeElementos.join('\n')
} */

/* 
Crear una funcion llamada
elementoHistorial =  {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    }
agregarAlHistorial(elementoHistorial)
Agregar el objeto al array global historial



obtenerHistorial() que va a retornar el historial global
*/


/* agregarAlHistorial({
    accion: 'CALCULAR'
}) */

/* console.log([1, 2, 3].join('\n')) */

/* 
const renderizarHistorial = historial.map (function(historial){
    return 'accion: ' + historial.accion + '\n' + 'operacion: ' + historial.operacion + '\n' + 'numeros: ' + historial.a + ', ' + historial.b + '\n' + 'resultado: ' + historial.resultado + '\n'}
) */


/* 
let emailRegistrado = login()
 */
/* console.log(emailRegistrado) */





function renderizarHistorial (historialRecibido){

    let listaStrHistorial = ''
    for (const item of historialRecibido){

        listaStrHistorial = listaStrHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
        `
    }
    return listaStrHistorial
    
} 



function agregarAlHistorial(elementoHistorial){
    const historial = obtenerHistorial() //historial previo o []
    historial.push(elementoHistorial)
    const historialStr = JSON.stringify(historial)
    localStorage.setItem('historial', historialStr)
}

function obtenerHistorial() {
    let historialString = localStorage.getItem('historial');
    return JSON.parse(historialString)
}


/* Verificando que un usuario que entra por primera vez tenga un historial */
if(obtenerHistorial() === null){
    /* Si no hay historial, se guarde el historial como array vacio */
    localStorage.setItem('historial', JSON.stringify([]))
}

/* 
agregarAlHistorial( {
    accion: 'CALCULAR',
    operacion: '*',
    a: 1,
    b: 2,
    resultado: 2
})
 */

/* console.log(obtenerHistorial())

 */

/* 
console.log(renderizarHistorial(historial)) */

/* let datoImportante = 'el mate se toma amargo' */
/* 
localStorage.setItem('array', {}) */

/* localStorage.removeItem('array') */

/* localStorage.clear() */

/* JSON:  JAVASCRIPT OBJECT NOTATION
JSON es la variable global que usamos para acceder a los metodos .parse(), .stringify()

Las reglas de JSON


Si quiero escribir un array uso []
Si quiero escribir un objeto uso {}
Si quiero escribir un string uso "" (no valen '' o ``)
Si quiero escribir null undefined o numeros los sigo usando como antes
SI ESCRIBEN OBJETOS O ARRAYS la ultima coma no va
Caso incorrecto
{
    "nombre": "pepe",
    "edad": 70, //esta coma da error
}
Caso correcto:
{
    "nombre": "pepe",
    "edad": 70
}
*/

//Este string es transformable a objeto de JS
/* let string = '{"username": "pepe"}' *///este string esta escrito en formato JSON


//Transforma al formato objeto de JS
/* let stringComoObjeto = JSON.parse(string)
console.log(stringComoObjeto) */

//Transforma a formato text/string
/* JSON.stringify() */

/* let objetoEnString = JSON.stringify(objeto) */

/* console.log(objetoEnString) *///'{"nombre": "pepe", "edad": 70}


/* 
Transformar el array historial a string con notacion JSON y mostrarlo por alert


AUTOCORRECCION:
La alerta no debe mostrar [object Object]
*/

/* const objetoEnString = JSON.stringify(historial) */

/* 
En la funcion de agregar al historial vamos a hacer el push que veniamos haciendo
pero ademas vamos a guardar el historial en el localStorage con la key 'historial'
*/


/* 
La funcion obtener historial debe tomar el historial del localStorage y retornalo como ARRAY 
*/

console.log(renderizarHistorial(obtenerHistorial()))