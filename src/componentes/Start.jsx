import React from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../Api/Api';
import { useState } from 'react';
import UnaFoto from './UnaFoto';

import "../css/main.css";


const Start = () => {

const [fotos, setfotos] = useState([])

const obtenerFotos = () => {
    Api.searchQTPhoto('nature', 2)
        .then( fotos=> {
             setfotos(fotos)
             console.log(fotos)
        })
  };

    return (
        <div className="main">
            <Link to="/game/players">Start</Link>
            <ul>
                {fotos.map ((unaFoto) => <UnaFoto idDeFoto={unaFoto.id} urlFoto ={unaFoto.src.small} /> )}
            </ul>
            <button onClick= {obtenerFotos}> obtener fotos</button>
        </div>
    )
}


export default Start
