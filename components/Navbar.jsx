"use client";

import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Image from 'next/image';
import LoginModal from './login/LoginModal'; // Make sure this path is correct
import { useAuth } from "@/context/AuthContext"; // Make sure this path is correct
import UserDropDownMenu from './userMenu/UserDropDownMenu';

const Navbar = () => {
  const { isAuthenticated, user,showModal,setShowModal } = useAuth();

   const [open, setOpen] = useState(false);

  console.log("Is Authenticated in Navbar:", isAuthenticated);
  return (
    <div className="bg-white relative">
      <div className="flex justify-between items-center text-text-clr max-w-[100%] text-sm lg:text-base lg:max-w-[80%]  m-auto px-4 py-3 relative">
        
        {/* Logo */}
        <div className="left-logo">
          <Image
            src="/logo.webp" // Relative to /public
            alt="Logo"
            width={120}
            height={100}
            className=' w-24 md:w-28 lg:w-32'
          />
        </div>

        {/* Phone Contact */}
        <div className="contact rounded-l-lg rounded-r-md border border-dark-btn">
          <div className="flex items-center">
            <FaPhoneAlt className="text-dark-btn m-1 ml-3" />
            <div className="ml-2 py-1 px-2 rounded-r-md border text-xs md:text-base text-text-clr border-dark-btn font-semibold bg-dark-btn">
              +919358473621
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons flex items-center gap-2">
          <button className="bg-white text-black px-4 py-1  text-xs md:text-xs lg:text-base border rounded-full hover:text-slate-900 transition duration-300">
           <span className='hidden sm:inline'>
            Download
            </span> 
            <span> App</span> 
          </button>

          {isAuthenticated ? (
            <div onClick={()=>setOpen(!open)} className="ml-2 text-text-clr text-xs md:text-base bg-dark-btn py-1 px-3 rounded-lg cursor-pointer hover:bg-sky-600 font-semibold flex items-center">
              <CgProfile className="text-2xl mr-1" />
              {user.user.phone || "Logged In"}
            </div>
          ) : (
            <button
              className="bg-dark-btn text-text-clr cursor-pointer px-4 py-1 text-xs md:text-base rounded-full border border-dark-btn hover:border-sky-600 hover:bg-sky-600 transition duration-100 ml-2"
              onClick={() => setShowModal(true)}
            >
              Login
            </button>
          )}
        </div>
      </div>
        <UserDropDownMenu open={open} setOpen={setOpen}/>
      {/* Login Modal */}
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Navbar;
