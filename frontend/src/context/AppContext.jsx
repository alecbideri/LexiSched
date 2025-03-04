import {createContext} from "react";
import {lawyers} from '../assets/assets.js'
// Creating and exporting the App context

export const AppContext = createContext();

// Create the appcontext provider


const AppContextProvider = (props) => {

    //  A value that holds my dummy data for lawyers

    const value = {
         lawyers
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
