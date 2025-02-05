"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "@/lib/firebase";
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { setCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const refreshTokenIfNeeded = async (currentUser: User) => {
    try {
      const token = await currentUser.getIdToken();
      setCookie("token", token, { maxAge: 60 * 60 * 24 * 7 });
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        refreshTokenIfNeeded(currentUser);
      }
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      setUser(result.user);
      router.push("/");

      if (token) {
        setCookie("token", token, { maxAge: 60 * 60 * 24 * 7 });
      }

      toast.success("Logged in with Google successfully!");
    } catch (error) {
      toast.error("Google login failed. Please try again.");
      console.error("Google login error:", error);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      setUser(userCredential.user);
      console.log(userCredential?.user,"users")
      router.push("/");

      if (token) {
        setCookie("token", token, { maxAge: 60 * 60 * 24 * 7 });
      }

      toast.success("Sign-up successful!");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email is already in use.");
      } else {
        toast.error("Sign-up failed! Please try again.");
      }
      console.error("Sign-up error:", error);
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();
      setUser(result.user);
      router.push("/");

      if (token) {
        setCookie("token", token, { maxAge: 60 * 60 * 24 * 7 });
      }

      toast.success("Logged in successfully!");
    } catch (error) {
      toast.error("Invalid email or password. Please try again.");
      console.error("Email login error:", error);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    deleteCookie("token");
    router.push("/login");
    toast.info("Logged out successfully.");
  };

  return (
    <AuthContext.Provider
      value={{ user, loginWithGoogle, signUp, loginWithEmail, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
