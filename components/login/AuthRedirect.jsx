"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { configureAuthgear, getAuthgear } from "@/lib/authgear";

export default function AuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        await configureAuthgear();
        const ag = getAuthgear();
        await ag.finishAuthentication();

        const userInfo = await ag.fetchUserInfo();
        const phone = localStorage.getItem("user_phone");

        // 🧠 Save both to your DB
        await fetch("/api/users/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userInfo.email,
            phone,
            user_id: userInfo.sub,
          }),
        });

        router.push("/");
      } catch (err) {
        console.error("Auth redirect error:", err);
        router.push("/");
      }
    };

    handleAuth();
  }, [router]);

  return null;
}
