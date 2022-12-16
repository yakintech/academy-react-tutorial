import React, { useState } from 'react'

function CounterSample() {

    //number, array, string, object
    const [counter, setcounter ] = useState(0);
    

    console.log('Counter component render!');

    const increase = () => {
        setcounter(counter + 1);
    }

    return (<>
        <h1>{counter}</h1>
        <h2>{counter}</h2>
        <h3>{counter}</h3>
        <p>{counter}</p>

        <button onClick={() => increase()}>Increase</button>
    </>
    )
}

export default CounterSample