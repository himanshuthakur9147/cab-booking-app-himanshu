// /app/api/users/auth/session/route.js
import { authAdmin } from "@/lib/firebaseAdmin";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { token } = await req.json();

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

    const sessionCookie = await authAdmin.createSessionCookie(token, {
      expiresIn,
    });

    cookies().set({
      name: "session",
      value: sessionCookie,
      httpOnly: true,
      secure: true,          // MUST be true in production
      sameSite: "none",      // IMPORTANT
      maxAge: expiresIn / 1000,
      path: "/",
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Session Cookie Creation Error:", err);
    return Response.json(
      { error: err.message },
      { status: 401 }
    );
  }
}
