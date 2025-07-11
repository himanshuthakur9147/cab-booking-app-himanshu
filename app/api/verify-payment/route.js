// /app/api/verify-payment/route.js

import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.REAL_KEY_ID,
  key_secret: process.env.REAL_KEY_SECRET,
});

export async function POST(req) {
  try {
    const { order_id } = await req.json();

    if (!order_id) {
      return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
    }

    const payments = await razorpay.orders.fetchPayments(order_id);
    console.log("Payments fetched for order", order_id, payments.items);

    // Find the most recent captured payment (common for UPI/card)
    const capturedPayment = payments.items.find((p) => p.status === "captured");

    if (capturedPayment) {
      return NextResponse.json({
        paymentStatus: "success",
        payment_id: capturedPayment.id,
        order_id,
        method: capturedPayment.method,
        email: capturedPayment.email,
        contact: capturedPayment.contact,
        amount: capturedPayment.amount / 100,
      });
    }

    // If not captured, check if UPI payment is in progress (authorized but not yet captured)
    const authorizedPayment = payments.items.find((p) => p.status === "authorized");
    if (authorizedPayment) {
      return NextResponse.json({
        paymentStatus: "pending",
        payment_id: authorizedPayment.id,
        order_id,
      });
    }

    return NextResponse.json({ paymentStatus: "failed", order_id });
  } catch (error) {
    console.error("Verify Razorpay Error:", error);
    return NextResponse.json(
      { error: "Payment verification failed. Try again.", details: error.message },
      { status: 500 }
    );
  }
}
