import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.REAL_KEY_ID,
  key_secret: process.env.REAL_KEY_SECRET,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { amount } = body;

    if (!amount || isNaN(amount) || amount < 100) {
      return NextResponse.json({ error: "Amount must be at least ₹1" }, { status: 400 });
    }

    const options = {
      amount, // in paisa
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1, // auto-capture
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
