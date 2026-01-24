"use client";
import React,{useEffect} from 'react'
import { useRouter } from 'next/navigation';

function page() {
    const router=useRouter();
    useEffect(()=>{
        document.title="Login - Cab Booking App"
        router.push("/");
    },[])
  return (
    <div>Loading....</div>
  )
}

export default page