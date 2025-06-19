// app/api/users/update/route.js
import { authAdmin } from "@/lib/firebaseAdmin";
import { cookies } from "next/headers";
import  db  from "@/lib/db";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(req) {
  const cookieStore =await cookies();
  const sessionCookie = cookieStore.get("session")?.value;

  if (!sessionCookie) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = await authAdmin.verifySessionCookie(sessionCookie, true);
    const phone = decoded.phone_number;

    const { name, email, allowWhatsapp } = await req.json();
    await db()
    const user=await User.findOneAndUpdate({ phone }, {
        $set: {
          name,
          email,
          allowWhatsapp,
        },
      });
  

    return NextResponse.json({ success: true,message:"Profile updated successfully" });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
