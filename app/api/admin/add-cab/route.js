// app/api/admin/add-cab/route.js
import connectDB from "@/lib/db";
import Cab from "@/models/Cabs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();

    const lastCab = await Cab.findOne().sort({ priority: -1 });
    const nextPriority = lastCab ? lastCab.priority + 1 : 1;

    const cab = new Cab({ ...data, priority: nextPriority });
    const saved = await cab.save();

    return NextResponse.json({ success: true, cab: saved });
  } catch (error) {
    console.error("Add Cab Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

