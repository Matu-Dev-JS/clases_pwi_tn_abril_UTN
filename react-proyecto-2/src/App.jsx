import React from 'react'
import { ProfileCard } from './ProfileCard'


let nombre = 'pepe'
const obtenerNombre = () => 'pepe'


const App = () => {
    const sumar = () => 1 + 1
    const persona_1 = {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 89,
        ubicacion: 'calle 123'
    }
    const persona_2 = {
        nombre: 'juan',
        apellido: 'Ruiz',
        edad: 48,
        ubicacion: 'Av Scal 123'
    }
    return (
        <div>
            <ProfileCard 
                persona={persona_1}
            />
            <ProfileCard 
                persona={persona_2}
            />
        </div>
    )
}

export default App