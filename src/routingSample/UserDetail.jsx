import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function UserDetail() {

    let { id } = useParams();
    let navigate = useNavigate();

    const [detail, setdetail] = useState({});

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(res => res.json())
            .then(data => {
                setdetail(data);
            })

    }, [])


    return (<>
        <button onClick={() => navigate(-1)}>Go to BACK!!</button>
        <Link to='/users'>Go to back</Link>
        <h1>Id: {detail.id}</h1>
        <h1>Name: {detail.name}</h1>
        <h1>User Name: {detail.username}</h1>
        <h1>Email: {detail.email}</h1>

    </>
    )
}

export default UserDetail