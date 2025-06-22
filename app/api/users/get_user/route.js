// app/api/get-user-by-phone/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";

// POST: Get user by phone number
export async function POST(req) {
  try {
    const { phone } = await req.json();
    console.log("GET USER PHONE",phone)

    if (!phone) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }

    await connectDB();

    const user = await User.findOne({phone });

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user by phone:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
