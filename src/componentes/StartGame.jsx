import React, { useEffect, useState } from 'react'
import "../css/game.css"
import Carta from './Carta'
import { useNavigate, useParams } from 'react-router'
import { Api } from '../Api/Api'
import { funcionesArray } from '../funciones/arrayFn'
import { P1Context } from './Provider/GameContext'
import { useContext } from 'react'
import Game from './Game'
import Gano from './Gano'


const StartGame = ( ) => {


const [fotos, setfotos]= useState([])
const {size} = useParams()
const [fotosDuplicadas, setfotosduplicadas]= useState([])
const {usuario1} = useContext(P1Context)
const [haGanado, setHaGando]= useState(false)
const [cantDeCartas, setCatidadDeCartas] = useState(2)

const navigate = useNavigate()
const puntosPorPar = 10


useEffect(() => {
    if (datosCargardos){
        Api.searchQTPhoto('wood', tamaño)
            .then( fotos=> {
                 setfotos(fotos)
                let tmp = funcionesArray.duplicarValores(fotos)
                setfotosduplicadas(funcionesArray.mezclar(tmp)) 
                console.log(fotosDuplicadas)                 
        })
    } else {
        irAPathConError("/info",'Parece que no has comenzado desde el comienzo,vamos a hacerlo!')        
    }
    
}, [])
const irAPathConError = (path, err) => { navigate(path,  {state: { err}} )}

const datosCargardos =  usuario1.Name != ''


const verificarSiGano = () => {
    if (cantDeCartas == fotosDuplicadas.length) {
        setHaGando(true)
    }
}
let selecion = {
    id:'', 
    fn:''
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

let tamaño;
switch (size) {
    case '2x2':
         tamaño = 2;
         break;
    case '4x4': 
        tamaño = 8
        break;
    case '8x8': 
        tamaño = 16
        break;
    default: return <h1>No Size Found </h1>
}

const estiloDeGrilla= "tamano-" + size
if (!haGanado) {
    return (
        <div className="game-container">
            <Game></Game>
            {/* <div className="game-cuadricula"> */}
              <div className={estiloDeGrilla}> 
                {fotosDuplicadas.map ((unaFoto) => 
                 <Carta padre={verficiarCarta} idDeFoto={unaFoto.id} urlFoto ={unaFoto.src.small} />)}
               {/* </div> */}
            </div>
        </div> )
    
    } else {
        return <Gano></Gano>
    }
}

export default StartGame