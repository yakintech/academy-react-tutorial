import { Button } from '@mui/material'
import React from 'react'
import CButton from './CButton'

function MaterialCore() {
  return (<>
    <Button variant='outlined' size='large'>Hello Material</Button>
    
    <CButton variant='outlined'>Hello Material-2</CButton>
  </>
  )
}

export default MaterialCore