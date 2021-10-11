import { createContext, useState } from 'react';


export interface AppTheme {
    fontSize: number;
    theme: 'dark' | 'light';
    setTheme ?: (theme: 'light'|'dark', fontSize: number) => void;
}



export const AppThemeContext = createContext<AppTheme>({
    fontSize: 1,
    theme: 'light',
});


export interface AuthData {
    token: string;
    userName: string;
    userId: string;
    email: string;
}

export const AuthenticationContext = createContext<AuthData>({
    token: '',
    userName: '',
    userId: '',
    email: '',
});
