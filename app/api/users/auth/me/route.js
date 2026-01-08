// /app/api/users/auth/me/route.js
import { cookies } from "next/headers";
import { authAdmin } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";
import db from "@/lib/db";
import User from "@/models/User";


export async function GET() {
  const cookieStore =await cookies();
  const token = await cookieStore.get("session")?.value;

  if (!token) {
    return NextResponse.json({ loggedIn: false }, { status: 401 });
  }

  try {
    // ✅ This will now work if session cookie is set correctly
    const decoded = await authAdmin.verifySessionCookie(token, true);
    await db()
    const user=await User.findOne({ phone: decoded.phone_number });
    if (!user) {
      return NextResponse.json({ loggedIn: false,error:"User not found" }, { status: 404 });
    }
    return NextResponse.json({
      loggedIn: true,
      user: {
        name: user.name || "",
        email: user.email || "",
        phone: decoded.phone_number,
        allowWhatsapp: user.allow_whatsapp || false,
        uid: decoded.uid,
        role: user.role ,
        walletBalance: user.walletBalance || 0,
      },
    });
  } catch (err) {
    console.error("Invalid session cookie:", err);
    return NextResponse.json({ loggedIn: false }, { status: 401 });
  }
}
