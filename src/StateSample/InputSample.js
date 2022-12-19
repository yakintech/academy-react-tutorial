import React, { useState } from 'react'

function InputSample() {

    const [data, setdata] = useState('');

    console.log('Haki');

  return (<>

        <input type='text' onChange={(e) => setdata(e.target.value)} />

  </>)
}

export default InputSample