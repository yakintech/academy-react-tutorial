import React, { useEffect, useState } from 'react'

function ToDos() {

    const [todos, settodos] = useState([]);


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => {
                settodos(data);
            })

    }, [])

    return (<>
        <table className="w3-table-all w3-centered">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>User Id</td>
                    <td>Title</td>
                    <td>Completed</td>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>{item.completed.toString()}</td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ToDos