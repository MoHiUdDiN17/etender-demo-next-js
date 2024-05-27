'use client'
import React, {useState,createContext } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [authentication,setAuthentication] = useState(null);
    return (
        <AuthContext.Provider value={{authentication,setAuthentication}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;