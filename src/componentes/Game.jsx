import React from 'react'
import { Outlet, useParams} from 'react-router'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { P1Context } from './Provider/GameContext'
import '../css/gameBar.css'


const Game = () => {
    const {usuario1} = useContext(P1Context);
    const parama = useParams()
    
    return (
            <nav className="gameBar-cont">
                <h6 className="gameBar-text">Player 1: {usuario1.Name} </h6>
                <h6 className="gameBar-text">Puntaje: {usuario1.Score}</h6>
                <Link className="gameBar-btn" to="/"> Me Rindo</Link>
                
            </nav>
    )
}

export default Game
