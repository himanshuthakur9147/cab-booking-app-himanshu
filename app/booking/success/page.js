// app/booking/success/page.jsx
"use client";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full text-center">
        <FaCircleCheck className="text-green-500 mx-auto mb-4" size={64} />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Your cab has been successfully booked. We’ve sent a confirmation to your email. You will be contacted shortly for further trip details.
        </p>

        

        <Link href="/" className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
          Go to Homepage
        </Link>

        <p className="mt-6 text-sm text-gray-500">
          Need help?{" "}
          <Link href="/contact" className="text-orange-500 hover:underline">
            Contact our support
          </Link>
        </p>
      </div>
    </div>
  );
}
