"use client";

import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck, FaComments } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative py-12 md:py-20 px-4 mt-8 md:mt-12 mx-12 bg-[#004aad] overflow-hidden rounded-3xl  md:mx-4">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight px-2">
          Still Have Questions?
        </h2>
        <p className="text-blue-100 text-base md:text-xl max-w-2xl mx-auto mb-10 px-4">
          Whether it&apos;s a complex outstation route or choosing the right fleet size, 
          our travel experts are ready to assist you 24/7.
        </p>

        {/* Action Buttons Grid - Optimized: 2 cols on mobile, 4 on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto px-2">
          {/* Booking Button */}
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 md:gap-3 py-4 px-2 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold text-sm md:text-lg transition-all shadow-lg active:scale-95"
          >
            <FaCalendarCheck className="shrink-0" /> <span className="whitespace-nowrap">Book Now</span>
          </Link>

          {/* Call Button */}
          <a 
            href="tel:+919044019511" 
            className="flex items-center justify-center gap-2 md:gap-3 py-4 px-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-sm md:text-lg transition-all active:scale-95"
          >
            <FaPhoneAlt className="shrink-0" /> <span className="whitespace-nowrap">Call Us</span>
          </a>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/919044019511" 
            className="flex items-center justify-center gap-2 md:gap-3 py-4 px-2 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-2xl font-bold text-sm md:text-lg transition-all shadow-lg active:scale-95"
          >
            <FaWhatsapp size={20} className="shrink-0" /> <span className="whitespace-nowrap">WhatsApp</span>
          </a>

          {/* Support/Chat Button */}
          <Link 
            href="/contact" 
            className="flex items-center justify-center gap-2 md:gap-3 py-4 px-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-sm md:text-lg transition-all active:scale-95"
          >
            <FaComments className="shrink-0" /> <span className="whitespace-nowrap">Support</span>
          </Link>
        </div>

        {/* Trust Footer - Responsive flex layout */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 text-blue-100/70 text-[10px] md:text-xs font-bold uppercase tracking-widest">
           <span className="flex items-center gap-2">✓ No Hidden Charges</span>
           <span className="hidden sm:inline opacity-30">|</span>
           <span className="flex items-center gap-2">✓ Verified Chauffeurs</span>
           <span className="hidden sm:inline opacity-30">|</span>
           <span className="flex items-center gap-2">✓ 24/7 Roadside Assistance</span>
        </div>
      </div>
    </section>
  );
}