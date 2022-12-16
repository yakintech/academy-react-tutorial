import React, { useState } from 'react'
import { cities } from './cities'

function ArraySample() {

  const [cityList, setcityList] = useState(cities);


  const orderCities = () => {
    let newCityList = cityList.sort((a,b) => b.localeCompare(a));
    
    // setcityList(newCityList)
    setcityList([...newCityList])

  }

  return (<>

    <button onClick={() => orderCities()}>Order By Desc</button>
    <button onClick={() => setcityList([])}>Clear</button>
    <h1>Length: {cityList.length}</h1>
    <ul>
      {
        cityList.map(item => <li>{item}</li>)
      }
    </ul>
  </>

  )
}

export default ArraySample