import React from 'react'

function IfElseSample() {

    let onlineStatus = true;

    //status true ise "User Online!" değilse "User Offline!" yazsın
  return (<>
    {
        onlineStatus == true ? <p>User Online</p> : <p>User Offline</p>
    }
  </>
  )
}

export default IfElseSample