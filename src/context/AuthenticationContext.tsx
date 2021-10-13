import { createContext } from 'react';

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
