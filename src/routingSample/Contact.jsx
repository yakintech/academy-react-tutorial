import React, { useContext } from 'react'
import { sayacContext } from '../contextSample/SayacContext';

function Contact() {

  let { sayac, setsayac } = useContext(sayacContext);


  
  return (<>
    <button onClick={() => setsayac(sayac + 1)}>Increase</button>
  </>
  )
}

export default Contact