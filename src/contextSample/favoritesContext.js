import { createContext, useEffect, useState } from "react";

export const favoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {

    const [favorites, setfavorites] = useState([]);
    const [users, setusers] = useState([]);

    const values = {
        favorites,
        setfavorites,
        users
    }

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setusers(data);
            })

    }, [])


    return <favoritesContext.Provider value={values}>{children}</favoritesContext.Provider>

}