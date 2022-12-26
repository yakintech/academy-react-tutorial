import { Button, Table } from 'antd'
import React, { useEffect, useState } from 'react'

function ProductsTable() {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getProducts();

    }, [])


    const getProducts = () => {
        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => {
                setproducts(data);
                setloading(false)
            })
    }


    const deleteProduct = (id) => {

        fetch(`https://northwind.vercel.app/api/products/${id}`, { method: 'DELETE' })
            .then(res => {
                if (res.status == 200)
                    getProducts();
            })


    }

    let columns = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            title: 'Unit Price',
            dataIndex: 'unitPrice'
        },
        {
            title: 'Stock',
            dataIndex: 'unitsInStock'
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            render: (id) => <Button
                onClick={() => deleteProduct(id)} danger>Delete</Button>
        }

    ]

    return (<>
        <Table
            dataSource={products}
            columns={columns}
            pagination={{ pageSize: 5 }}
            loading={loading}

        >
        </Table>
    </>
    )
}

export default ProductsTable