import { NextResponse } from "next/server";
import db from "@/lib/db";
import Booking from "@/models/Bookings";
import User from "@/models/User";


export async function POST(request) {
  try {
   const {phone} = await request.json();
    console.log("Received phone number:", phone);
  
  
    

  
    await db();
    const user=await User.findOne({ phone});
    if (!user) {
      console.error("User not found for phone:", phone);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }


   

const bookings = await Booking.find({ booked_by: user._id })
  .populate("booked_by")
  .populate("cab_type")
  .sort({ createdAt: -1 });
      console.log("Fetched bookings from the DB:", bookings);
    return NextResponse.json({ bookings,ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}
