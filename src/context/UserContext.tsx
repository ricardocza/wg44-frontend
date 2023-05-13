import React, { createContext, useEffect, useState } from "react";
interface iUserContextProps {
    children: React.ReactNode
}

interface  iUserContext {
    language: string
    setLanguage: React.Dispatch<React.SetStateAction<string>>
}

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({children}:iUserContextProps) => {
    const [language, setLanguage] = useState("PT" as string)
    useEffect(()=> {
        
        localStorage.setItem("lang", language)
       
    }, [language])
   


    return <UserContext.Provider value={{language, setLanguage}}>{children}</UserContext.Provider>
}