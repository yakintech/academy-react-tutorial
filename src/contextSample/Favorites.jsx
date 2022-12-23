import React, { useContext } from 'react'
import { favoritesContext } from './favoritesContext'

function Favorites() {

    let { favorites, setfavorites } = useContext(favoritesContext);


    const deleteItem = (id) => {

        let filteredFavorites = favorites.filter(q => q.id != id);
        setfavorites([...filteredFavorites])
    }

    return (
        <>
            <button onClick={() => setfavorites([])}>Clear All</button>
            <h1>Favorites Length: {favorites.length}</h1>
            <ul>
                {
                    favorites && favorites.map((item) => {
                      return  <>
                            <li key={item.id}>{item.name}</li>
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                        </>
                    })
                }
            </ul>
        </>

    )
}

export default Favorites