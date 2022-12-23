import React, { useContext } from 'react'
import { sayacContext } from './SayacContext'

function Sayac() {


    let { sayac, setsayac } = useContext(sayacContext);

    return (
        <div>Sayaç: <h1>{sayac}</h1></div>
    )
}

export default Sayac