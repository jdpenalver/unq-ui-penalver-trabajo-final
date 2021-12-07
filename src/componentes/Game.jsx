import React from 'react'
import { Outlet, useParams} from 'react-router'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { P1Context } from './Provider/GameContext'

const Game = () => {
    const {usuario1} = useContext(P1Context);
    const parama = useParams()
    
    return (
            <nav>
                <Link to="/">Home</Link>
                <h6>Player 1: {usuario1.Name} </h6>
                <h6>Puntaje: {usuario1.Score}</h6>
                <Outlet></Outlet>
            </nav>
    )
}

export default Game
