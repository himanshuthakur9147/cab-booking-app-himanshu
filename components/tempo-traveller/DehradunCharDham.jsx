"use client";
import React from "react";

function DehradunCharDham() {
  return (
    <section className="my-14 md:my-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-dark-btn to-orange-600 text-white shadow-xl">

          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 text-center">

            {/* Title */}
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
              Complete Char Dham Yatra from Dehradun
            </h3>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-white/90">
              Book a full Char Dham Yatra tempo traveller from Dehradun covering Yamunotri,
              Gangotri, Kedarnath, and Badrinath with a customizable itinerary and transparent
              pricing.
            </p>

            {/* Divider */}
            <div className="w-20 h-1 bg-white/40 mx-auto my-6 rounded-full"></div>

            {/* CTA hint (optional but clean) */}
            <p className="text-xs md:text-sm text-white/80">
              Ideal for families, senior citizens, and pilgrimage groups
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default DehradunCharDham;
