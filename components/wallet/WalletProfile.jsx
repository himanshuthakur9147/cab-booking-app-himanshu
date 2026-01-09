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

  useEffect(() => {
    if (!user?.user?.phone) return;

    const fetchLastCredit = async () => {
      try {
        const res = await fetch("/api/admin/wallet/transactions");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.message || "Failed to fetch wallet data");
        }

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

  /* 🔒 Hooks MUST be before any return */
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

  if (loading) {
    return (
      <p className="text-center py-10 text-gray-600">
        Loading your wallet...
      </p>
    );
  }

  const walletBalance = user?.user?.walletBalance || 0;
  const { name = "N/A", email = "N/A", phone = "N/A" } = user.user;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <FaWallet className="text-blue-600 text-2xl" />
              <h2 className="text-xl font-semibold text-gray-800">
                Wallet Overview
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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

              <div className="space-y-3">
                <InfoRow icon={<FaUser />} label="Name" value={name} />
                <InfoRow icon={<FaPhone />} label="Mobile" value={phone} />
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

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-red-500 text-xl" />
              <h3 className="text-lg font-semibold text-gray-800">
                Wallet Terms & Conditions
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-gray-600 list-disc list-inside">
              <li><strong>Validity:</strong> The wallet balance is valid for a period of one year from the date of credit. Any unused balance after the validity period will automatically expire and cannot be claimed.</li>
              <li><strong>Non-Transferable & No Bank Withdrawal:</strong> Wallet balance cannot be transferred to any bank account, UPI, card, or withdrawn in cash under any circumstances.</li>
              <li><strong>Usage Restriction:</strong> The wallet balance can be used only for the purpose of booking confirmation  payment of services offered by the company. It cannot be used for any other purpose.</li>
              <li> Wallet credits once issued are final and subject to these Terms & Conditions.</li>
            
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
      <div className="text-gray-600">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
}
