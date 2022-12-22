import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Users() {

    const [users, setusers] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setusers(data);
            })

    }, [])

    const gotoDetail = (id) => {
        navigate('/users/' + id);
    }

    return (<>
        <ul>
            {
                users.map(item => <>
                    <li>
                        <Link to={'/users/' + item.id}>{item.name}</Link>
                        <button onClick={() => gotoDetail(item.id)}>Go to detail</button>
                    </li>

                </>)
            }
        </ul>
    </>
    )
}

export default Users