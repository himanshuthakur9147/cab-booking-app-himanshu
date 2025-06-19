"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-10 pb-6 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* Section 1: About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Yatra Travel India</h2>
          <p className="text-sm text-gray-400">
            Reliable cab rentals across India with safe, affordable, and timely services.
          </p>
        </div>

        {/* Section 2: Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className="hover:text-blue-400">Refund Policy</Link></li>
            <li><Link href="/payment-options" className="hover:text-blue-400">Payment Options</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Section 3: Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">One Way Cabs</Link></li>
            <li><Link href="/" className="hover:text-blue-400">Local Car Rentals</Link></li>
            <li><Link href="/" className="hover:text-blue-400">Round Trip Cabs</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Yatra Travel India. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link href="https://facebook.com" target="_blank" className="text-white hover:text-blue-500 transition transform hover:scale-110">
            <FaFacebookF size={18} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-white hover:text-blue-400 transition transform hover:scale-110">
            <FaTwitter size={18} />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="text-white hover:text-pink-500 transition transform hover:scale-110">
            <FaInstagram size={18} />
          </Link>
          <Link href="https://youtube.com" target="_blank" className="text-white hover:text-red-500 transition transform hover:scale-110">
            <FaYoutube size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
