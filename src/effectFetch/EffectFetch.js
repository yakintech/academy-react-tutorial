import React, { useEffect, useState } from 'react'

function EffectFetch() {

    const [categories, setcategories] = useState([]);

    console.log('RENDER');

    // BEN BİR KERE ÇALIŞIRIM!
    useEffect(() => {
        loadData();
    }, []);

    const deleteCategory = (id) => {
        fetch(`https://northwind.vercel.app/api/categories/${id}`, { method: 'DELETE' })
            .then(res => {
                if (res.status == 200) {
                    loadData();
                }
            })
    }


    const loadData = () => {
        fetch("https://northwind.vercel.app/api/categories")
            .then(res => res.json())
            .then(data => {
                setcategories(data);
            })
    }


    return (<>
        <div>{categories.length}</div>
        <ul>
            {
                categories && categories.map((item) => {
                    return <li onClick={() => deleteCategory(item.id)} key={item.id}>{item.name}</li>
                })
            }
        </ul>
    </>

    )
}

export default EffectFetch