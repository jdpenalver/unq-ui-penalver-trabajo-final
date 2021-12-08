import React from 'react'
import { Link } from 'react-router-dom'
import "../css/players.css"

export const Players = () => {
    return (
        <div className="player-cont player-center">
            {/* <div className="seleccion"> */}
                <Link className="btn-player" to="/game/name">Player 1</Link>
                <Link className="btn-player"  to="/">Player 2</Link>
            {/* </div> */}
        </div>
    )
}
export default Players
