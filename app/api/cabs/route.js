// app/api/cabs/route.js

import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Cabs from "@/models/Cabs";

export async function GET() {
  try {
    await dbConnect();
    const cabs = await Cabs.find().sort({ priority: 1 });  // ascending priority: lowest (highest rank) first
    return NextResponse.json(cabs, { status: 200 });
  } catch (error) {
    console.error("Error fetching cabs:", error);
    return NextResponse.json(
      { message: "Failed to fetch cabs", error: error.message },
      { status: 500 }
    );
  }
}
