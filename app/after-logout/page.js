"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authgear, configureAuthgear } from "@/lib/authgear";
import { useAuth } from "@/context/AuthContext";

export default function AfterLogout() {
  const router = useRouter();
  const { setUser, setIsAuthenticated, setIsAdmin } = useAuth();

  useEffect(() => {
    const logoutCleanup = async () => {
      await configureAuthgear();
      await authgear.clearSession();
      setUser(null);
      setIsAuthenticated(false);
      setIsAdmin(false);
      router.push("/");
    };

    logoutCleanup();
  }, [router, setUser, setIsAuthenticated]);

  return <div className="p-4">Logging out...</div>;
}
