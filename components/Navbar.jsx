"use client";

import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import UserDropDownMenu from "./userMenu/UserDropDownMenu";
import { ag } from "@/lib/authgear";
import Link from "next/link";
import LoginModal from "./login/LoginModal";

const Navbar = () => {
    const { isAuthenticated, user,showModal,setShowModal } = useAuth();

   const [open, setOpen] = useState(false);

  const [showPhone, setShowPhone] = useState(false); // ⬅️ for toggle


  return (
    <div className="bg-white relative">
      <div className="flex justify-between items-center text-text-clr max-w-[100%] text-sm lg:text-base lg:max-w-[80%] m-auto px-2 sm:px-4 py-3">
        {/* === LOGO === */}
        <div className="left-logo">
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={240}
              height={100}
              className="w-20 sm:w-24 "
            />
          </Link>
        </div>

        {/* === PHONE === */}
        <div
          className="contact xs:rounded-l-lg xs:rounded-r-md rounded-full p-1 xs:p-0 border border-dark-btn relative group"
          onMouseEnter={() => setShowPhone(true)}
          onMouseLeave={() => setShowPhone(false)}
        >
          <div className="flex items-center">
            <FaPhoneAlt className="text-dark-btn m-1 xs:ml-3" />
            <div className="ml-2 py-1 px-2 rounded-r-md border hidden xs:inline xs:text-xs md:text-base text-text-clr border-dark-btn font-semibold bg-dark-btn">
              +91 9876543210
            </div>
          </div>

          {/* === PHONE NUMBER ON HOVER === */}
          {showPhone && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-3 py-1 bg-black text-white text-xs rounded-md whitespace-nowrap z-50">
              +91 9876543210
            </div>
          )}
        </div>

        {/* === BUTTONS / LOGIN === */}
        <div className="buttons flex items-center gap-2">
          <Link href={"/"}><button className="bg-white text-slate-900 hidden sm:inline px-4 uppercase py-1 font-semibold cursor-pointer   text-xs md:text-sm lg:text-base hover:text-black transition duration-300">
          Home
          </button></Link>
          <Link href={"/about"}><button className="bg-white text-slate-900 hidden sm:inline px-4 uppercase py-1 font-semibold cursor-pointer   text-xs md:text-sm lg:text-base hover:text-black transition duration-300">
          About Us
          </button></Link>
          <Link href={"/blogs"}><button className="bg-white text-slate-900 hidden sm:inline uppercase px-4 py-1  font-semibold cursor-pointer  text-xs md:text-sm lg:text-base hover:text-black transition duration-300">
          blogs
          </button></Link>

          {isAuthenticated ? (
            <div
              onClick={() => setOpen(!open)}
              className="ml-2 text-text-clr text-xs md:text-base bg-dark-btn py-1 px-3 rounded-lg cursor-pointer hover:bg-light-btn font-semibold flex items-center"
            >
              <CgProfile className="text-2xl mr-1" />
              {user?.phone_number || "User"}
            </div>
          ) : (
            <button
              onClick={()=>setShowModal(true)}
              className="bg-dark-btn text-text-clr cursor-pointer px-4 py-1 text-xs md:text-base rounded-full border border-dark-btn hover:border-light-btn hover:bg-light-btn transition duration-100 ml-2"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* === USER DROPDOWN MENU === */}
      <UserDropDownMenu open={open} setOpen={setOpen} />

            {/* Login Modal */}
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Navbar;
