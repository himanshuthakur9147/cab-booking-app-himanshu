// components/ProfileDropdown.js
"use client";

import { useState, useRef, useEffect } from "react";
import { TiThList } from "react-icons/ti";
import { MdOutlineAccountTree } from "react-icons/md";
import { FaSignOutAlt,FaEdit } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext"; // if you're using context
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function UserDropDownMenu({open,setOpen}) {
  const {setUser,setIsAuthenticated,isAuthenticated,user}=useAuth()
  const [userData, setUserData] = useState({});
  const router = useRouter();
 console.log("the dropdown user",user)
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


  useEffect(() => {
    const getUser = async () => {
      console.log("Inside the useeffect",user,userData)
      if (isAuthenticated && user!==null) {
        try {
          const res = await fetch("/api/users/get_user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone: user.user.phone }),
          });

          const data = await res.json();

          if (res.status) {
            console.log("User fetched from DB:", data.user);
            setUserData(data.user)
          } else {
            console.error("Fetch error:", data.error);
            router.push("/")
            setOpen(false)
          }
        } catch (err) {
          console.error("Request failed:", err);
          router.push("/")
          setOpen(false)
        }
      }
    };

    getUser();
  }, [isAuthenticated, user]);



  return (
    <div className="relative" >
      

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 top-0 w-56 bg-white border border-gray-200 shadow-lg z-50">
          <ul className="">
            <Link href={"/user/bookings"}><li onClick={()=>setOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300 cursor-pointer">
             <TiThList/>My Bookings
            </li></Link>
           <Link href={"/user/profile"}> <li onClick={()=>setOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300 cursor-pointer">
            <MdOutlineAccountTree/> Account Settings
            </li></Link>
           <Link href={"/user/wallet"}> <li onClick={()=>setOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300 cursor-pointer">
            <FaWallet/> My Wallet
            </li></Link>
          { userData.role==="admin"?
      
          <Link href={"/admin/dashboard"}> <li onClick={()=>setOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300 cursor-pointer">
            <RiAdminLine/> Admin Dashboard
            </li></Link> :""}

  {user.user.role==="admin" || user.user.role==="member" ? <Link href={"/admin/create"}> <li onClick={()=>setOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300 cursor-pointer">
            <FaEdit/> Blog Editor
            </li></Link> : ""}
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
