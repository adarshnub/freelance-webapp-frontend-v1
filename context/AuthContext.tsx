"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { auth, provider, signInWithPopup, signOut } from "@/lib/firebase";
import { GoogleAuthProvider, User, onAuthStateChanged } from "firebase/auth";
import { setCookie, deleteCookie } from "cookies-next";

interface AuthContextType {
  user: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      console.log("Google Access Token:", token);
      setUser(result.user);

      if (token) {
        setCookie("token", token, { maxAge: 60 * 60 * 24 }); 
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    deleteCookie("token"); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
