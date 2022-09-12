import { createContext, useState, useMemo } from "react";

const ContextState = createContext()

const StateProvider = ({children}) => {

    const [email, setEmail] = useState("user1");
    const [password, setPassword] = useState("1234");
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)


    //values
    const value = useMemo(() => ({
            email,
            password,
            isLoggedIn,

            setEmail,
            setPassword,
            setIsLoggedIn,
        }), [email, password, isLoggedIn]
    );

    return (
        <ContextState.Provider value={value}>
            {children}
        </ContextState.Provider>
    )
}


export { ContextState, StateProvider }
