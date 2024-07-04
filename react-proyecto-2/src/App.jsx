import React, {useState} from 'react'
import { ProfileCard } from './ProfileCard'
import { ColorCardList } from './Components/ColorCardList/ColorCardList'
import { ColorItemList } from './Components/ColorCard/ColorCard'
import Contador from './Components/Contador/Contador'
import NewColorCardForm from './Components/NewColorCardForm/NewColorCardForm'



let nombre = 'pepe'
const obtenerNombre = () => 'pepe'

/* its a band */
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

    /* NO usar a document almenos que sea ESTRICTAMENTE NECESARIO */
    //Usamos useState() para crear un estado
    /* const [valor, fnCambiadora] = useState(10)

    const incrementar = () => {
        fnCambiadora(valor + 1)
    } */
    const [colorCardInfoList, setColorCardInfoList] = useState(colors_card_info)


    console.log('me cargo')


    const handleSubmitNewColorCard = (e) => {
        e.preventDefault()
        const newColorCard = {
            colores: [],
            likes: 0,
            fecha: e.target.fecha.value,
            id: 7
        }
        for(let i = 1 ; i <= 4; i = i + 1){
            newColorCard.colores.push(e.target['color-' + i].value)
        }
        setColorCardInfoList([...colorCardInfoList, newColorCard])
        
    }
    return (
        <div>
            <ProfileCard
                persona={persona_1}
            />
            <ProfileCard
                persona={persona_2}
            />
            <ColorCardList colors_info={colorCardInfoList} />
            <NewColorCardForm handleSubmitNewColorCard={handleSubmitNewColorCard}/>
            <img />
            <Contador limit={10}/>
        </div>
    )
}

export default App

/* 
De aca se pone dificil
props.children
EVENTOS y ESTADOS
React Router dom
EFECTOS Y CONTEXTO

*/


/* 
1er ejercicio
Crear un componente contador que renderize:

boton de decrementar
span con valor de contador
boton de incrementar

2da parte
El decrementar no debe bajar a menos de 1

3era parte
El incrementar debera estar limitado por una prop llamada limit que recibira el contador


<Contador limit={10}/>
*/


/* 
Tarea:
Agregar a la aplicacion de chat la funcionalidad de escribir nuevos mensajes
*/

