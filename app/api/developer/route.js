// app/api/hello/route.js

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "API Route is working!",created_by:"Abhisha Kumar Chittore",who_is_he:"Web Developer & Designer or I must say NEXT JS Web Developer with Tailwind CSS Designing skills and great command on seamless modern Database MongoDB.",created_at:"28/06/2025",buyer_name:"Himanshu Thankur",project_name:"Cab Booking App",project_description:"A cab booking app that allows users to book cabs for one-way and round trips, with features like payment integration, user profiles, and booking history.",tech_skills:"Next JS, Tailwind CSS, MongoDB, Razorpay, Google Maps API",got_through:"LinkedIn",project_duration:"less than 3 weeks",done_by:"Solo Coder AKC"});
}
