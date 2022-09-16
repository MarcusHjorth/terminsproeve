import { createContext, useState, useMemo } from "react";

const ContextState = createContext()

const StateProvider = ({children}) => {

    const [ email, setEmail ] = useState("user1");
    const [ password, setPassword ] = useState("1234");
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ token, setToken ] = useState("")
    const [ userID, setUserID ] = useState(null)


    //values
    const value = useMemo(() => ({
            email,
            password,
            isLoggedIn,
            isLoading,
            token,
            userID,

            setEmail,
            setPassword,
            setIsLoggedIn,
            setIsLoading,
            setToken,
            setUserID,
        }), [email, password, isLoggedIn, isLoading, token, userID]
    );

    return (
        <ContextState.Provider value={value}>
            {children}
        </ContextState.Provider>
    )
}


export { ContextState, StateProvider }
