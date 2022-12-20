import React, { useEffect, useState } from 'react'

function EffectCleanUp() {

    const [counter, setcounter] = useState(0);


    useEffect(() => {

        let interval = setInterval(() => {
            console.log('HELLO!');
        }, 1000);

        return () => {
            console.log('CLEAN!');
            clearInterval(interval)
        }
    }, [counter])



    useEffect(() => {
        let controller = new AbortController();
        const signal = controller.signal;

        console.log('Controller ', controller);

        fetch('https://northwind.vercel.app/api/products', { signal })
            .then(res => res.json());


        return () => {
            controller.abort();
        }
    }, [])



    return (<>
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setcounter(counter + 1)}>Increase-1</button>
        </div>
    </>)
}

export default EffectCleanUp