/* function esVocal(letra){

    if(letra === 'a'||letra === 'e'||letra === 'i'||letra === 'o'||letra === 'u'){
        return true
    }
    else{
        return false
    }
}
 */
/* function esVocal(letra){
    return ['a', 'e', 'i', 'o', 'u'].includes(letra)
}
 */
/* const vocales = ['a', 'e', 'i', 'o', 'u']
console.log(vocales.includes('a'))
 */




const nombres = ['pepe', 'juan', 'maria', 'ezquiel']

/* for(let nombre of nombres){
    console.log(nombre)
} */
/* Por cada nombre quiero que aparezca un mensaje por consola diciendo 'hola {nombre}' */
/* console.log('Hola ' + nombres[0])
console.log('Hola ' + nombres[1])
console.log('Hola ' + nombres[2])
console.log('Hola ' + nombres[3])
 */
/* Quiero un contador del 0 al 3 */

/* for(let index = 0; index < nombres.length; index = index + 1){
    let nombre = nombres[index]

    console.log('Hola ' + nombre)
}

 */
const carrito = [
    {
        nombre: 'tv samsung',
        precio: 300,
        cantidad: 3
    },
    {
        nombre: 'patineta',
        precio: 30,
        cantidad: 1
    },
]

/* Por cada elemento de mi carrito mostrar por consola

Has comprado el producto {producto.nombre} x {producto.cantidad} a un precio unitario de ${producto.precio}
*/


for(let index = 0; index < carrito.length; index = index + 1){
    const producto = carrito[index] 
    
    console.log(producto)

    console.log('Has comprado el producto ' + producto.nombre + ' x ' + producto.cantidad + ' a un precio unitario de ' + producto.precio)
}


/* const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodrigez',
        edad: 35
    },
]
 */

/* 
Por cada personaje mostrar el siguente mensaje por consola
'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} años'

Opcional:
Al finalizar el recorrido mostar por consola 'total de edades: {sumatoria de las edades de los usuarios}'

*/


/* 
const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]
let sumatoriaEdad = 0
for(let index = 0; index < personajes.length; index = index + 1){
    const personaje = personajes[index] 
    console.log('Hola mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años')
    sumatoriaEdad = sumatoriaEdad + personaje.edad
}


console.log('La sumatoria de edades es ' + sumatoriaEdad) */
/* const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]

for(let index = 0; index < personajes.length; index = index + 1){
    console.log(personajes[index])
}


for(const personaje of personajes){
    console.log(personaje)
}
 */
/* Ir al ejercicio anterior y hacerlo con for of */


/* 
const datos = {
    'nombre': 'pepe',
    'apellido': 'suarez',
    'dni': '54543565'
}

let resultado = ''

for(let propiedad in datos){
    resultado = resultado + '\n<span>' + propiedad + ':</span> ' + '<span>' + datos[propiedad] + '</span>' 

}

console.log(resultado) 
*/


/* METODOS AVANZADOS de arrays */


const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]

/* 

find es un metodo avanzado que recibe una callback, la callback recibe a el elemento
Si el valor de retorno de callback es thurty entonces el elemento se retornara y se cortara el find
Si el valor de retorno de callback es falsy entonces se ignorara (pasaremos al siguiente elemento)
FIND puede retornar el elemento o undefined (Si no encuentra ningun elemento)

*/

const pepe = personajes.find(function(personaje){
    return personaje.nombre === 'pepe'
})


for(const personaje of personajes){
    console.log( personaje)
}

personajes.forEach(function (personaje){
    console.log(personaje)
})

/* 
le decimos metodo avanzado a un metodo que recibe una callback

Filter es un metodo avanzado que recibe una callback, la callback recibe a el elemento
Si el valor de retorno de callback es thurty entonces el elemento se agragara al array resultante
Si el valor de retorno de callback es falsy entonces se ignorara (pasaremos al siguiente elemento)
SIEMPRE FILTER RETORNARA UN ARRAY 
SI el array es vacio significa que nadie paso el filtro


*/

const personajesMayoresDeEdad = personajes.filter(function(personaje){
    return personaje.edad >= 18
})


const personajesMayores = []
for(const personaje of personajes){
    if(personaje.edad >= 18){
        personajesMayores.push(personaje)
    }
}
console.log(personajesMayores)


console.log(personajesMayoresDeEdad)

const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tV LG',
        marca: 'LG',
        id: 2,  
        precio: 2900
    },  
    {
        nombre: 'tv noblex',
        marca: 'noblex',   
        id: 3,  
        precio: 2300
    },
]

const productosPrecio = productos.filter(function(producto){
    return (producto.precio < 2950)
})
console.log(productosPrecio)
const productosMarca = productos.filter(function(producto){
    return (producto.marca.toLowerCase() === "noblEx".toLowerCase())
})
console.log(productosMarca)
const productosIncluyenTv = productos.filter(function(producto){
    return (producto.nombre.toLowerCase().includes("Tv".toLowerCase()) )
})
/* 
-Traer los productos que sean de precio inferior a 2950
-Traer los productos de la marca noblex
-Traer los productos que en su nombre incluyan el string 'tv'
*/

/* 
const productos2 = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'tv lg',
        marca: 'lg',
        id: 2,
        precio: 2900
    },
    {
        nombre: 'tv noblex',
        marca: 'noblex',
        id: 3,
        precio: 1100
    }
]
const samsung = productos2.find(function(producto){
    return producto.marca === 'samsung'
})
console.log(samsung) */


/* MAP
Nos sirve para crear un array en base a otro array
Va a recorrer el array y por cada elemento la callback va a ejecutarse
El valor de retorno de callback es el valor del nuevo elemento que se agregara al array resultante

RETORNA SIEMPRE UN ARRAY
*/


const objetos = [
    {
        nombre: 'vaso'
    },
    {
        nombre: 'tornillo'
    },
    {
        nombre: 'computadora'
    }
]

const nombresObjetos = ['vaso', 'tornillo', 'computadora']

const arrayInverso = nombresObjetos.map(function(nombre){
    return {nombre: nombre}
})

const listaDeObjetosHTML = objetos.map(function(objeto){
    return '<div>'+ objeto.nombre + '</div>'
})

const resultadoX = objetos.map(function(objeto){
    return 'pepe'
})
console.log(arrayInverso)
/* 
[
    '<div>vaso</div>',
    '<div>tornillo</div>',
    '<div>computadora</div>',
]
*/