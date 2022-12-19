import React from 'react'

function SupplierTable({suppliers, deleteSupplier}) {
    return (<>
        <table className="w3-table-all w3-centered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td>
                                <button onClick={() => deleteSupplier(item.id)} className='w3-button w3-red'>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default SupplierTable