import React from 'react';
import { Link } from 'react-router-dom';
import "../css/main.css";
import { useContext } from 'react'
import { P1Context } from './Provider/GameContext'
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router';

const Start = () => {

    const {logged} = useParams()

const location = useLocation()

    return (
        <div className="main">
            <Link to="/game/players">Start</Link>
            <h1> {location.state?'':location.state } </h1>
        </div>
    )
}


export default Start
