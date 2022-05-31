import React, { createContext, useCallback, useState } from "react";
import IAuthContext from './interfaces/IAuthContext';
import IUser from "./interfaces/IUser";

const v: IAuthContext = {
    logIn: function (mail: string, password: string) {
        throw new Error("Function not implemented.");
    },
    logOff: function () {
        throw new Error("Function not implemented.");
    }
};

export const AuthContext = createContext(v);

export interface IAuthMiddlewareProps {
    children?: React.ReactNode;
}

const AuthMiddleware: React.FC<IAuthMiddlewareProps> = ({children}) => {
    
    // dados do usuario logado
    const [user, setUser] = useState<IUser>();

    // funcao disparada quando o usuario tenta logar
    const logIn = useCallback<IAuthContext["logIn"]>((mail, password) => {
        console.log({mail, password});
        setUser({mail, name: 'Gabriela Pereira'});
    }, []);
    // funcao disparada quando o usuario tenta deslogar
    const logOff = useCallback<IAuthContext["logOff"]>(() => {
        console.log({"deslogando": user});
    }, [user]);

    return (
        <AuthContext.Provider value={{logIn, logOff, user}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthMiddleware;
