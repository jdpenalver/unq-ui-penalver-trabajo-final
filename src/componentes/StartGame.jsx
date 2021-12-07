import React, { useEffect, useState } from 'react'
import "../css/game.css"
import Carta from './Carta'
import { useLocation, useNavigate, useParams } from 'react-router'
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
const [logeado, setLogueado] = useState(false)
const navigate = useNavigate()
let location = useLocation()

const puntosPorPar = 10

useEffect(() => {
    if (logeado)
    {
    let load = true
    if (load) {
        Api.searchQTPhoto(usuario1.tema, photoToTake)
            .then( fotos=> {
                 setfotos(fotos)
                let tmp = funcionesArray.duplicarValores(fotos)
                setfotosduplicadas(funcionesArray.mezclar(tmp))                  
        })
        load=false
    }
    }else {
        location = {pathname:"/",
        state: {msg:'No esta faltan los datos para empezar a jugar, Empecemos de nuevo'}
        }
        
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