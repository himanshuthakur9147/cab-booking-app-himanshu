"use client";
import Navbar from "@/components/Navbar";

// components/PaymentOptions.jsx
export default function PaymentOptions() {
  return (
    <>
    <Navbar/>
    <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">🧾 Payment Options</h2>

      <div className="space-y-10">

        {/* Online Payments */}
        <div>
          <h3 className="text-xl font-semibold mb-2">💳 Online Payments</h3>
          <p className="mb-3">We accept all major online payment methods through secure gateways:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Credit Cards (Visa, MasterCard, RuPay, Amex)</li>
            <li>Debit Cards (All major Indian banks)</li>
            <li>Net Banking</li>
            <li>UPI (Google Pay, PhonePe, BHIM, Paytm, etc.)</li>
            <li>Wallets (Paytm, Amazon Pay, Freecharge, Mobikwik)</li>
          </ul>
          <p className="mt-2 text-sm text-green-700 font-medium">
            ✅ Secure transactions powered by Razorpay 
          </p>
        </div>

        {/* Cash Payments */}
        <div>
          <h3 className="text-xl font-semibold mb-2">💵 Cash Payments</h3>
          <p>Pay the driver directly at the end of your trip.</p>
          <p className="text-sm mt-1 text-gray-600">📌 Always ask for a payment receipt from the driver.</p>
        </div>

        {/* QR Code / UPI */}
        <div>
          <h3 className="text-xl font-semibold mb-2">📲 QR Code / UPI on Arrival</h3>
          <p>Scan the driver's UPI QR code at the time of pickup or drop.</p>
          <p className="text-sm mt-1 text-gray-600">⚡ Instant confirmation of payment.</p>
        </div>

        {/* Invoice & Receipts */}
        <div>
          <h3 className="text-xl font-semibold mb-2">🧾 Invoice & Receipts</h3>
          <p>A GST-compliant invoice will be sent to your email/SMS after your trip.</p>
          <p className="text-sm mt-1 text-gray-600">📧 Business travelers can request a detailed travel bill.</p>
        </div>

        {/* Security Note */}
        <div className="bg-gray-50 p-4 border rounded-md">
          <h4 className="text-lg font-medium mb-1">🔒 100% Secure Booking</h4>
          <p className="text-sm text-gray-700">
            Your payment is protected with SSL encryption and leading payment gateways. We never store your card details.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
