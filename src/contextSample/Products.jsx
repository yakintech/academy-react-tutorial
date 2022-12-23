import React, { useContext, useEffect, useState } from 'react'
import { favoritesContext } from './favoritesContext';

function Products() {

    const [products, setproducts] = useState([]);

    let { favorites, setfavorites } = useContext(favoritesContext);


    useEffect(() => {
        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => {
                setproducts(data);
            })

    }, [])

    const addToFavorites = (item) => {
        
        let favoitesControl = favorites.find(q => q.id == item.id);

        if(!favoitesControl){
            setfavorites([...favorites, item]);
        }
    }


    return (<>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Unit Price</td>
                    <td>Add to favorites</td>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td><button onClick={() => addToFavorites(item)}>Add to favorites</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default Products