import { createContext, useState, useMemo } from "react";

const ContextState = createContext()

const StateProvider = ({children}) => {

    const [email, setEmail] = useState("email");
    const [password, setPassword] = useState("password");
    
    //values
    const value = useMemo(
        () => ({
            email,
            password,
            
            setEmail,
            setPassword,
        })
    );

    return (
        <ContextState.Provider value={value}>
            {children}
        </ContextState.Provider>
    )
}


export { ContextState, StateProvider }
