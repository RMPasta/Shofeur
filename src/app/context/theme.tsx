'use client';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }:any) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <ThemeContext.Provider value={{ showLogin, setShowLogin, showSignUp, setShowSignUp }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);
