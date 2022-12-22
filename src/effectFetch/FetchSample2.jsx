import React, { useEffect, useState } from 'react'

function FetchSample2() {

    const [products, setproducts] = useState([]);


    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => {
                setproducts(data);
            })

    }, [])



    return (<>
    <div>
        <div>
            <label>Count: </label>
            <input type='text' />
            <button>GET</button>
        </div>
    </div>
    <ul>
        {
            products.map((item) => <li>{item.name}</li>)
        }
    </ul>
    </>
    )
}

export default FetchSample2