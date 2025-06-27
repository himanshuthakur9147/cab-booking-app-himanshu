"use client";

import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserFromSession = async () => {
      try {
        const res = await fetch("/api/users/auth/me");
        const data = await res.json();
        if (data.loggedIn) {
          setUser(data);
          setIsAuthenticated(true);
          if (data.role === "admin") setIsAdmin(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.log("Session fetch failed:", err);
        setIsAuthenticated(false);
      }
    };

    fetchUserFromSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        isAdmin,
        setIsAdmin,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
