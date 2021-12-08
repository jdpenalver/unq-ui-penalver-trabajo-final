import React from 'react'
import { Link } from 'react-router-dom'
import "../css/players.css"

export const Players = () => {
    return (
        <div className="player-cont player-center">
                <Link className="btn-player" to="/game/name">Player 1</Link>
        </div>
    )
}
export default Players
