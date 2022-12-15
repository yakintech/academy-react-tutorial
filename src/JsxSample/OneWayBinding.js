import React from 'react'

function OneWayBinding() {

  let name = "Çağatay";

  let user = {
    name: "Çağatay",
    surname: "Yildiz",
    age: 18
  }



  return (<>
    <div>{name}</div>
    <h1>{user.age}</h1>
  </>

  )
}

export default OneWayBinding