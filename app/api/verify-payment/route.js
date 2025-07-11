// /app/api/verify-payment/route.js
import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.REAL_KEY_ID,
  key_secret: process.env.REAL_KEY_SECRET,
});

export async function POST(req) {
  const { order_id } = await req.json();

  try {
    const payments = await razorpay.orders.fetchPayments(order_id);
    const success = payments.items.find((p) => p.status === "captured");

    if (success) {
      return NextResponse.json({
        paymentStatus: "success",
        payment_id: success.id,
        order_id,
      });
    }

    return NextResponse.json({ paymentStatus: "failed" });
  } catch (error) {
    console.error("Verify Razorpay Error:", error);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
