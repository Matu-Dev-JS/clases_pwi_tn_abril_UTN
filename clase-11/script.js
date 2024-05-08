/* TIPOS DE DATOS */

/* Datos objeto: Proximamente */

/* Datos primitivos:

Number => numeros como los conocemos nosotros
Ej:
8
0
-2
3.14 (no es decimal, es flotante (float))
NaN
Infinity

String => textos, deben ir entre comillas ('', "", ``)
Ej:
'hola mundo'
'pepe'
'8'
"pepe"
`NaN`


Boolean => valores true o false
ej:
true
false

Null => ausencia o nulidad de un dato
ej:
null

Undefined => no hay un dato definido
ej:
undefined
*/

/* 
Soy un mensajero que envia una carta, llego a la casa, me atienden y me dicen que NO quieren recibir la carta

estado_de_respuesta: false



Soy un mensajero que envia una carta, llego a la casa, me atienden y me dicen que quieren recibir la carta

estado_de_respuesta: true



Soy un mensajero que envia una carta, me extravio en el viaje

estado_de_respuesta: undefined



Soy un mensajero que envia una carta, llego a la casa, no me atienden

estado_de_respuesta: null


*/


/* 
estado: undefined  | mensajero sale de mensajeria
mensajero llega | estado => null
*/

/* Constructores */
/* 
String(dato) transforma mi dato a string 
Number(dato) transforma mi dato a un number
Boolean(datp) transforma a su formato booleano
*/

/* Operadores aritmeticos */

/* 
SIEMPRE DEVUELVE STRING
+: Concatenacion
La concatenacion ocurre cuando uno de los valores es de tipo de dato STRING
'hola' + 1
proceso interno: 'hola' + String(1)
proceso interno: 'hola' + '1' = 'hola1'

*/

/* 
SIEMPRE DEVUELVEN NUMEROS
+ : suma (no debe haber un string)
1 + true

1 + true
proceso interno: 9 + Number(true)
proceso interno: 9 + 1 = 10

- : resta
* : multiplicacion
/ : division
% : resto de la division o modulo
*/


/* Falsy o Truthy */

/* 
Si un dato al pasarlo por Boolean(dato) me da false, es un valor FALSY si me da true, es un valor Truthy

FALSY:
0
-0
''
false
null
undefined
NaN
*/

/* 
Funciones nativas

typeof() tipo de dato de un dato
isNaN() devuelve un booleano dependiendo de si es un NaN o no
*/


/* Comparadores */

/* 
Siempre devuelven booleanos

== : es igual
=== : estricta igualdad (compara igualdad en valor y en tipo de dato)
!= : diferencia
!== : estricta diferencia
>
<
>=
<=
*/