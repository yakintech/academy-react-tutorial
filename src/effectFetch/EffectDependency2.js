import React, { useEffect, useState } from 'react'

function EffectDependency2() {
    const [categories, setcategories] = useState([]);
    const [counter, setcounter] = useState(0)


    useEffect(() => {

        fetch('https://northwind.vercel.app/api/categories')
            .then(res => res.json())
            .then(data => {
                console.log('GET DATA');
                setcategories(data);
            })

    }, [counter])




    return (<>
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setcounter(counter + 1)}>Increase-1</button>
        </div>

        <ul>
            {
                categories.map((item) => <li>{item.name}</li>)
            }
        </ul>
    </>
    )
}

export default EffectDependency2