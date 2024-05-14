/* 
DRY: dont repeat yourself =  no te REPITAS
*/


/* 
Solicitar un nombre al usuario, si el nombre es 'pepe' seguir solicitando el nombre
Cuando sea distinto de pepe, decir, 'ese nombre no lo conozco'

*/

/* let nombre = prompt('ingrese su nombre')

while(nombre === 'pepe'){
    nombre = prompt('ingresa devuelta un nombre')
}
alert('Ese nombre no lo conozco')
 */
/* if(nombre === 'pepe'){
   
    if(nombre =='pepe'){
        nombre = prompt('ingresa devuelta un nombre')
    }
    else{
        alert('Ese nombre no lo conozco')
    }
}
else{
    alert('Ese nombre no lo conozco')
} */


let nombre = prompt('ingrese su nombre')

while(!nombre){
    alert("ERROR: DATO NO VALIDO")
    nombre = prompt("Ingresa nuevamente el valor")
}
alert('dato correcto')