//DOM = document object model

console.dir(document)

/* Eventos */


function alertar(){
    alert('hola desde un evento click')
}
/* const alertar2 = () => {
    alert('hola desde un evento click')
}

alertar2() */


/* const sumar = (a, b) => a + b */

/* Van a abreviar la funcion en flecha cuando su funcion no haga muchas acciones, o que directamente la funcion retorne

Ejemplo

function hacerTarea (){
    let tipo = prompt('que tipo de tarea quieres hacer')
    guardarTarea(tipo)
    return tipo
}

funcion calcularIva (iva){
    return iva * 0.21
}
*/
const validarNumero = (numero) => Boolean(numero) && !isNaN(numero) 


const solicitarDato = (solicitud) =>{
    let dato = prompt('Ingrese un ' + solicitud)
    while(!dato){
        dato = prompt('Error: Ingrese un ' + solicitud)
    }
    return dato
}

/* const generarUsuario = (username, email) => {


    return {
        username: username, 
        email: email
    }
} */
const generarUsuario = (username, email) =>  ({username: username, email: email})



console.log(validarNumero('pepe'))

const btnClick2 = document.getElementById('btn-especial')

console.dir(btnClick2)


/* btnClick2.onclick = alertar
 */
btnClick2.onclick = function () {
    alert('hola desde un evento click')
}
const btnClick3 = document.getElementById('btn-3')

/* const btnClick3 = document.querySelector('.btn') */

/* const btn_click_3 = document.getElementsByClassName("btn")[0] */
/* const btnClick3 = document.querySelectorAll('.btn')[0] */

//addEventListener es un metodo para añadir un evento
/* btnClick3.addEventListener('click', alertar) */


//Cuando me hagan click en el btn quiero que por consola se diga 'click'

btnClick3.addEventListener('click', function(evento){
    console.log(evento)
    console.log('click')
})


btnClick3.addEventListener('click', () => {
        console.log('hola')
    }
)


const personas = [ 
    {
        nombre: 'pepe',
        edad: 14,
    },
    {
        nombre: 'maria',
        edad: 50,
    },
    {
        nombre: 'pedro',
        edad: 30,
    },
    {
        nombre: 'sarah',
        edad: 25,
    }
]


/* const mayoresDeEdad = personas.filter( (persona) =>{
    return persona.edad >= 18
} )
 */
/* const mayoresDeEdad = personas.filter( (persona) => persona.edad >= 18) 
console.log(mayoresDeEdad) */


const formularioHTML = document.getElementById('formulario')


/* formularioHTML.addEventListener('submit', () =>{

}) */

const handleSubmit = (evento)=> {
    evento.preventDefault()
    console.dir(formularioHTML.dato.value)
}

formularioHTML.addEventListener('submit', handleSubmit )




console.log('El valor acutal del input dato es: ' + formularioHTML.dato.value)


