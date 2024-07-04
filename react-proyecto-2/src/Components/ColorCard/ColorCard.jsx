import React from "react"
import './ColorCard.css'

/* props = {tarjeta: {objeto tarjeta}} */
export const ColorCard = ({ tarjeta}) => {
    const { likes, fecha, colores } = tarjeta
    return (
        <div className="color-card">
            <div className="colors">
                <ColorItemList colors={colores}/>
            </div>
            <div className="color-card-controls">
                <button className="btn-like"><i className="bi bi-heart"></i> <span>{likes}</span></button>
                <span className="time">{fecha}</span>
            </div>
        </div>
    )
}

export const ColorItemList = ({colors}) => {
    return (
        <>
            {colors.map((color, index) => <ColorItem color={color} key={color + index}/>)}
        </>
    )
}

const ColorItem = ({color}) => {
    return (
        <div className="color" style={{ backgroundColor: color }}></div>
    )
}


/* 
Los estilos inline en react se escriben como objetos 
*/

