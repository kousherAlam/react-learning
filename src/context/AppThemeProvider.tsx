import React, { useEffect, useState } from 'react';
import { AppThemeContext, AppTheme } from './index';


export const AppThemeContextProvider = (props: { 
    children: any, 
    theme: string,
}) => {
    const setTheme = (theme: 'light' | 'dark', fontSize: number) => {
        console.log('changing state', theme, fontSize);
        setState({ ...state, theme, fontSize });
    }

    const [state, setState] = useState<AppTheme>({
        fontSize: 1,
        theme: 'light'
    })

    useEffect(() => {
        console.log(props.theme);
    }, [props]);


    return <AppThemeContext.Provider value={
        {
            fontSize: state.fontSize,
            theme: state.theme,
        }
    }>
        {props.children}
    </AppThemeContext.Provider>
}