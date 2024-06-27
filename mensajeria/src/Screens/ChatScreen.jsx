import React from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'

export const ChatScreen = () => {
    const MOOK_MENSAJES = [
        {
            author: 'yo',
            text: 'texto de mensaje',
            estado: 'visto',
            day: 'hoy',
            hour: '13:15',
            id: '1'
        },
        {
            author: 'pepe',
            text: 'Hola que tal?',
            estado: 'visto',
            day: 'hoy',
            hour: '13:16',
            id: '2'
        },
        {
            author: 'yo',
            text: 'Sos real? OMG',
            estado: 'visto',
            day: 'hoy',
            hour: '13:17',
            id: '3'
        }
    ]
    /* 
    CONSIGNA:
    Pasar los mensajes a la lista de mensajes, dicha lista por cada mensaje debera crear un componente Mensaje y ese componente recibira cada objeto de mensaje
    */
    return (
        <div>
            <ChatHeaderInfo/>
            {/* Este componente hara el mapeo */}
            <ListaMensajes/>
            <MensajeForm/>
        </div>
    )
}
