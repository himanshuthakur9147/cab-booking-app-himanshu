"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
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

  const dropdownRef = useRef(null);
  const userBtnRef = useRef(null);

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

  return (
    <div className="bg-white relative z-50">
      {/* TOP NAV */}
      <div className="flex justify-between items-center text-text-clr max-w-full text-sm lg:text-base lg:max-w-[80%] m-auto px-2 sm:px-4 py-3">
        {/* LOGO */}
        <div className="left-logo">
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={240}
              height={100}
              className="w-20 sm:w-24"
            />
          </Link>
        </div>

        {/* PHONE */}
        <div className="contact rounded-l-lg rounded-r-md border border-dark-btn">
          <div className="flex items-center">
            <FaPhoneAlt className="text-dark-btn ml-3" />
            <div className="ml-2 py-1 px-2 rounded-r-md text-xs xs:text-xs md:text-base text-text-clr font-semibold bg-dark-btn">
              +91 9876543210
            </div>
          </div>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="buttons hidden md:flex items-center gap-2">
          <Link href="/">
            <button className="text-slate-900 px-4 uppercase py-1 font-semibold text-xs md:text-sm lg:text-base hover:text-black transition duration-300">
              Home
            </button>
          </Link>
          <Link href="/about">
            <button className="text-slate-900 px-4 uppercase py-1 font-semibold text-xs md:text-sm lg:text-base hover:text-black transition duration-300">
              About Us
            </button>
          </Link>
          <Link href="/blogs">
            <button className="text-slate-900 uppercase px-4 py-1 font-semibold text-xs md:text-sm lg:text-base hover:text-black transition duration-300">
              Blogs
            </button>
          </Link>

          {isAuthenticated ? (
            <div
              ref={userBtnRef}
              onClick={() => setOpen(!open)}
              className="ml-2 text-text-clr text-xs md:text-base bg-dark-btn py-1 px-3 rounded-lg cursor-pointer hover:bg-light-btn font-semibold flex items-center"
            >
              <CgProfile className="text-2xl mr-1" />
              {user?.phone_number || "User"}
            </div>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="bg-dark-btn text-text-clr cursor-pointer px-4 py-1 text-xs md:text-base rounded-full border border-dark-btn hover:border-light-btn hover:bg-light-btn transition duration-100 ml-2"
            >
              Login
            </button>
          )}
        </div>

        {/* MOBILE MENU ICON */}
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
        <div className="absolute top-full right-0  w-fit bg-gray-100 shadow-md py-4 px-6  z-20">
          <ul className="flex flex-col space-y-3 text-sm text-gray-800 font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blogs" onClick={() => setMenuOpen(false)}>
                Blogs
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div
                  onClick={() => {
                    setOpen(!open);
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer flex items-center gap-2"
                >
                  <CgProfile className="text-xl" />
                  {user?.phone_number || "User"}
                </div>
              ) : (
                <button
                  onClick={() => {
                    setShowModal(true);
                    setMenuOpen(false);
                  }}
                  className="bg-dark-btn text-white px-3 py-1 rounded-full"
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