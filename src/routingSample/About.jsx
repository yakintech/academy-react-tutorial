import React, { useContext, useState } from 'react'
import { sayacContext } from '../contextSample/SayacContext'

function About() {

  const [name, setname] = useState('')


  let { cities, setcities } = useContext(sayacContext);

  const add = () => {
    setcities([...cities, name]);
  }

  return (<>
    <input type='text' onChange={(e) => setname(e.target.value)} />
    <button onClick={add}>Add</button>
    <ul>
      {
        cities.map((item) => <li>{item}</li>)
      }
    </ul>
  </>
  )
}

export default About