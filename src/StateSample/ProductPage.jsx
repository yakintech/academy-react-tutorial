import React, { useState } from 'react'
import { productsData } from './productsData';

function ProductPage() {

    const [products, setproducts] = useState(productsData);

    const [name, setname] = useState('');
    const [unitPrice, setunitPrice] = useState(0);
    const [unitsInStock, setunitsInStock] = useState(0);

    const [searchByName, setsearchByName] = useState('')

    const addNewProduct = () => {
        let newProduct = {
            name: name,
            unitPrice: unitPrice,
            unitsInStock: unitsInStock,
            id: products[products.length - 1].id + 1
        }

        setproducts([...products, newProduct]);
        setname('');
        setunitPrice(0);
        setunitsInStock(0);
    }

    const deleteProduct = (id) => {

        let filteredProducts = products.filter(q => q.id != id);
        setproducts([...filteredProducts])
    }


    return (<>
        <hr></hr>
        <div>
            <div>
                <label>Name:</label>
                <input  className="w3-input" value={name} type='text' onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <label>Unit Price:</label>
                <input className="w3-input" value={unitPrice} type='text' onChange={(e) => setunitPrice(e.target.value)} />
            </div>
            <div>
                <label>Units In Stock:</label>
                <input className="w3-input" value={unitsInStock} type='text' onChange={(e) => setunitsInStock(e.target.value)} />
            </div>
            <div>
                <button onClick={() => addNewProduct()}>Add</button>
            </div>
        </div>
        <hr></hr>
        <div>
            <div>
                <label>Name:</label>
                <input type='text' onChange={(e) => setsearchByName(e.target.value)}/>
                <button className='w3-button'>Search</button>
            </div>
        </div>
        <hr></hr>
        <table className="w3-table-all w3-centered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td>
                                <button onClick={() => deleteProduct(item.id)} className='w3-button w3-red'>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ProductPage