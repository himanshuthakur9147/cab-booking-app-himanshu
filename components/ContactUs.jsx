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
      const response = await fetch(
        "https://formsubmit.co/ajax/6ae6926deef51d286758c15eb518e7fb",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

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
      <Navbar />

      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 text-gray-800">
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contact Us | Yatra Travel India
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto font-bold leading-relaxed">
              Yatra Travel India is an independent travel agency offering reliable
              tempo traveller, cab, and bus rental services across India with
              transparent pricing and personalized customer support.
            </p>
          </div>

          {/* Info + Form */}
          <div className="grid md:grid-cols-2 gap-8 bg-white p-6 md:p-8 rounded-xl shadow-lg">
            {/* Contact Form (UNCHANGED STRUCTURE) */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-gray-50 p-6 rounded-lg"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="font-bold">
                <h2 className="text-xl font-bold mb-2">About Us</h2>
                <p className="text-gray-600 font-semibold leading-relaxed">
                  Looking for reliable and affordable Tempo Traveller, Cab, or
                  Bus Rental Services across India? Get in touch with Yatra
                  Travel India today. We are here to help you plan a smooth,
                  safe, and comfortable journey.
                </p>
                <p className="text-gray-600 font-semibold mt-3">
                  Whether it’s outstation trips, local sightseeing, pilgrimage
                  tours, weddings, or corporate travel, our team is available
                  <strong> 24×7</strong> to assist you.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">For New Booking</h2>
                <p className="font-semibold">We are always happy to hear from you</p>
                <p>
                  <strong>New Booking:</strong>{" "}
                  <span className="text-gray-900 font-bold">
                    +91 9044019511
                  </span>
                </p>
                <p>
                  <strong>Vendor Support:</strong>{" "}
                  <span className="text-gray-900 font-bold">
                    +91 9119947931
                  </span>
                </p>
              </div>
<div>
  <h2 className="text-xl font-bold mb-2"> Email Us</h2>

  <p>
    <strong>Customer Support:</strong>{" "}
    <a
      href="mailto:support@yatratravelindia.com"
      className="text-blue-600 font-semibold hover:underline"
    >
      support@yatratravelindia.com
    </a>
  </p>

  <p>
    <strong>Bookings:</strong>{" "}
    <a
      href="mailto:bookings@yatratravelindia.com"
      className="text-blue-600 font-semibold hover:underline"
    >
      bookings@yatratravelindia.com
    </a>
  </p>

  <p>
    <strong>Vendor / Partner Support:</strong>{" "}
    <a
      href="mailto:partners@yatratravelindia.com"
      className="text-blue-600 font-semibold hover:underline"
    >
      partners@yatratravelindia.com
    </a>
  </p>
</div>
 <div>
                <h2 className="text-xl font-bold mb-2"> Working Hours</h2>
                <p>24×7 Support – Including weekends & holidays</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2"> Head Office</h2>
                <p>44A, Sardar Patel Marg</p>
                <p>Civil Lines, Prayagraj</p>
                <p>Uttar Pradesh – 211001</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2"> Bangalore Office</h2>
                <p>114/7, Mahatma Gandhi Road</p>
                <p>Ashok Nagar, Bengaluru</p>
                <p>Karnataka – 560001</p>
              </div>


             
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-700">
              Your message has been sent successfully. Our team will contact you
              shortly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
