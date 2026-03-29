"use client";

import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck, FaComments } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative py-20 px-4 mt-12 sm:px-10 bg-[#004aad] overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Still Have Questions?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Whether it&apos;s a complex outstation route or choosing the right fleet size, 
          our travel experts are ready to assist you 24/7.
        </p>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Booking Button */}
          <Link 
            href="/" 
            className="flex items-center justify-center gap-3 py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
          >
            <FaCalendarCheck /> Book Now
          </Link>

          {/* Call Button */}
          <a 
            href="tel:+919044019511" 
            className="flex items-center justify-center gap-3 py-4 px-6 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1"
          >
            <FaPhoneAlt /> Call Us
          </a>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/919044019511" 
            className="flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-2xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
          >
            <FaWhatsapp size={22} /> WhatsApp
          </a>

          {/* Support/Chat Button */}
          <Link 
            href="/contact" 
            className="flex items-center justify-center gap-3 py-4 px-6 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1"
          >
            <FaComments /> Get Support
          </Link>
        </div>

        {/* Trust Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 text-blue-100/60 text-sm font-semibold uppercase tracking-widest">
           <span className="flex items-center gap-2">✓ No Hidden Charges</span>
           <span className="flex items-center gap-2">✓ Verified Chauffeurs</span>
           <span className="flex items-center gap-2">✓ 24/7 Roadside Assistance</span>
        </div>
      </div>
    </section>
  );
}