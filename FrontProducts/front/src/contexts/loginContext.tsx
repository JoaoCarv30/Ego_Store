

import { createContext, useState } from 'react';

interface LoginProvider {
    children: React.ReactNode;
}


interface LoginContextData {
    isLogged: boolean;
    setIsLogged: (isLogged: boolean) => void;
}

export const LoginContext = createContext({} as LoginContextData);


export function LoginProvider({ children }: LoginProvider) {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <LoginContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </LoginContext.Provider>
    );

};