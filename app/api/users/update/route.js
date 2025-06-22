import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import db from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
   

  
   
    const { name, email, allowWhatsapp,phone } = await req.json();
    console.log("Update route",name, email, allowWhatsapp,phone)
    await db();

    const user = await User.findOneAndUpdate(
      { phone },
      {
        $set: {
          name,
          email,
          allow_whatsapp: allowWhatsapp, // match your DB field
        },
      },
      { new: true }
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
