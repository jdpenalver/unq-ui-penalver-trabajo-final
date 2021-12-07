import React, { useEffect, useState } from 'react'
import "../css/game.css"
import Carta from './Carta'
import { useParams } from 'react-router'
import { Api } from '../Api/Api'
import { funcionesArray } from '../funciones/arrayFn'
import { P1Context } from './Provider/GameContext'
import { useContext } from 'react'
import Gano from './Gano'

const StartGame = ( ) => {


const [fotos, setfotos]= useState([])
const {size} = useParams()
const [fotosDuplicadas, setfotosduplicadas]= useState([])
const {usuario1} = useContext(P1Context)
const [haGanado, setHaGando]= useState(false)
const [cantDeCartas, setCatidadDeCartas] = useState(2)

const puntosPorPar = 10


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
const verificarSiGano = () => {
    if (cantDeCartas == fotosDuplicadas.length) {
        
        setHaGando(true)
    }
}

let enEspera= true    
const verficiarCarta =  (set, estaSeleccionado,id) => {
    if (enEspera) {
        if(!estaSeleccionado) {
            if( selecion.id== '')  {
                set(!estaSeleccionado)
                selecion.id=id
                selecion.fn=set
            } else {
                if (selecion.id == id) {
                    usuario1.setScore(usuario1.Score + puntosPorPar)
                    setCatidadDeCartas(cantDeCartas + 2)
                    console.log("====Cantidad de Cartas===")
                    console.log(cantDeCartas)
                    verificarSiGano()       
                    set(true)
                    selecion.fn(true)  
                    selecion.fn = ''
                    selecion.id = ''
                }else{
                    enEspera= false
                    set(true)
                    setTimeout (()=> {
                        set(false)
                        selecion.fn(false) 
                        enEspera= true
                        selecion.fn = ''
                        selecion.id = '' 
                    }, 800)
                }
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
if (!haGanado) {
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
    }else {
        return <Gano></Gano>
    }
}
export default StartGame