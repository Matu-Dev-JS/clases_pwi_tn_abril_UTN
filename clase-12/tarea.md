

Determinar el resultado y corroborar con consola:


(true > true || 9) && Number(Boolean(1)) > 0 || 'pepe'

'valor' === "VALOR" || NaN == NaN && '1' ===  !'-1'


DETERMINAR EL ORDEN DE LOS NOMBRES

let nombre = 'pepe'
console.log(nombre)
{
    let nombre = 'pedro'
    console.log(nombre)
    {
        let nombre = 'maria'
        console.log(nombre)
    }
    {
        let nombre = 'leonel'
        console.log(nombre)
        {
            nombre = 'julieta'
            console.log(nombre)
        }
        console.log(nombre)
    }
    console.log(nombre)
    nombre = 'juan'
}
console.log(nombre)
