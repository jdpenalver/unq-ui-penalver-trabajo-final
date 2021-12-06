import React from 'react'
import { Link } from 'react-router-dom'
import "../css/players.css"

export const Players = () => {
    return (
        <div className="cont center">
            <div className="seleccion">
                <Link to="/game/name">Player 1</Link>
                <Link to="/">Player 2</Link>
            </div>
        </div>
    )
}
export default Players
