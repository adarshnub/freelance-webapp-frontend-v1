"use client";

import { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "@/lib/firebase";
import { GoogleAuthProvider, User } from "firebase/auth";

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      console.log("token:", token);
      console.log("user:", result.user);

      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <p>{user.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
}
