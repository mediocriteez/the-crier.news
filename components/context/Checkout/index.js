"use client"

import { createContext } from "react"

const CheckoutContext = createContext()

const CheckoutContextProvider = ({children}) => {

    return(
        <CheckoutContext.Provider value={{}} >
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutContextProvider