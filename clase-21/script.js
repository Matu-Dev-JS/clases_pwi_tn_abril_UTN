/* const formLoginHTML = document.getElementById('form-login')
const formRegisterHTML = document.getElementById('form-register')

 */

//Quiero llamar al input username

/* console.log(formLoginHTML.username.value)

const handleLogin = (evento) => {
    evento.preventDefault()
    console.log("se envio el formulario")
    const formulario = evento.target
    const username = formulario.username.value
    if(username.length < 4){
        const errorTextHTML = document.getElementById('error-text-username')
        errorTextHTML.innerText = 'El username debe tener 4 caracteres'
       errorTextHTML.style.color = 'red'
    }
} 

/* SI EL USERNAME TIENE MENOS DE 4 caracteres mostar un texto de error que diga 'El username debe tener 4 caracteres' */

/*
username tiene que tener una mayuscula, y un '-' y almenos 4 caracteres
password tiene que tener una mayuscula y un '#'
email Debe ser email (usar la expresion regular)
Si el error el multiple EJEMPLO, el username y el password esta mal, tirara 2 textos, es decir cada input tendra su posibilidad de fallar
Si esta todo bien por consola diran 'exito'
*/


/* formLoginHTML.addEventListener('submit', handleLogin) */
/* formRegisterHTML.addEventListener('submit', handleLogin) */






// camara.addEventListener('entrar', (evento)=>{
//     /* El evento recibido es un objeto de informacion:
//     Quien entro
//     a que hora
//     sexo
//     color_pelo
//     */
// })

// pantalla.addEventListener('click', (evento) =>{
//     /* 
//     evento: {
//         'screenX': 700
//         'screenY': 200
//     }
//     */
// })

/* 
YAGNI: You arent gonna need it
*/

const validarMayuscula =(texto) =>{
    let textoMinuscula = texto.toLowerCase()
    return textoMinuscula !== texto
}

const VALIDACIONES = {

    password: {
        validacion:(texto) => texto && texto.includes('#') && validarMayuscula(texto),
        errorText: 'La password es incorrecta'
    },
    email: {
        validacion: (email) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)),
        errorText: 'El email es incorrecto'
    },
    username: {
        validacion: (texto) => texto && texto.includes('-') && validarMayuscula(texto),
        errorText: 'El username es incorrecto'
    }

}


const obtenerValoresFormulario = (formulario) => {
        
    const inputs = ['username', 'password', 'email']
    const inputsInfo = {}
    for(let input of inputs){
        const spanErrorHTML = formulario.querySelector('.error-text-' + input)
        const valor = formulario[input].value
        inputsInfo[input] = {
            errorHTML: spanErrorHTML,
            validacion: VALIDACIONES[input].validacion,
            errorText: VALIDACIONES[input].errorText,
            valor: valor
        }
    }
    return inputsInfo
}


const formLoginHTML = document.getElementById('form-login')


const handleSubmit = (evento) =>{
    evento.preventDefault()
    const formulario = evento.target
    const valoresFormulario = obtenerValoresFormulario(formulario)
    console.log(valoresFormulario)
    for(const propiedad in valoresFormulario){
        const objetoInputFormulario = valoresFormulario[propiedad]
        if(!objetoInputFormulario.validacion(objetoInputFormulario.valor)){
            objetoInputFormulario.errorHTML.innerText = objetoInputFormulario.errorText
        }
        else{
            objetoInputFormulario.errorHTML.innerText = ''
        }
        
    }
}

formLoginHTML.addEventListener('submit', handleSubmit)

/* 
Hacer un formulario para productos

Titulo: string con mas de 6 caracteres
Precio: numero valido 
Descripcion (textarea): string con mas de 100 caracteres
stock: numero valido
Codigo: string pero que tenga un # por delante EJ: '#aj504'/ '#pepe' / '#123'

*/