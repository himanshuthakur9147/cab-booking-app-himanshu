"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
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
  const {
    isAuthenticated,
    user,
    showModal,
    setShowModal,
  } = useAuth();

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const userBtnRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      setShowModal(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !userBtnRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const phoneDisplay = user?.phone || user?.phone_number || "User";

  return (
    <div className="bg-white relative z-50 shadow-sm border-b">
      {/* NAVBAR CONTAINER */}
      <div className="flex justify-between items-center max-w-full px-4 py-3 text-sm lg:text-base lg:max-w-[80%] mx-auto">
        {/* LEFT - Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={240}
              height={100}
              className="w-20 sm:w-24"
            />
          </Link>

          {/* Phone for small screens */}
          <div className="md:hidden flex items-center px-3 py-1 border border-gray-400 rounded-full text-xs sm:text-sm">
            <FaPhoneAlt className="text-dark-btn mr-1" />
            <span className="text-gray-700 font-medium">+91 9876543210</span>
          </div>
        </div>

        {/* CENTER - Nav links (Desktop only) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">
            <button className="text-gray-800 font-semibold  cursor-pointer hover:text-black transition">
              Home
            </button>
          </Link>
          <Link href="/about">
            <button className="text-gray-800 font-semibold cursor-pointer hover:text-black transition">
              About Us
            </button>
          </Link>
          <Link href="/blogs">
            <button className="text-gray-800 font-semibold cursor-pointer hover:text-black transition">
              Blogs
            </button>
          </Link>
        </div>

        {/* RIGHT - Buttons (Desktop only) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Phone (Desktop only) */}
          <div className="hidden md:flex items-center px-3 py-1 border border-gray-400 rounded-full text-sm">
            <FaPhoneAlt className="text-dark-btn mr-2" />
            <span className="text-gray-700 font-medium">+91 9876543210</span>
          </div>

          {/* Login / Profile */}
          {isAuthenticated ? (
            <div
              ref={userBtnRef}
              onClick={() => setOpen(!open)}
              className="bg-dark-btn text-white text-sm rounded-full px-4 py-1 cursor-pointer hover:bg-light-btn transition flex items-center"
            >
              <CgProfile className="text-xl mr-2" />
              {phoneDisplay}
            </div>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="bg-dark-btn text-white text-sm rounded-full cursor-pointer px-4 py-1 hover:bg-light-btn transition"
            >
              Login
            </button>
          )}

          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full px-4 py-1">
              Book Now
            </button>
          </Link>
        </div>

        {/* RIGHT - Hamburger Menu (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setOpen(false);
            }}
            className="text-3xl text-dark-btn"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-fit bg-gray-100 shadow-md py-4 px-10 z-20 md:hidden">
          <ul className="flex flex-col space-y-3 text-base text-gray-800 font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                <FaAustralSign /> About Us
              </Link>
            </li>
            <li>
              <Link href="/blogs" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                <LiaBlogSolid /> Blogs
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div
                  onClick={() => {
                    setOpen(true);
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer flex items-center gap-2"
                >
                  <CgProfile className="text-xl" />
                  {phoneDisplay}
                </div>
              ) : (
                <button
                  onClick={() => {
                    setShowModal(true);
                    setMenuOpen(false);
                  }}
                  className="bg-dark-btn text-white w-full px-3 py-1 rounded-full"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      )}

      {/* USER DROPDOWN MENU */}
      <UserDropDownMenu open={open} setOpen={setOpen} dropdownRef={dropdownRef} />

      {/* LOGIN MODAL */}
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Navbar;
