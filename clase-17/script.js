function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password) {
    return (password.length > 6 && password != password.toLowerCase() && Boolean(password))
}




function obtenerDato (data){

    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}


function login() {
    let email = obtenerDato(
        {
            mensaje: "Bienvenido, por favor ingrese su email: ",
            error: "Error, por favor ingrese un email valido: ",
            validacion: validarEmail
        }
    )
    let password = obtenerDato(
        {
            mensaje: "Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ",
            error: "Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ", 
            validacion: validarPassword
        }
    )
    return { email: email, password: password}
}
