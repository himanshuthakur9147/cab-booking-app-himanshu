import  connectDB  from "@/lib/db";
import Booking from "@/models/Bookings";
import { NextResponse } from "next/server";
import Users from "@/models/User"
import Cabs from "@/models/Cabs";
// CONNECT TO DATABASE
await connectDB();

// POST: Save new booking
export async function POST(req) {
    console.log("tthe post data of bookings",req)
  try {
      const data = await req.json();
      const user=await Users.findOne({phone:data.user_phone})
      const car=await Cabs.findOne({_id:data.carId})
    const newBooking = await Booking.create({
        pickup_address:data.pickupLocation,
        drop_address:data.dropLocation,
        pickup_date:data.pickupDate,
        pickup_time:data.pickupTime,
        return_date:data.returnDate,
        name:data.name,
        email:data.email,
        rentalType:data.rentalType,
        effective_distance:data.effectiveDistance,
        duration:data.duration,
        paid_amount:data.paidAmount,
        total_estimate_fare:data.estimatedFare,
        service_type:data.service_type,
        booked_by:user,
        cab_type:car,
        payment_id:data.paymentId,
        order_id:data.order_id,
        payment_status:data.paymentStatus
        
    
    
      });
    return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });
  } catch (error) {
    console.error("Booking creation failed:", error);
    return NextResponse.json({ success: false, message: "Failed to create booking" }, { status: 500 });
  }
}

// GET: Fetch all bookings (ADMIN BOOKINGS)
export async function GET() {
  try {
    const allBookings = await Booking.find()
      .populate("booked_by")
      .populate("cab_type")
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, bookings: allBookings }, { status: 200 });
  } catch (error) {
    console.error("Fetching bookings failed:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch bookings" }, { status: 500 });
  }
}
