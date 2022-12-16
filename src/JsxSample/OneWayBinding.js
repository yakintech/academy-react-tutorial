import React from 'react'

function OneWayBinding() {

  let name = "Çağatay";

  let user = {
    name: "Çağatay",
    surname: "Yildiz",
    age: 18
  }
  const h1Title = <h1>Hello Baku!</h1>

  return (<>
    {h1Title}
    <div>{name}</div>
    <h1>{user.age}</h1>
  </>

  )
}

export default OneWayBinding