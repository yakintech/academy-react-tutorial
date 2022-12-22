import React, { useEffect, useState } from 'react'

function Users() {

    const [users, setusers] = useState([]);
    const [counter, setcounter] = useState(0);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setusers(data);
                
                setTimeout(() => {
                    setcounter(5);
                }, 1000);
            })

    }, [])


    return (<>
        <h1>{counter}</h1>
        <UsersTitle />
        <button onClick={() => setusers([])}>Clear All</button>
        <ul>
            {
                users.map(item => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </>)
}

export default Users




function UsersTitle() {

    console.log('RENDER');

    return <>
        <h1>Users Data</h1>

    </>
}