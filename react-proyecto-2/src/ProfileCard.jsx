import React from "react"

export const ProfileCard = ({persona}) => {
    const {nombre, apellido, edad, ubicacion} = persona
    return (
        <div className="mi-clase" >
            <h2 style={{backgroundColor: '#36BA98'}}>Nombre completo: {nombre} {apellido}</h2>
            <span><strong>Edad:</strong>{edad}</span>
            <h3>Ubicacion: {ubicacion}</h3>
        </div>
    )
}


/* 

export const ProfileCard = (props) => {
    console.log(props)
    const persona = props.persona
    return (
        <div >
            <h2>Nombre completo: {persona.nombre} {persona.apellido}</h2>
            <span><strong>Edad:</strong>{persona.edad}</span>
            <h3>Ubicacion: {persona.ubicacion}</h3>
        </div>
    )
}

*/
/* 

Ejemplo de props llevado a funciones
const sumar = (a, b) => {
    return a + b
}

sumar(8, 8)
sumar(16, 16) */