import React from 'react'

function SupplierHeader(props) {
    return (
        <div>
            <h1>Length: {props.suppliers.length}</h1>
        </div>
    )
}

export default SupplierHeader