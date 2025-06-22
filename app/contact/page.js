"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/6ae6926deef51d286758c15eb518e7fb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to send message.");
    }

    setIsSubmitting(false);
  };

  return (
  <>
  <Navbar/>
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 relative">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow-md">
        {/* Contact Details */}
        <div>
          <h2 className="text-xl font-semibold mb-2">📍 Head Office</h2>
          <p>Yatra Travel India</p>
          <p>123 Main Road, Sector 45</p>
          <p>Delhi, Delhi - 110001</p>
          <p>India</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">☎️ Call Us</h2>
          <p className="font-bold text-blue-700">+91-9876543210</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">📧 Email Us</h2>
          <p>support@yatratravelindia.com</p>
          <p>bookings@yatratravelindia.com</p>
          <p>partners@yatratravelindia.com</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">🕒 Working Hours</h2>
          <p>Available 24/7, including weekends and holidays.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">📲 Social Media</h2>
          <p>Facebook: facebook.com/yatratravelindia</p>
          <p>Instagram: instagram.com/yatratravelindia</p>
          <p>Twitter: twitter.com/yatratravels</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded min-h-[120px]"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-bold py-3 px-6 rounded-md w-full"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
            <p className="text-gray-700">Your message has been sent successfully.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
