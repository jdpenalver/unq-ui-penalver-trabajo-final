import React from 'react'
import { Link } from 'react-router-dom'
import "../css/cuadricula.css"

const SeleccionCuadricula = () => {
    return (
        <div className="cont ">
            <div className="grd-center">
            <Link  className="center" to="/game"> 2 X 2</Link>
            <Link className="center" to="/game"> 4 X 4</Link>
            <Link className="center" to="/game"> 8 X 8</Link>
            <Link className="center" to="/game"> 16 X 16</Link>
            </div>
        </div>
    )
}

export default SeleccionCuadricula
