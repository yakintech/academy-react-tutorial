import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'

function MaterialGrid() {

    const [products, setproducts] = useState([]);

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => {
                setproducts(data);
            })

    }, [])

    const columns = [
        {
            field: 'id', headerName: 'Id', width: 250
        },
        {
            field: 'name', headerName: 'Name', width: 250
        },
        {
            field: 'unitPrice', headerName: 'Unit Price', width: 250
        }
    ]

    return (<>
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={products}
                columns={columns}
            >

            </DataGrid>
        </div>

    </>
    )
}

export default MaterialGrid