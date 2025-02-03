"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export const Navbar = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) => {
  const router = useRouter();
  const { user, login, logout } = useAuth() || {};

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex justify-between items-center py-4 border-b">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src="/assets/logos/logo.png"
          alt="Freelance hub"
          width={168}
          height={40}
          className=""
        />
      </h1>
      <div className="flex space-x-4">
        <button
          className=" hover:bg-[#c74287] flex items-center gap-x-2 font-[700] bg-[#C40D6C] text-white px-2 rounded-[10px] text-sm"
          onClick={() => router.push("/freelance/post-project")}
        >
          Post a Project
        </button>

        <motion.button
          className="p-2 rounded-md border relative w-10 h-10 flex items-center justify-center"
          onClick={handleDarkModeToggle}
          initial={{ scale: 1 }}
          animate={{ scale: darkMode ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: darkMode ? -10 : 0, opacity: darkMode ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            ☀️
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: darkMode ? 0 : 10, opacity: darkMode ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            🌙
          </motion.div>
        </motion.button>
        <button
          className="hover:text-blue-500 flex items-center gap-x-2 text-sm"
          onClick={() => router.push("/profile")}
        >
          <div className="rounded-full  w-7 h-7 ">
            {user && user?.photoURL && (
              <Image
                src={user.photoURL}
                alt="user"
                width={27}
                height={27}
                objectFit="cover"
                className="rounded-full"
              />
            )}
          </div>
          <span>{user?.displayName || ""}</span>
        </button>

        <div className="flex items-center justify-center text-sm cursor-pointer">
          {user ? (
            <div onClick={logout}> sign out</div>
          ) : (
            <div onClick={login}>sign in</div>
          )}
        </div>
      </div>
    </nav>
  );
};
