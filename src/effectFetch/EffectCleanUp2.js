import React, { useEffect, useState } from 'react'

function EffectCleanUp2() {

    let controller;
    const abort = () => {
        controller.abort();
    }

    useEffect(() => {
        controller = new AbortController();
        const signal = controller.signal;

        fetch('https://northwind.vercel.app/api/products', { signal })
            .then(res => res.json())
            .then(data => {
                console.log('DATA ', data);
            })
    }, [])

    return (<>
        <button onClick={() => abort()}>Abort</button>
    </>
    )
}

export default EffectCleanUp2