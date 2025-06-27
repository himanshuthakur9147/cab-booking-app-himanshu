import { NextResponse } from "next/server";
import connectDB from "@/lib/db"; // your DB connection
import User from "@/models/User";  // your Mongoose User model

export async function POST(req) {
  await connectDB();

  try {
    const { phone, user_id } = await req.json();

    const existing = await User.findOne({ phone });

    if (!existing) {
      await User.create({
        phone,
        createdAt: new Date(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
