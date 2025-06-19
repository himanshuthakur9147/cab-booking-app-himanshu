// app/api/users/save/route.js
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  const { phone } = await req.json();

  if (!phone) {
    return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
  }

  try {
    let user = await User.findOne({ phone });

    if (!user) {
      user = await User.create({ phone });
    }

    return NextResponse.json({ user,message: "User saved successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
