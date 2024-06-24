const formProductosHTML= document.getElementById('form-agregar-productos');

const validarNumero= (numero) =>{
    return !isNaN(numero) && Boolean(numero)
}


const VALIDACIONES={

    producto:{
        validacion: (nombre) => nombre.length > 6,
        errorText: 'Nombre no valido, debe tener mas de 6 caracteres'
    },
    precio:{
        validacion: validarNumero,
        errorText: 'No se ingreso un numero'
    },
    descripcion:{
        validacion: (texto) => texto.length > 100,
        errorText: 'La descripcion es muy corta'
    },
    stock:{
        validacion: validarNumero,
        errorText: 'No se ingreso un numero'
    },
    codigo:{
        validacion: (string) => string.startsWith('#'),
        errorText: 'El codigo debe tener un numeral por delante, Ej: #123'
    },
}



const obtenerProductos= (formulario)=>{
    const inputs= ['producto','precio','descripcion','stock','codigo'];
    const objInputs={};
    for (let input of inputs){
        const spanErrorHTML = document.getElementById('error-' + input)
        const valor = formulario[input].value
        objInputs[input] = {
            errorHTML: spanErrorHTML,
            validacion: VALIDACIONES[input].validacion,
            errorText: VALIDACIONES[input].errorText,
            valor: valor
        }
    }
    return objInputs
};


const handleSubmit = (evento) =>{
    evento.preventDefault()
    const formulario = evento.target;
    const valoresFormulario = obtenerProductos(formulario)
    let formularioValido= true;

    for (const propiedad in valoresFormulario){
        const objetoInputFormulario = valoresFormulario[propiedad]
        if (!objetoInputFormulario.validacion(objetoInputFormulario.valor)){
            objetoInputFormulario.errorHTML.innerText = objetoInputFormulario.errorText
            formularioValido= false;
        }else{
            objetoInputFormulario.errorHTML.innerText = ''
        }
        
    }

    if (formularioValido){
        console.log("Objeto producto:", valoresFormulario);
        alert('Producto agregado con exito!');
        formulario.reset();
    }
}


formProductosHTML.addEventListener('submit', handleSubmit)


/* 
HTML
CSS => {SASS, CSS modules, LESS}
JS
*/