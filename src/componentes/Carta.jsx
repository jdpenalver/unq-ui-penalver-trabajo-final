import React from 'react'
import "../css/carta.css"

const Carta = ({valor}) => {
    return (
        <div className="carta">
            <h1>{valor.id}</h1>
            <h1>{valor.texto}</h1>
        </div>
    )
}

export default Carta
