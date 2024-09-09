import { createContext } from "react";



const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={{
            signed: true,
            token: "asdsadawdw awadsdwa",
            email: "aula@fatectp.edu.br"
        }}>
            {children}
        </AuthContext.Provider>
    )
}



export default AuthContext;