import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react/cjs/react.development'
import { P1Context } from './Provider/GameContext'
import '../css/tema.css'
import Dificulta from './Dificulta'
import { Link } from 'react-router-dom'



const Tema = () => {
    
    return (
        <div className= "tema-cont">
                <div className="tema-caja-cont">
                    <Link  className="tema-caja" to="/game/startgame/2x2"> 
                        <h1 id="2">Facil</h1>
                        <h3 id="2"> 2 x 2</h3>
                    </Link>
                    <Link  className="tema-caja" to="/game/startgame/4x4"> 
                            <h1 id="4"> Normal </h1>
                            <h3 id="4"> 4 x 4</h3>
                    </Link>
                    <Link  className="tema-caja" to="/game/startgame/8x8"> 
                        <h1 id="8"> Dificil </h1>
                        <h3 id="8"> 8 x 8</h3>
                    </Link>
                    </div>
        </div>
    )
}

export default Tema
