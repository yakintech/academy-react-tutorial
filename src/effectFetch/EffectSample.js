import React, { useState } from 'react'

function EffectSample() {

    const [counter, setCounter] = useState(0);
    const [products, setproducts] = useState([]);

    // const [number, setnumber] = useState(0);

    //RE RENDER
    // setnumber(5);

    // fetch('https://northwind.vercel.app/api/products')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log('DATA ', data);
    //         //setproducts(data);
    //     })

    return (<>
        <h1>{products.length}</h1>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </>)
}

export default EffectSample