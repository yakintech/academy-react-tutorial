import { createContext, useState } from "react";

export const favoritesContext = createContext(null);


export const FavoritesProvider = ({children}) => {

    const [favorites, setfavorites] = useState([]);

    const values = {
        favorites,
        setfavorites
    }

    return <favoritesContext.Provider value={values}>{children}</favoritesContext.Provider>

}