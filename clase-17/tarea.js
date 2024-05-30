/* prompt('ingrese su edad', '@gmail.com') */


function validarEmail (email) {
    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)){
        return true
    }
    else{
        return false
    }

}


function validarEmail (email) {
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))

}

function login(){
    let solicitarEmail = prompt("Hola,ingresa un email");
    while( !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(solicitarEmail))){
        solicitarEmail = prompt("ERROR: ingresa un email valido")
    }
    emailRegistrado = solicitarEmail;
}


