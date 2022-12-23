import React, { useContext } from 'react'
import { sayacContext } from '../contextSample/SayacContext'

function Home() {


  let { cities } = useContext(sayacContext)

  return (<>
    <ul>
      {
        cities.map((item) => <li>{item}</li>)
      }
    </ul>
  </>
  )
}

export default Home