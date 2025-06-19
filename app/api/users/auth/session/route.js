// /app/api/users/auth/session/route.js
import { authAdmin } from "@/lib/firebaseAdmin";
import { cookies } from "next/headers";

export async function POST(req) {
  const { token } = await req.json(); // this is the ID Token from client

  try {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days in ms

    // ✅ This creates the actual Session Cookie
    const sessionCookie = await authAdmin.createSessionCookie(token, { expiresIn });

    // ✅ Set cookie using Next.js headers API
    let cookie=await cookies();
    cookie.set("session", sessionCookie, {
      maxAge: expiresIn / 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Session Cookie Creation Error:", err);
    return new Response(JSON.stringify({ error: "Failed to create session cookie" }), {
      status: 401,
    });
  }
}
