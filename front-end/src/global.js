import { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider =  props => {
    const [country,setCountry] = useState('');
    const [city,setCity] = useState();
    const [data,setData] = useState([]);
    const [selectedTime,setSelectedTime] = useState();
    const [selectedData,setSelectedData] = useState();
    
    return (
        <GlobalContext.Provider value={{country,setCountry,city,setCity,data,setData,selectedTime,setSelectedTime,selectedData,setSelectedData}}>
            {props.children}
         </GlobalContext.Provider>
    )
}
