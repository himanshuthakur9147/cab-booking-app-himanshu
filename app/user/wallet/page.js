"use client";

import { FaWallet, FaRupeeSign } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

export default function Page() {

    const {  user } = useAuth();
  return (
    <div className="max-w-sm w-full bg-white border rounded-lg shadow-sm p-5">
      <div className="flex items-center gap-3 mb-3">
        <FaWallet className="text-blue-600 text-xl" />
        <h2 className="text-lg font-semibold text-gray-800">
          Wallet Balance
        </h2>
      </div>

      <div className="flex items-center gap-1">
        <FaRupeeSign className="text-gray-700 text-lg" />
        <span className="text-3xl font-bold text-gray-900">
          {user.user.walletBalance.toLocaleString("en-IN")}
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Available balance
      </p>
    </div>
  );
}
