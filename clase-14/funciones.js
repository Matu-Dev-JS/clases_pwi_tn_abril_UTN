/* FUNCIONES */


/* Declaro mi funcion */
/* function sumar2Mas2(){
    console.log('El resultado de la suma es ' + (2 + 2))
} */


//Invocacion o llamada de la funcion
/* sumar2Mas2()
sumar2Mas2()
sumar2Mas2() */

/* 
function sumar(a, b){
    a = a + 1
    console.log('el resultado de la suma es ' + (a + b))
}


sumar(9, 8)
sumar(1, 1) 
*/


/* 
f(x) = 2x + 1
f(x = 2) = 2 . 2 + 1
f(x = 9) = 2 . 9 + 1
*/

/* function saludar(nombre){
    alert("Hola " + nombre)
}


saludar('pepe') */

/* 
function restar(a, b){
    return a - b
}

let numero1 = 10
let numero2 = 5
let resultado = restar(numero1, numero2)

console.log(resultado) */
/* 
function sumar(a, b){
    return (a + b)
}


console.log('el resultado de mi suma es: ' + sumar(9, 8))
alert('el resultado de mi suma es: ' + sumar(9, 8))
document.write(sumar(8, 8)) */


/* 
calcularIva(precio) => el valor del iva
calcularIva(100) => 21
RESULTADO:
function calcularIva(precio) {
    return precio * 0.21;
}
*/

/* 
calcularMinutos(horas) => cantidad de minutos
calcularMinutos(1) => 60

RESULTADO:
function calcularMinutos(horas){
    return horas *  60
}
*/

/* 
obtenerNumero()
Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero
Sino debera volver a solicitarlo
Cuando termine de validar se retornara el numero
*/


/* 
function obtenerNumero(){
    let num = prompt('ingrese un numero')
    while(!num || isNaN(num)){
        num = prompt('Error: vuelve a ingresar el numero')
    }
    num = Number(num)
    return num
} */

/* let numero_x = obtenerNumero()

alert(numero_x) */

/* 
String:

(property) string.length = longitud del string (toma espacios)
Ej: 'pepe'.length = 4

(method) string.toLowerCase() = pasa a minuscula
(method) string.toUpperCase() = pasa a mayuscula
(method) string.trim() = eliminar espacios
(method) string.includes(string_buscado) = verificar si el string buscado esta dentro del string (Retorna un boolean)
(method) string.replaceAll(string_a_replazar, valor_nuevo)
(method) string.repeat(string_a_repetir)
*/
let contra = 'pepe123'
contra = contra.toUpperCase()
console.log(contra)