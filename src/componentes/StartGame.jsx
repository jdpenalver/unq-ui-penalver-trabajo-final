import React, { useEffect, useState } from 'react'
import "../css/game.css"
import Carta from './Carta'
import { useParams } from 'react-router'
import { Api } from '../Api/Api'
import { funcionesArray } from '../funciones/arrayFn'

const StartGame = ( ) => {

const [fotos, setfotos]= useState([])
const {size} = useParams()
const [fotosDuplicadas, setfotosduplicadas]= useState([])
const [hideCompone, sethideCompone]= useState([])
const [toRender, settoRender]= useState([])


useEffect(() => {
    let load = true
    if (load) {
        Api.searchQTPhoto('nature', photoToTake)
            .then( fotos=> {
                 setfotos(fotos)
                let tmp = funcionesArray.duplicarValores(fotos)
                setfotosduplicadas(funcionesArray.mezclar(tmp))                      
        })
        load=false
    }
    
}, [])

let selecion = {
    id:'', 
    fn:''
    }

const verficiarCarta =  (set, estaSeleccionado,id) => {
    if(!estaSeleccionado) {
        set(!estaSeleccionado)
        if( selecion.id== '')  {
            selecion.id=id
            selecion.fn=set
            console.log("esta Vacio")
        } else {
            if (selecion.id == id) {
                set(true)
                selecion.fn(true)
                console.log("Gano")
                console.log(estaSeleccionado)
                
                selecion.fn = ''
                selecion.id = ''
            }else{
                console.log("Perdio")
                selecion.fn(false)
                set(false)
                selecion.fn = ''
                selecion.id = ''
            }
        }
    }
}

let photoToTake;
switch (size) {
    case '2x2':
         photoToTake = 2;
         break;
    case '4x4': 
        photoToTake = 8
        break;
    case '8x8': 
        photoToTake = 16
        break;
    default: return <h1>No Size Found </h1>
}

const estiloDeGrilla= "tamano-" + size

    return (
        <div className="cuadricula">
            <div className={estiloDeGrilla}> 
            {
            fotosDuplicadas.map ((unaFoto) => 
            <Carta padre={verficiarCarta} idDeFoto={unaFoto.id} urlFoto ={unaFoto.src.small} /> )
            }
            </div>
        </div>
    )
}
export default StartGame