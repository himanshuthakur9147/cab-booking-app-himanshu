"use client";

import Link from "next/link";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube, 
  FaMapMarkerAlt, FaBus, FaPhoneAlt, FaEnvelope, FaMapPin 
} from "react-icons/fa";

export default function Footer() {
  const tempoCities = [
    "Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
    "Jaipur", "Lucknow", "Chandigarh", "Surat", "Indore", "Bhopal", "Nagpur", "Coimbatore",
    "Visakhapatnam", "Vijayawada", "Patna", "Ranchi", "Varanasi", "Agra", "Udaipur", "Haridwar",
    "Rishikesh", "Amritsar", "Mysuru", "Shimla", "Manali", "Goa", "Tirupati", "Madurai"
  ];

  const tempoFleet = [
    "7 Seater Tempo Traveller", "8 Seater Tempo Traveller", "9 Seater Tempo Traveller", 
    "12 Seater Tempo Traveller", "15 Seater Tempo Traveller", "16 Seater Tempo Traveller", 
    "17 Seater Tempo Traveller", "18 Seater Tempo Traveller", "20 Seater Tempo Traveller", 
    "Force Urbania Van on Rent"
  ];

  const oneWayRoutes = [
    "Delhi to Jaipur", "Delhi to Agra", "Delhi to Mathura", "Delhi to Rishikesh",
    "Delhi to Haridwar", "Delhi to Dehradun", "Delhi to Chandigarh", "Delhi to Lucknow"
  ];

  return (
    <footer className="bg-[#001d3d] text-gray-200  pt-16 pb-6 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* === TOP ROW: Main Company Info === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          {/* Brand & About */}
          <div className="space-y-5">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
              YATRA <span className="text-orange-500">TRAVEL</span> INDIA
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              India's leading transport service provider specializing in premium Tempo Traveller 
              rentals and outstation cab services. Safe, reliable, and verified.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                <Link key={i} href="#" className="w-9 h-9 rounded bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500"></span> QUICK LINKS
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">» About Company</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">» Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-white hover:translate-x-1 transition-all inline-block">» Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white hover:translate-x-1 transition-all inline-block">» Privacy Policy</Link></li>
              <li><Link href="/blogs" className="hover:text-white hover:translate-x-1 transition-all inline-block">» Travel Blogs</Link></li>
            </ul>
          </div>

         
          {/* Trust Badge / Booking */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-white font-bold mb-2">24/7 Support</h4>
            <p className="text-xs text-gray-400 mb-4">Book your ride anytime, our experts are here to help.</p>
            <Link href="/contact" className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white text-center font-bold rounded-lg transition-colors">
              BOOK A CAB NOW
            </Link>
          </div>
        </div>

        {/* === MIDDLE ROW: Fleet & Routes (From Image 22a274) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12 border-b border-white/5">
          {/* Fleet Column */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Our Fleet Selection</h3>
            <div className="grid grid-cols-1 gap-y-2">
              {tempoFleet.map((v) => (
                <Link key={v} href="#" className="text-[13px] text-gray-400 hover:text-orange-400 transition flex items-center gap-2">
                  <span className="text-orange-500">»</span> {v}
                </Link>
              ))}
            </div>
          </div>

          {/* One Way Routes */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Popular One Way Taxi</h3>
            <div className="grid grid-cols-1 gap-y-2">
              {oneWayRoutes.map((route) => (
                <Link key={route} href="#" className="text-[13px] text-gray-400 hover:text-orange-400 transition flex items-center gap-2">
                  <span className="text-orange-500">»</span> {route}
                </Link>
              ))}
            </div>
          </div>

          {/* Outstation Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Outstation Services</h3>
            <ul className="space-y-3 text-[13px] text-gray-400">
              <li><Link href="#" className="hover:text-orange-400 transition inline-block">» Outstation Tempo Traveller from Delhi</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition inline-block">» Rajasthan Tour Packages</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition inline-block">» Himachal Special Tour Packages</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition inline-block">» Chardham Yatra by Tempo Traveller</Link></li>
            </ul>
          </div>
        </div>

        {/* === BOTTOM SECTION: City Directory (Fixed Grid UI) === */}
        <div className="pt-12 pb-8">
          <div className="flex items-center gap-3 mb-8">
            <FaMapMarkerAlt className="text-orange-500" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Tempo Traveller Services In Top Cities</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-3">
            {tempoCities.map((city) => (
              <Link 
                key={city} 
                href={`/tempo-traveller-in-${city.toLowerCase()}`} 
                className="text-sm text-gray-500 hover:text-white transition-all flex items-center gap-1 group truncate"
              >
                <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                Tempo Traveller in {city}
              </Link>
            ))}
          </div>
        </div>

        {/* === COPYRIGHT BAR === */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Yatra Travel India. Designed for safe journeys.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-tighter text-gray-600">
              <span className="flex items-center gap-1"><FaBus size={12} className="text-orange-500" /> GST Verified</span>
              <span className="flex items-center gap-1">All India Permit</span>
              <span className="flex items-center gap-1">Safe & Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}