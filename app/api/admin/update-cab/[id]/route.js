// app/api/admin/update-cab/[id]/route.js
import  connectDB  from "@/lib/db";
import Cab from "@/models/Cabs";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const updateData = await req.json();

    const updatedCab = await Cab.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedCab) {
      return NextResponse.json(
        { success: false, message: "Cab not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, cab: updatedCab });
  } catch (error) {
    console.error("Update Cab Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
