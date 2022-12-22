import React, { useState } from 'react'

function CounterSample() {

    //number, array, string, object
    const [counter, setcounter ] = useState(0);
    

    console.log('Counter component render!');



    return (<>
        <h1>Counter: {counter}</h1>
        <h1>Çağatay Yıldız</h1>

        <button onClick={() =>  setcounter(5)}>Increase</button>
    </>
    )
}

export default CounterSample