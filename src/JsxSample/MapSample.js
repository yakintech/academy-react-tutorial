import React from 'react'

function MapSample() {

    let cities = ['Baku', 'İstanbul', 'Atina', 'Ankara', 'İzmir'];

    return (<>
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default MapSample
