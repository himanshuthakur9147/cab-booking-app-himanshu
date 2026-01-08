"use client";

import { useState } from "react";
import { FaSearch, FaPhoneAlt } from "react-icons/fa";
import { useToast } from "@/context/ToastContext";


export default function WalletDashboard({adminPhone,setActiveTab}) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("credit");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
const { showToast } = useToast();
const [adminId,setAdminId]=useState("");

const [phone, setPhone] = useState("");
const [user, setUser] = useState("");


const onSearch=async ()=>{

      const res = await fetch("/api/users/get_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         phone
        }),
      });
      const res2 = await fetch("/api/users/get_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         phone:adminPhone
        }),
      });

      const data = await res.json();
      const data2 = await res2.json();

      if (!res.status===200) {
        throw new Error(data.error || "No User Found with this data");
      }

      // Update UI balance instantly
      setPhone(data.user.phone);
      setUser(data.user);
      setBalance(data.user.walletBalance)
      setAdminId(data2.user._id);
     
};
  const handleSearch = () => {
    if (phone.length !== 10) {
      showToast("Please enter a valid 10-digit phone number","error");
      return;
    }
    onSearch(phone);
  };

  const handleSubmit = async () => {
    if (!amount || amount <= 0) {
     showToast("Please enter a valid amount","error");
      return;
    }

    if (!description.trim()) {
      showToast("Please enter a description","error");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/admin/wallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId:user._id,
          amount: Number(amount),
          type,
          reason: description,
          doneBy:adminId
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Transaction failed");
      }

      // Update UI balance instantly
      setBalance(data.balance);

      // Reset form
      setAmount("");
      setDescription("");

      showToast("Transaction successful ✅", "success");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
  <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">

    {/* Header */}
    <h1 className="text-2xl font-bold text-center mb-6">
      Wallet Dashboard
    </h1>

    {/* 🔍 Search User Section */}
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2 text-gray-700">
        Search User by Phone Number
      </label>

      <div className="flex items-stretch gap-2">
        {/* Country Code */}
        <div className="flex items-center gap-2 border rounded-lg px-3 bg-gray-50">
          <FaPhoneAlt className="text-gray-500 text-sm" />
          <span className="text-gray-700 font-medium text-sm">+91</span>
        </div>

        {/* Phone Input */}
        <input
          type="tel"
          maxLength={10}
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value.replace(/\D/g, ""))
          }
          placeholder="Enter phone number"
          className="flex-1 border rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg flex items-center justify-center transition"
        >
          <FaSearch />
        </button>
      </div>
    </div>

    {/* User Info */}
    {user && (
      <div className="bg-gray-50 border rounded-xl p-4 mb-6">
        <p className="font-semibold text-lg">{user?.name || "User Name"}</p>
        <p className="text-gray-600 text-sm mt-1">
          Wallet Balance
        </p>
        <p className="text-xl font-bold text-green-600">
          ₹{balance.toFixed(2)}
        </p>
      </div>
    )}

    {/* Divider */}
    <div className="border-t my-6"></div>

    {/* New Transaction */}
    <h2 className="font-semibold mb-4 text-gray-800">
      New Transaction
    </h2>

    {/* Amount */}
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        Amount
      </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
        placeholder="5000"
      />
    </div>

    {/* Type */}
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        Type
      </label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
      >
        <option value="credit">Credit</option>
        <option value="debit">Debit</option>
      </select>
    </div>

    {/* Description */}
    <div className="mb-6">
      <label className="block text-sm font-medium mb-1">
        Description
      </label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
        placeholder="e.g. Recharge, Booking, Refund"
      />
    </div>

    {/* Submit */}
    <button
      onClick={handleSubmit}
      disabled={loading}
      className={`w-full py-2.5 rounded-lg font-semibold text-white transition ${
        loading
          ? "bg-green-400 cursor-not-allowed"
          : "bg-green-600 hover:bg-green-700"
      }`}
    >
      {loading ? "Processing..." : "Submit Transaction"}
    </button>

    {/* View Transactions */}
    <button
      className="w-full mt-4 bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
      onClick={() => setActiveTab("transactions")}
    >
      View All Transactions
    </button>

  </div>
</div>

  );
}
