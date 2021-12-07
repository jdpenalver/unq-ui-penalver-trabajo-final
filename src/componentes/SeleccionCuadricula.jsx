import React from 'react'
import { Link } from 'react-router-dom'
import "../css/cuadricula.css"
import { useContext } from 'react'
import { P1Context } from './Provider/GameContext'
import { Navigate, useNavigate } from 'react-router'

const SeleccionCuadricula = () => {

    const {usuario1} = useContext(P1Context)
    const navigate = useNavigate()
    
    if ( !usuario1.Name || !usuario1.tema ) {
        navigate("/notLogged")
    }
    


    return (
        <div className="cont ">
            <div className="grd-center">
            <Link  className="center"  to="/game/startgame/2x2"> 2 X 2</Link>
            <Link className="center" to="/game/startgame/4x4"> 4 X 4</Link>
            <Link className="center" to="/game/startgame/8x8"> 8 X 8</Link>
            <Link className="center" to="/game/startgame/16x16"> 16 X 16</Link>
            </div>
        </div>
    )
}

export default SeleccionCuadricula
