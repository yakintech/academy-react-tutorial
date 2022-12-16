import React from 'react'


//props -> properties
//props -> object

function UserDetail({name, surname, age, cities}) {

    // let { name, surname, age } = props;

    return (
        <>
            <h1>Name: {name}</h1>
            <h1>Surname: {surname}</h1>
            <h1>Age: {age}</h1>
            <ul>
                {
                    cities.map(item => <li>{item}</li>)
                }
            </ul>

            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </>
    )
}

export default UserDetail



//Props, state, effect