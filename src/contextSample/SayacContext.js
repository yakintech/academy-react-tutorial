import { createContext, useState } from "react";

export const sayacContext = createContext(null);

export const SayacProvider = ({ children }) => {

    const [sayac, setsayac] = useState(0);
    const [name, setname] = useState('Çağatay');
    const [cities, setcities] = useState([]);


    //public values
    const values = {
        sayac,
        setsayac,
        name,
        setname,
        cities,
        setcities
    }

    return <sayacContext.Provider value={values}>{children}</sayacContext.Provider>

}