"use client";

import { useEffect } from "react";
import authgear from "@authgear/web";
import { useRouter } from "next/navigation";

const AfterAuthentication = () => {
  const router = useRouter();

  useEffect(() => {
    const finishLogin = async () => {
      try {
        await authgear.finishAuthentication();
        router.replace("/");
      } catch (e) {
        console.error("Authentication failed:", e);
      }
    };

    finishLogin();
  }, [router]);

  return <p>Logging in...</p>;
};

export default AfterAuthentication;
