import React from 'react';
import { Link } from 'react-router-dom';
import "../css/main.css";

const Start = () => {
    return (
        <div className="main">
            <Link className="start" to="/game/players">Start</Link>
        </div>
    )
}


export default Start
