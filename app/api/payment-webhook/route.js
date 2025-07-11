import { NextResponse } from "next/server";
import crypto from "crypto";

// Razorpay webhook secret
const WEBHOOK_SECRET = "YATRATRAVELINDIA";

export async function POST(req) {
  const body = await req.text(); // raw text for signature verification
  const razorpaySignature = req.headers.get("x-razorpay-signature");

  const expectedSignature = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpaySignature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const payload = JSON.parse(body);
  const event = payload.event;

  if (event === "payment.captured") {
    const payment = payload.payload.payment.entity;

    console.log("✅ Webhook Payment Captured:", payment.id, payment.order_id, payment.amount);

    // 🔥 OPTIONAL: Save payment to DB as fallback
    // await db.bookings.upsert({ ... })

    return NextResponse.json({ received: true });
  }

  return NextResponse.json({ status: "ignored" });
}
