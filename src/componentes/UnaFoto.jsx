import React from 'react'

const UnaFoto = ({idDeFoto,urlFoto}) => {
    

    return (
        <li>
            La foto tiene el id {idDeFoto}
            <img src={urlFoto} alt="" />
        </li>
    )
}

export default UnaFoto