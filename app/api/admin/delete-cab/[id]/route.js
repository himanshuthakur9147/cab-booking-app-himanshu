// app/api/admin/delete-cab/[id]/route.js
import connectDB  from "@/lib/db";
import Cab from "@/models/Cabs";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } =await  params;

    const deletedCab = await Cab.findByIdAndDelete(id);

    if (!deletedCab) {
      return NextResponse.json(
        { success: false, message: "Cab not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Cab deleted successfully",
      deletedCab,
    });
  } catch (error) {
    console.error("Delete Cab Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
