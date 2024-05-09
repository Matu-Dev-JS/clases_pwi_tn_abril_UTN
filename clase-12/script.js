/* OPERADORES LOGICOS */

/* 
!: NOT o negacion 
Nos da el valor booleano opuesto al dato que estoy negando
*/


/* 
||: OR o O Logico
Seleccionar
Si el primer valor es un valor falsy, va a seleccionar el segundo valor
Si el primer valor es verdadero, va a seleccionar el primer valor


console.log(0 || 'pepe' || 'juan')
*/


/* 
&: ALT + 38
&&: AND o Y logico

Evalua si el primer valor es true o un falsy 
    -Si es false:
        devuelve el primer valor
    -Si es true:
        devuelve el segundo valor

    console.log(0 && 7)

    console.log(true && 7)

    var estado = true


    estado && console.log('LLego el mensaje')
    console.log(1 && 1 && 'pepe')
*/


/* 
Falsy:

false
0
''
null
undefined
NaN
-0
*/

/* 
4 && false || 'pepe'   string  'pepe'

8 == '8' || 1 === '1'   boolean true

(null === NaN) || Boolean(NaN)    false
false || Boolean(NaN)   
Boolean(NaN) 
false

Number('1') === Number(1) && Number('pepe' + 1) 

true && Number('pepe' + 1)

Number('pepe' + 1)
Number('pepe1')
NaN

*/

/*
    Number('1') === Number(1) && Number('pepe' + 1) 
    
    true && Number('pepe' + 1)

    Number('pepe' + 1)

    subproceso: 'pepe' + String(1)
    subproceso: 'pepe' + '1'
    subproceso: 'pepe1'

    Number('pepe1') => NaN
 */


/* 
Tablas de la verdad

AND:
true && true = true
true && false = false
false && true = false
false && false = false 

OR:
true || true = true
true || false = true
false || true = true
false || false = false
*/


/* Variables: 
Es un espacio reservado que almacena un dato (referencia), este debe tener un identificador el cual usaremos para obtener el dato

REGLAS:
NO USAR VARIABLES SIN DECLARAR EL TIPO DE VARIABLE
 */

/* 
PARA LOS QUE VIENEN DE OTROS LENGUAJES DE PROGRAMACION
Javascript es un lenguaje debilmente tipado y de tipado dinamico
debilmente tipado = No necesito especificar que tipo de dato es mi variable
tipado dinamico = Puede variar una variable de tipo de dato
*/
//subproceso / implicito
/* var nombre //esto es implicito */




/* 
var nombre = 'pepe' */




/* 
Declaracion: es cuando creamos nuestra variable
Sintaxis de declaracion:

<tipo variable> identificador = data
var nombre = 'pepe'
Ejemplo:
var edad => estoy declarando la variable con el identificador edad

Hoisting: Es la capacidad de una variable de ser llamada antes de su declaracion


EcmaScript (ES5) vs ES6


CONST (ES6+)
Tiene hoisting? No tiene
Se puede reasignar? No se puede
Se puede redeclarar? No se puede
Valor implicito en undefined? NO tiene valor implicito

VAR (ES5)
Tiene hoisting? Si tiene
Se puede reasignar? Se puede
Se puede redeclarar? se puede
Valor implicito en undefined? SI
el alcance de var siempre es GLOBAL

LET (ES6+)
Tiene hoisting? NO 
Se puede reasignar? Se puede
Se puede redeclarar? NO se puede redeclarar (por ahora...)
Valor implicito en undefined? SI

*/

//EJEMPLO CON VAR
// console.log(nombre_1)
// console.log(nombre_2)
// console.log(nombre_3)
// /* maria */
// var nombre_1 = 'maria'

// {
// /* pepe */
//     var nombre_2 = 'pepe'
//     {
//         /* juan */
//         var nombre_3 = 'juan'
//     }
// }



//HACERLO CON LET

/* let nombre = 'maria'
console.log(nombre)
{
    let nombre = 'pepe'
    console.log(nombre)
    {
        let nombre = 'juan'
        console.log(nombre)
    }
    console.log(nombre)
}

console.log(nombre)
 */
/* 
pepe
juan
pepe
maria
*/


const PI = 3.14

/* nombre = 'juan' */



