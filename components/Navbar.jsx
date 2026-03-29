"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPhoneAlt, FaHome, FaChevronDown, FaWhatsapp, FaBus, FaCarSide, FaBlog } from "react-icons/fa";
import { FaAustralSign } from "react-icons/fa6";
import { LiaBlogSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import UserDropDownMenu from "./userMenu/UserDropDownMenu";
import Link from "next/link";
import LoginModal from "./login/LoginModal";

const Navbar = () => {
  const { isAuthenticated, user, showModal, setShowModal } = useAuth();

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tempoDropdown, setTempoDropdown] = useState(false);

  const dropdownRef = useRef(null);
  const userBtnRef = useRef(null);

  const tempoOptions = [
    "7 Seater Tempo Traveller", "8 Seater Tempo Traveller", "9 Seater Tempo Traveller", "12 Seater Tempo Traveller", 
    "15 Seater Tempo Traveller", "16 Seater Tempo Traveller", "17 Seater Tempo Traveller", "18 Seater Tempo Traveller", 
    "20 Seater Tempo Traveller", "Force Urbania Van"
  ];

  useEffect(() => {
    if (isAuthenticated) setShowModal(false);
  }, [isAuthenticated, setShowModal]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && dropdownRef.current && !dropdownRef.current.contains(e.target) && !userBtnRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const phoneDisplay = user?.phone || user?.phone_number || "User";

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-100 font-sans">
      
      {/* MAIN NAVBAR CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        
        {/* 1. LEFT: Logo (YTI) */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Yatra Travel India"
              width={160}
              height={50}
              className="w-20 sm:w-28 md:w-36 h-auto"
            />
          </Link>
        </div>

        {/* 2. MIDDLE (Mobile Only): WhatsApp Info */}
        <div className="md:hidden flex items-center justify-center flex-1 px-1">
          <a 
            href="https://wa.me/919044019511" 
            className="flex items-center text-green-600 group  border rounded-md p-2"
          >
            <FaWhatsapp className="text-xl" />
            <span className="text-sm space-x-1 font-bold text-gray-700 tracking-tighter whitespace-nowrap">+91 9044019511</span>
          </a>
        </div>

        {/* 3. CENTER (Desktop Only): Nav Links */}
        <div className="hidden lg:flex items-center gap-6 text-[14px] uppercase font-bold text-slate-700 ml-16">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
          
          <div 
            className="relative group py-6"
            onMouseEnter={() => setTempoDropdown(true)}
            onMouseLeave={() => setTempoDropdown(false)}
          >
            <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              Tempo Traveller <FaChevronDown className="text-[10px]" />
            </div>
            {tempoDropdown && (
              <div className="absolute top-[65px] left-0 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2">
                {tempoOptions.map((item) => (
                  <Link 
                    key={item} 
                   // href={`/tempo-traveller-${item.toLowerCase().replace(/\s+/g, '-')}`}
                    href={"#"}
                    className="block px-5 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="#" className="hover:text-blue-600 transition">Popular City</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
          <Link href="/blogs" className="hover:text-blue-600 transition">Blogs</Link>
        </div>

        {/* 4. RIGHT: Actions (Login & Book Now) */}
        <div className="flex items-center gap-1 sm:gap-3 ml-auto">
          
          {/* Desktop WhatsApp (Visible only on MD+) */}
          <div className="hidden md:flex flex-col items-end border-r border-gray-200 pr-4 mr-2">
            <span className="text-[9px] uppercase font-bold text-gray-400">24/7 Support</span>
            <a href="https://wa.me/919044019511" className="text-sm font-black text-slate-800 flex items-center gap-1">
              <FaWhatsapp className="text-green-500 text-lg" /> +91 9044019511
            </a>
          </div>

          {/* Login Section */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <div
                ref={userBtnRef}
                onClick={() => setOpen(!open)}
                className="cursor-pointer p-1.5 md:px-4 md:py-2 bg-slate-50 border rounded-full"
              >
                <CgProfile className="text-lg md:text-xl text-blue-600" />
                <span className="hidden md:inline ml-2 text-xs font-bold text-slate-700">{phoneDisplay}</span>
              </div>
            ) : (
              <button
                onClick={() => setShowModal(true)}
                className="text-sm  md:text-base font-bold hover:text-blue-700 cursor-pointer text-blue-600 md:text-slate-600 px-1 sm:px-2"
              >
                LOGIN
              </button>
            )}
          </div>

          {/* Book Now Button */}
          <Link href="/">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-black text-[9px] sm:text-[11px] md:text-xs px-2 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-lg md:rounded-full uppercase transition-all shadow-sm active:scale-95">
              Book<span className="hidden sm:inline"> Now</span>
            </button>
          </Link>

          {/* Hamburger (Mobile/Tablet) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-1.5 text-slate-800"
          >
            {menuOpen ? <HiX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t uppercase shadow-2xl lg:hidden z-40 max-h-[85vh] overflow-y-auto">
          <div className="p-4 space-y-1">
            <Link href="/" className="flex items-center gap-3 p-3 text-slate-800 font-bold hover:bg-blue-50 rounded-lg">
              <FaHome className="text-blue-500" /> Home
            </Link>
            <Link href="/about" className="flex items-center gap-3 p-3 text-slate-800 font-bold hover:bg-blue-50 rounded-lg">
              <FaAustralSign className="text-blue-500" /> About Us
            </Link>
               <Link href="#" className="flex items-center gap-3 p-3 text-slate-800 font-bold hover:bg-blue-50 rounded-lg">
              <FaBus className="text-blue-500" />Popular City
            </Link>
            <Link href="/contact" className="flex items-center gap-3 p-3 text-slate-800 font-bold hover:bg-blue-50 rounded-lg">
              <FaCarSide className="text-blue-500" /> Contact us
            </Link>
            <Link href="/blogs" className="flex items-center gap-3 p-3 text-slate-800 font-bold hover:bg-blue-50 rounded-lg">
              <FaBlog className="text-blue-500" /> Blogs
            </Link>
         
           
            <div className="p-3 bg-slate-50 rounded-xl mt-2">
              <div className="text-[10px] font-black text-slate-400 uppercase mb-2">Our Fleet</div>
              <div className="grid grid-cols-2 gap-2">
                {tempoOptions.map(opt => (
                   <Link key={opt} href="#" className="text-[11px] font-bold p-2 bg-white rounded border border-slate-100 text-center">{opt}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* UNCHANGED LOGIC COMPONENTS */}
      <UserDropDownMenu open={open} setOpen={setOpen} dropdownRef={dropdownRef} />
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;