import React from 'react'

function StyleSample() {

    let pStyle = {
        color:'red'
    }
    
    return (<>
        <p style={pStyle}>Donec rutrum congue leo eget malesuada.</p>

        <p style={{backgroundColor:'black'}}>Donec rutrum congue leo eget malesuada.</p>
        
        
    </>
    )
}

export default StyleSample