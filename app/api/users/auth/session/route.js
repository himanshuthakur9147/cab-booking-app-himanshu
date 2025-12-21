import { authAdmin } from "@/lib/firebaseAdmin";
import { serialize } from "cookie";

export async function POST(req) {
  try {
    const { token } = await req.json();

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

    const sessionCookie = await authAdmin.createSessionCookie(token, {
      expiresIn,
    });

    const serializedCookie = serialize("session", sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: expiresIn / 1000,
      path: "/",
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          "Set-Cookie": serializedCookie,
          "Content-Type": "application/json",
        },
      }
    );

  } catch (err) {
    console.error("Session Cookie Creation Error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to create session cookie" }),
      { status: 401 }
    );
  }
}
