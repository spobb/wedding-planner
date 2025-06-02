import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import storageService from "../services/storage.service.js";
const AuthContext = createContext(undefined);

// eslint-disable-next-line
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = storageService.get('wedding-user');
        if (storedUser) setUser(storedUser);
        setLoading(false);
    }, []);

    const login = (userData) => {
        storageService.set('wedding-user', userData);
        setUser(userData);
        return;
    };
    const logout = () => {
        storageService.remove('wedding-user');
        setUser(null);
        return navigate('/login');
    };


    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};