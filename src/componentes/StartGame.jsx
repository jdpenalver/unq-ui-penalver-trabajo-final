import React from 'react'
import "../css/game.css"
import Carta from './Carta'

const StartGame = ( {tamano}) => {

const cartas = [
        {id:1,texto:"1" }, 
        {id:2,texto:"2" }, 
        {id:3,texto:"3" }, 
        {id:4,texto:"4" }, 
]

    return (
        <div className="cuadricula">
            <div className="tamano-2"> 
            {cartas.map((a) => 
            <Carta valor={a} ></Carta>
            )}  
            </div>
        </div>
    )
}
export default StartGame