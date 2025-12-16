"use client";

import React from "react";
import Link from "next/link";
import {
  FaInfoCircle,
  FaTruck,
  FaClock,
  FaExclamationTriangle,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function ShippingPolicyPage() {
  return (
    <>
    <Navbar/>
    <main className="bg-gray-50 min-h-screen py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Shipping Policy
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Yatra Travel India ·{' '}
            <Link
              href="https://www.yatratravelindia.com"
              className="text-blue-600 hover:underline"
            >
              www.yatratravelindia.com
            </Link>
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 space-y-10">
          {/* Overview */}
          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
              <FaInfoCircle className="text-blue-600" /> Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Yatra Travel India, we are committed to providing transparent and
              reliable service delivery. Please read this Shipping Policy to
              understand how our services are delivered after successful
              payment.
            </p>
          </section>

          {/* No Physical Shipping */}
          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
              <FaTruck className="text-blue-600" /> No Physical Shipping
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yatra Travel India is a service-based travel and booking provider.
              We do not ship any physical products.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Travel bookings</li>
              <li>Cab and vehicle rentals</li>
              <li>Tour packages</li>
              <li>Trip planning and coordination</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              All services are delivered digitally or in person, as per the
              customer’s confirmed itinerary. No courier, postal, or logistics
              shipping is involved.
            </p>
          </section>

          {/* Service Delivery */}
          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
              <FaClock className="text-blue-600" /> Service Delivery & Confirmation
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Services are processed only after successful payment.</li>
              <li>
                Booking details and confirmations are shared via phone call,
                WhatsApp, email, or invoice.
              </li>
            </ul>
          </section>

          {/* Delivery Timeline */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Delivery Timeline</h2>
            <p className="text-gray-700 leading-relaxed">
              Service timelines depend on the nature of the booking and travel
              schedule. Exact details are communicated at the time of
              confirmation, and any updates are shared promptly.
            </p>
          </section>

          {/* Delays */}
          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
              <FaExclamationTriangle className="text-blue-600" /> Delays & Exceptions
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Customer unavailability or delayed response</li>
              <li>Changes in travel plans</li>
              <li>External or unforeseen circumstances</li>
            </ul>
            <p className="text-gray-700 mt-3">
              In such cases, customers are informed and assisted accordingly.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">Yatra Travel India</p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-600" /> +91 9044019511
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-600" />
                yatratravelindia.com@gmail.com
              </p>
              <p className="text-sm text-gray-600">
                Business Hours: Monday to Saturday, 10:00 AM – 7:00 PM
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>

    </>
  );
}
