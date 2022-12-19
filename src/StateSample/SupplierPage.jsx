import React, { useState } from 'react'
import { supplierData } from './supplierData'
import SupplierHeader from './SupplierHeader';
import SupplierTable from './SupplierTable';

function SupplierPage() {

    const [suppliers, setsuppliers] = useState(supplierData);


    const deleteSupplier = (id) => {

        let filteredSuppliers = suppliers.filter(q => q.id != id);
        setsuppliers(filteredSuppliers);
    }

    return (<>

        <SupplierHeader suppliers={suppliers}/>
        <SupplierTable suppliers={suppliers} deleteSupplier={deleteSupplier} />

     
    </>
    )
}

export default SupplierPage