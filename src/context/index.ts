import { createContext } from 'react';


export interface AppTheme {
    fontSize: number;
    theme: 'dark' | 'light';

}

export const defaultThemeValue: AppTheme = {
    fontSize: 1,
    theme: 'light',
}

export const AppThemeContext = createContext<AppTheme>(defaultThemeValue);


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
