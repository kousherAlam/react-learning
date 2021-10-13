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

