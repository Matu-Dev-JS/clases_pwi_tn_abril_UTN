/*
 JS es un lenguaje basado en prototipos
  */

/* 
Prototipo de string:
metodos de string
la propiedad length
*/


/* 
Cualquier cosa que se pueda enlistar
arreglos/array, lista/list, coleccion/collection, matriz
*/
/* Los arrays se usan para listar elementos */

/* let notaTrimestre1 = 9
let notaTrimestre2 = 10
let notaTrimestre3 = 6
        //indice/index:0, 1, 2
const notasTrimestre = [9, 10, 6] */

/* notasTrimestre[1] = 4

console.log('El segundo trimestre te sacaste un: '.trim() + notasTrimestre[1] )

console.log(notasTrimestre.length) */
/* 
const notas = {
    0: 9,
    1: 10,
    2: 6,
    length: 3
}
 */



const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]

const elementosEliminados = nombres.splice(nombres.indexOf('maria'), 2, 'carlos', 'jose')
console.log(elementosEliminados)

/* quiero que alex deje de ser alex y sea alexis */

nombres[5] = 'alexis' 
//mala practica
/* delete nombres[5] */
/* nombres[7] = 'ezequiel' */

//.pop() => elimina el ultimo elemento y lo retornan
//.shift() => elimina el primer elemento y lo retornan
/* nombres.pop() */
/* let eliminado = nombres.shift() */


/* push => agrega al final */
/* unshift => agregar al inicio */
/* 
nombres.push('leonel') */

/* quiero que maria deje de ser maria y sea marianela */

//indexOf(searchString)/lastIndexOf() => busca el elemento en el array y si lo encuentra devuelve la posicion, sino devuelve -1  (SOLAMENTE LO USAN EN ARRAYS DE STRING)
/* let posicionMaria = nombres.indexOf('maria')
nombres[posicionMaria] = 'marianela' */

//splice(posicion, cuantosElementosElimino?, nuevo elemento)

/* let posicionDeValentina = nombres.indexOf('valentina')
nombres.splice(posicionDeValentina, 1) */

//eliminar a juan y a maria


/* function sumar (a, b){
    return a + b
} */

//ERROR: dry
//KISS = keep it simple

/* Mejorar este codigo con una funcion llamada eliminarNombre que recibira el nombre a eliminar */

/* nombres.splice(nombres.indexOf('juan'),1)
nombres.splice(nombres.indexOf('maria'),1) */

console.log(nombres)

function eliminarNombre(a, b){
    a.splice(a.indexOf(b), 1)
}


/*  */
function eliminarNombre(listaDeNombres, nombreAEliminar){

    listaDeNombres.splice(listaDeNombres.indexOf(nombreAEliminar), 1)
}


const carrito = [
    {
        nombre: 'tv samsung',
        precio: 300000
    },
    {
        nombre: 'tv samsung',
        precio: 300000
    },
    {
        nombre: 'tv samsung',
        precio: 300000
    }
]

//callbacks

//JSON = javascript object notation