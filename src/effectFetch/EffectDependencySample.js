import React, { useEffect, useState } from 'react'

function EffectDependencySample() {

    const [counter, setcounter] = useState(0);
    const [counter2, setcounter2] = useState(0);

    //Bir kere çalışır
    useEffect(() => {
        console.log('Effect!');
    }, []);

    //counter-2 state
    useEffect(() => {
        console.log('Counter-2 state changed');
    }, [counter2])



    return (<>
        <div>
            <Child />
        </div>
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setcounter(counter + 1)}>Increase-1</button>
        </div>
        <div>
            <h1>{counter2}</h1>
            <button onClick={() => setcounter2(counter2 + 1)}>Increase-2</button>
        </div>
    </>
    )
}

export default EffectDependencySample




function Child() {

    useEffect(() => {

        console.log('Child Effect');

    }, [])


    return <><h1>Child</h1></>
}