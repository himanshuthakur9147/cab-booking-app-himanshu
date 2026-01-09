"use client";

import { useState, useEffect, useMemo } from "react";
import {
  FaWallet,
  FaRupeeSign,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import Navbar from "../Navbar";

export default function WalletProfile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [creditDate, setCreditDate] = useState(null);

  /* Fetch last credit transaction */
  useEffect(() => {
    if (!user?.user?.phone) return;

    const fetchLastCredit = async () => {
      try {
        const res = await fetch("/api/admin/wallet/transactions");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.message || "Failed to fetch wallet data");
        }

        // API already sorted by createdAt DESC
        const lastCredit = data.find(
          (t) =>
            t?.userId?.phone === user.user.phone &&
            t.type === "credit"
        );

        if (lastCredit) {
          setCreditDate(new Date(lastCredit.createdAt));
        }
      } catch (err) {
        console.error("Wallet fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLastCredit();
  }, [user]);

  if (loading) {
    return (
      <p className="text-center py-10 text-gray-600">
        Loading your wallet...
      </p>
    );
  }

  /* Format dates */
  const formattedCreditDate = useMemo(() => {
    if (!creditDate) return "N/A";
    return creditDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }, [creditDate]);

  const expiryDate = useMemo(() => {
    if (!creditDate) return "N/A";
    const exp = new Date(creditDate);
    exp.setFullYear(exp.getFullYear() + 1);
    return exp.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }, [creditDate]);

  const walletBalance = user?.user?.walletBalance || 0;
  const { name = "N/A", email = "N/A", mobile = "N/A" } = user.user;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* WALLET CARD */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <FaWallet className="text-blue-600 text-2xl" />
              <h2 className="text-xl font-semibold text-gray-800">
                Wallet Overview
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* BALANCE */}
              <div className="bg-blue-50 rounded-xl p-5 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Available Balance
                </p>
                <div className="flex justify-center items-center gap-2">
                  <FaRupeeSign className="text-blue-600 text-lg" />
                  <span className="text-4xl font-bold text-blue-700">
                    {walletBalance.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* USER INFO */}
              <div className="space-y-3">
                <InfoRow icon={<FaUser />} label="Name" value={name} />
                <InfoRow icon={<FaPhone />} label="Mobile" value={mobile} />
                <InfoRow icon={<FaEnvelope />} label="Email" value={email} />
                <InfoRow
                  icon={<FaCalendarAlt />}
                  label="Last Credit Date"
                  value={formattedCreditDate}
                />
                <InfoRow
                  icon={<FaCalendarAlt />}
                  label="Expiry Date"
                  value={expiryDate}
                />
              </div>
            </div>
          </div>

          {/* TERMS */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-red-500 text-xl" />
              <h3 className="text-lg font-semibold text-gray-800">
                Wallet Terms & Conditions
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-gray-600 list-disc list-inside">
              <li>
                <strong>Validity:</strong> Wallet balance is valid for one (1)
                year from the date of last credit.
              </li>
              <li>
                <strong>Non-Transferable:</strong> Wallet amount cannot be
                withdrawn or transferred to bank, UPI, or cash.
              </li>
              <li>
                <strong>Usage Restriction:</strong> Wallet balance can be used
                only for booking and payment of company services.
              </li>
              <li>
                <strong>Final Credit:</strong> Wallet credits once issued are
                final and non-reversible.
              </li>
              <li>
                <strong>Policy Updates:</strong> Company reserves the right to
                modify wallet terms at any time.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

/* Reusable Row */
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
      <div className="text-gray-600">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-800">
          {value}
        </p>
      </div>
    </div>
  );
}
