// /app/api/users/auth/session/route.js
import { authAdmin } from "@/lib/firebaseAdmin";
import { cookies } from "next/headers";

export async function POST(req) {
  const { token } = await req.json();
  console.log("the token in session route is", token)

  try {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

    const sessionCookie = await authAdmin.createSessionCookie(token, { expiresIn });
    console.log("inside try session route...")
    const cookieStore = cookies();
    cookieStore.set("session", sessionCookie, {
      maxAge: expiresIn / 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: "lax",
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
