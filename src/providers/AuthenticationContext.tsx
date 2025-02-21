import CryptoJS from "crypto-js";
import React, { createContext, useContext, useLayoutEffect, useState } from "react";
import { ENV } from "../keys";

const SECRET_KEY = ENV.secretKey;

interface User {
    email: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (userData: User, token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Encrypt function
const encryptData = (data: any) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

// Decrypt function
const decryptData = (ciphertext: string) => {
    try {
        const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
        return null;
    }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useLayoutEffect(() => {
        const savedUser = localStorage.getItem("user");
        const savedToken = localStorage.getItem("token");

        if (savedUser && savedToken) {
            const decryptedUser = decryptData(savedUser);
            const decryptedToken = decryptData(savedToken);

            console.log({
                decryptedUser,
                decryptedToken,
            })
            if (
                decryptedUser &&
                typeof decryptedUser === "object" &&
                decryptedUser.email
            ) {
                setUser(decryptedUser);
                setToken(decryptedToken);
            } else {
                console.warn("Invalid or tampered authentication data. Logging out...");
                logout();
            }
        }
    }, []);

    const login = (userData: User, authToken: string) => {
        const encryptedUser = encryptData(userData);
        const encryptedToken = encryptData(authToken);

        setUser(userData);
        setToken(authToken);

        localStorage.setItem("user", encryptedUser);
        localStorage.setItem("token", encryptedToken);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.history.replaceState(null, "", "/");
        window.location.href = "/";
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
