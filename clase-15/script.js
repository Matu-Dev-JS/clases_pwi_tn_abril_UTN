/* OBJETOS */

let edadUsuario = 90
let nombreUsuario = 'pepe'
let dineroUsuario = 7000


let celular = {
    nombre: 'Moto g70',
    precio: 500
}
/* Modelo key value */
let usuario = {
    edad: 90,
    nombre: 'pepe',
    dinero: 7000,
    celular: {
        nombre: 'Moto g70',
        precio: 500
    }
}


console.log(usuario.celular.precio)

/* 
Crear un objeto llamado producto que tenga 
precio, nombre, descripcion y marca

vamos a crear un objeto llamado persona, que tenga nombre, edad y mejorAmigo
mejorAmigo debe ser otro objeto que solo tenga nombre y edad
 */

let persona = {
    nombre: 'Alejandro',
    edad: 20,
    mejorAmigo: {
        nombre: 'Firulais',
        edad: 2,
    }
}

const auto = {nombre: 'Honda civic Ex', precio: 6000}


auto.precio = 7000
auto.anio = 2001

/* auto = {nombre: 'Honda civic Ex', precio: 6000} */

console.log(auto)

/* 
holamellamomati

camelCase = holaMeLlamoMati 
snake_case  = hola_me_llamo_mati

Español las funciones las hago con snake_case y las variables en camelCase
Ingles las funciones con camelCase y las variables con snake_case


solicitarYGuardar() // solicitar_y_guardar()
requestAndSave() 
*/
/* 
function requestAndSave(){

}
 */

/* 

cambiar el nombre del mejorAmigo a 'pepe'
y crear la propiedad nroCelular a persona
*/

const persona2 = {
    nombre: 'pepe',
    'nombre completo': 'pepe suarez',
    mejorAmigo: {
        nombre: 'juan'
    }
}

//Crear la propiedad dni
persona2.dni = '12321312321'

persona2.nroCelular = 549112243421
persona2.mejorAmigo.nombre = 'pepe'


/* console.log(persona2.nombre completo) *///esto da error
console.log(persona2['nombre completo']) //caso correcto



