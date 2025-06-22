"use client";
import React, { createContext, useEffect, useState } from "react";
import authgear from "@/lib/authgear";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const init = async () => {
      await authgear.configure({
        clientID: process.env.NEXT_PUBLIC_AUTHGEAR_CLIENT_ID,
        endpoint: process.env.NEXT_PUBLIC_AUTHGEAR_ENDPOINT,
        sessionType: "refresh_token",
      });

      if (authgear.sessionState === "AUTHENTICATED") {
        setIsAuthenticated(true);
        const info = await authgear.fetchUserInfo();
        setUserInfo(info);
      }
    };

    init().catch(console.error);
  }, []);

  const login = () =>
    authgear.startAuthentication({
      redirectURI: `${window.location.origin}/after-authentication`,
    });

  const logout = () =>
    authgear.logout({
      redirectURI: window.location.origin,
    });

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userInfo, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
