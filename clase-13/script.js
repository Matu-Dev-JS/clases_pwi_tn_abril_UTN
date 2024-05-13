/*
Anotaciones:
Si una funcion no retorna nada, por defecto retorna undefined
Funciones nativas:

-isNaN(dato) es una funcion que recibe un dato y te devuelve un boolean que indica si es o no un NaN
-alert(string) es una funcion que recibe un string y lo muestra en un pop up en la pagina, no tiene retorno
-typeof() nos dice que tipo de dato es
-prompt() es una funcion que recibe un mensaje y devuelve el valor ingresado por el usuario (tipo string) o null en caso de que el usuario de al boton cancelar
-parseInt() dado un dato lo transforma a su valor numerico entero (trunca el decimal o corta) y si no se puede transformar devuelve NaN
-parseFloat() dado un dato lo transforma a su valor numerico (si es flotante tambien) y si no se puede transformar devuelve NaN
*/
/* 
alert('hola desde una alerta') */
/*let variable = alert('pepe')//devuelve undefined
alert('El valor de retorno de alert es: ' + variable) */

/* let dato = prompt('dime tu edad')
dato = Number(dato)
alert(dato) */
/* 
alert('el valor ingresado es: ' + dato) */


/* IF */

/* let edad = prompt('ingrese su edad') */


/* if(edad >= 18){
    
    alert("Podes pasar")
}
 */

/* 
sintaxis:

if(condicion){
    bloque de codigo
}
else{

}
*/


/* El dato no debe ser null O '' */
/*
CASO SIN MEJORAR
let dato = prompt('Dime algo')

if(dato === null || dato === ''){
    alert('ERROR: DATO NO VALIDO')
}
else{
    alert('Todo esta bien')
}
 */

/* 
//CASO MEJORADO
let dato = prompt('dime algo')

if(dato){
    alert('Todo esta bien')
}
else{
    alert('ERROR: DATO NO VALIDO')
} */


/* 
if(!dato){
    alert('ERROR: DATO NO VALIDO')
}
else{
    alert('Todo esta bien')
} */


/* 
Si el puntaje da entre 0 y 1000 diremos 'principiante'
Si el puntaje da entre 1000 y 3000 diremos 'avanzado/a'
Si el puntaje da mayor a 3000 diremos 'experimentado/a'

*/

/* 
MALA PRACTICA ELSE IF
if(puntos >= 0 && puntos <= 1000){
    alert('principiante')
}
else{
    if(puntos > 1000 && puntos <= 3000){
        alert('avanzado/a')
    }
    else {
        if(puntos > 3000){
            alert('experimentado/a')
        }
    }
}
 */

//BUENA PRACTICA ELSE IF
/* 
let puntos = prompt('ingresa tus puntos')

if(puntos >= 0 && puntos <= 1000){
    alert('principiante')
}
else if(puntos > 1000 && puntos <= 3000){
    alert('avanzado/a')
}
else if(puntos > 3000){
    alert('experimentado/a')
}
else{
    alert("ERROR: dato no valido")
}



 */



/* 
Crea una variable llamada "tieneHijos" y asígnale "true" si tienes hijos o "false" si no los tienes. A continuación, escribe una línea de código para mostrar el valor de la variable en una alerta.

Crea una variable llamada "salario" y  solicita un salario actual como valor. A continuación, escribe una línea de código que calcule el salario anual multiplicando el salario mensual por 12 y muestre el resultado en una alerta.

Escribe un condicional que verifique si una variable llamada "edad" es mayor o igual a 18. Si es mayor o igual a 18, imprime "Eres mayor de edad" en la consola. Si no es mayor de edad, imprime "Eres menor de edad" en una alerta.


*/