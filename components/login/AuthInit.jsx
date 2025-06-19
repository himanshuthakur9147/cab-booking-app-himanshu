"use client";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AuthInit() {
  const { setUser, setIsAuthenticated } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/users/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

    fetchUser();
  }, []);

  return null;
}
