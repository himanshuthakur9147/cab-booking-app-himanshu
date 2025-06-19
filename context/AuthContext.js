"use client";

import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Fetch user from session
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/users/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data);
          setIsAuthenticated(true);
          if (data.role === "admin") setIsAdmin(true);
        }
      } catch (err) {
        console.log("User not logged in");
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin,showModal,setShowModal }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
