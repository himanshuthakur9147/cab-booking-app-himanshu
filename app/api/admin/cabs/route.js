// app/api/admin/cabs/route.js
import  connectDB  from "@/lib/db";
import Cab from "@/models/Cabs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const cabs = await Cab.find().sort({ createdAt: -1 }); // latest first
    return NextResponse.json({ success: true, cabs });
  } catch (error) {
    console.error("Fetch Cabs Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
