import { ColorCard } from "../ColorCard/ColorCard"

/* Este componente recibe el array de colores */
export const ColorCardList = ({colors_info, limit}) => {

    return (
        <>
            {
                colors_info.slice(0, limit).map((color_info) => <ColorCard tarjeta={color_info} key={color_info.id}/>)
            }
        </>
    )
}


