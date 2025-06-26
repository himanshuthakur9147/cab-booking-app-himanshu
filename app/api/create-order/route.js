// pages/api/create-order.js
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.REAL_KEY_ID,
  key_secret: process.env.REAL_KEY_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { amount } = req.body;

  try {
    const options = {
      amount: amount, // in paisa
      currency: "INR",
      receipt: "receipt_" + Date.now(),
      payment_capture: 1, // 🔥 ensures auto-capture
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ error: "Order creation failed" });
  }
}
