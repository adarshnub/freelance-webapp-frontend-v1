"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

import { toast } from "sonner";
export default function LoginPage() {
  const { loginWithGoogle, signUp, loginWithEmail } = useAuth() || {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = async () => {
    if (email && password && loginWithEmail) {
      await loginWithEmail(email, password);
    } else {
      toast.error("Please provide both email and password.");
    }
  };

  const handleSignUp = async () => {
    if (email && password && signUp) {
      await signUp(email, password);
    } else {
      toast.error("Please provide both email and password.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold mb-6">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>

        <div>
          <button
            onClick={loginWithGoogle}
            className="w-full mb-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Login with Google
          </button>

          <div className="flex items-center mb-4">
            <span className="flex-1 border-t border-gray-300"></span>
            <span className="mx-2 text-gray-500">OR</span>
            <span className="flex-1 border-t border-gray-300"></span>
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={isSignUp ? handleSignUp : handleLogin}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>

          <div className="mt-4 text-center">
            <span>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-500 hover:text-blue-600"
              >
                {isSignUp ? "Login" : "Sign Up"}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
