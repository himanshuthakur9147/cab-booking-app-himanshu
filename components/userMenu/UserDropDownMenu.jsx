// components/ProfileDropdown.js
"use client";

import { useState, useRef, useEffect } from "react";
import { TiThList } from "react-icons/ti";
import { MdOutlineAccountTree } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext"; // if you're using context
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function UserDropDownMenu({open,setOpen}) {
  const {setUser,setIsAuthenticated}=useAuth()
  const router = useRouter();
 
const handleLogout = async () => {
  try {
    // 1. Sign out from Firebase
    await signOut(auth);

    // 2. Remove session cookie
    await fetch("/api/users/auth/logout", {
      method: "POST",
    });

    // 3. Optional: Reset user context and redirect
    if (setUser) setUser(null);
    if (setIsAuthenticated) setIsAuthenticated(false);
    setOpen(false); // Close the dropdown if it's open
    router.push("/"); // or wherever you want to redirect
  } catch (err) {
    console.error("Logout error:", err);
    alert("Failed to logout");
  }
};


  return (
    <div className="relative" >
      

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 top-0 w-56 bg-white border border-gray-200 shadow-lg z-50">
          <ul className="">
            <Link href={"/user/bookings"}><li onClick={()=>setOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300 cursor-pointer">
             <TiThList/> Bookings
            </li></Link>
           <Link href={"/user/profile"}> <li onClick={()=>setOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300 cursor-pointer">
            <MdOutlineAccountTree/> Account Settings
            </li></Link>
            <li
               onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-300 cursor-pointer"
            >
           <FaSignOutAlt /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
