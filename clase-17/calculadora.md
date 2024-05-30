### CALCULADORA

Funcionalidades:

CALCULADORA
-tener soporte para las sig operacion: +, -
    -'+'
    -'-'

HISTORIAL:
-historial

LOGIN:
-crear usuario (esta se ejecuta al entrar a la caluladora)
    -email => debe estar validado


Utilidades:
-validacion
-opcion de CANCELAR

INGRESO DE DATOS:
-prompt

EGRESO DE DATOS:
-alert



LOGIN:

Prompt va a solicitar al usuario un email
Validamos que el email sea un email

RegEx / expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) nos retorna un boolean
En caso de que no volvera a solicitar
En caso de que si sea valido dira email registrado {emailRegistrado}

una vez solicitado el email vamos a solicitar password
Valideremos que tenga una letra en mayuscula
que no sea null o ''
que tenga almenos 6 caracteres
En caso de que no volvera a solicitar
En caso de que si sea valido dira password registrada {password}

> mayor
< menor


Reglas:
Todo el logeo debe estar dentro de una funcion

A tener en cuenta:
Pueden usar todas las funciones o crear las funciones que creean necesarias

login() LOGIN DEBE RETORNAR un objeto usuario:
{
    email: value,
    password: value
}



/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test()



function login(){
    let usuarioEmail = prompt('Ingrese su email:', '')
    while(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(usuarioEmail))){
        alert('ERROR: No se ingresó un email válido, reintente.')
        usuarioEmail = prompt('Ingrese su email:', '')
    }   
    alert('Email registrado: ' + usuarioEmail)
    return usuarioEmail
}



let emailRegistrado = login()



nombre@domain_name

nombre.com





CALCULADORA
-tener soporte para las sig operacion: +, -
    -'+'
    -'-'

operacionesValidas = ['+', '-']

Solicitar una operacion:
La operacion es valida si es alguna de las operaciones validas 
Vamos a solicitar un numero 1: 
Validar que sea un numero
Vamos a solcitar un numero 2:
validar que sea un numero


En caso de elegir una '+'
Aca sumamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}

En caso de elegir una '-'
Aca restamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}



HISTORIAL:

El historial debera tener el siguiente formato

Dado el siguiente array
historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
]


Crear una funcion llamada: renderizarHistorial(historial)

La funcion debera crear un string a partir del array con el siguiente formato y retornarlo:

'
El historial es:

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}
'
Luego mostar el string resultante por alerta

Recuerda: puedes usar `` (template string para hacer saltos de linea) o '\n'
Ejemplo:
'El historial es:\n-hola' 
se vera como:
El historial es
-hola

o con template string:
`
El historial es
-hola
`
se vera como:
El historial es
-hola