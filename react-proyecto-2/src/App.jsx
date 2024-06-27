import React from 'react'
import { ProfileCard } from './ProfileCard'
import { ColorCardList } from './Components/ColorCardList/ColorCardList'
import { ColorItemList } from './Components/ColorCard/ColorCard'



let nombre = 'pepe'
const obtenerNombre = () => 'pepe'


const colors_card_info = [
    {
        likes: 9,
        fecha: '9/12/2018',
        colores: ['#EEEDEB', '#E6B9A6', '#939185', '#2F3645'],
        id: 1
    },
    {
        likes: 12,
        fecha: '1 hora',
        colores: ['#36BA98', '#E9C46A', '#F4A261', '#E76F51'],
        id: 2
    },
    {
        likes: 2018,
        fecha: '2 dias',
        colores: ['#91DDCF', '#F7F9F2', '#7776B3', '#E2BBE9'],
        id: 3
    },
    {
        likes: 4,
        fecha: '1 dia',
        colores: ['#219C90', '#059212', '#D8EFD3', '#78ABA8'],
        id: 4
    }
   
]  


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

    /* const personas = ['pepe', 'juan', 'maria']
    const listaJSXPersonas = personas.map((persona) => {
        return (
            <div>{persona}</div>
        )
    }) */

    return (
        <div>
            <ProfileCard
                persona={persona_1}
            />
            <ProfileCard
                persona={persona_2}
            />
            <ColorCardList colors_info={colors_card_info} limit={2}/>

            <img />
           
        </div>
    )
}

export default App

