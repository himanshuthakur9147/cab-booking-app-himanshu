// components/ProtectedRoute.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Loader from "../Loader/Loader";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated,showModal,setShowModal } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === false) {
      setShowModal(true); // show login modal
      router.replace("/"); // redirect to homepage

    }
  }, [isAuthenticated]);

  if (!isAuthenticated) return <Loader/>; // or a loader

  return children;
};

export default ProtectedRoute;
