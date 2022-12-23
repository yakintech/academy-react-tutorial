import React, { useContext } from 'react'
import { sayacContext } from './SayacContext'

function Sayac2() {


  let { sayac, setsayac } = useContext(sayacContext)

  return (<>
   <div>Sayaç: <h1>{sayac}</h1></div>
    <button onClick={() => setsayac(0)}>Sıfırla</button>
  </>
   
  )
}

export default Sayac2