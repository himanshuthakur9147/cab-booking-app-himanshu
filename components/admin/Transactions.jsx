"use client";

import React, { useEffect, useState } from "react";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
   

    const fetchTransactions = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `/api/admin/wallet/transactions`
        );

        const data = await res.json();
        console.log("Fetched Transactions:", data);
        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch transactions");
        }

        setTransactions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6">
      <h2 className="text-lg font-semibold mb-4">
        Wallet Transactions
      </h2>

      {/* Loading */}
      {loading && (
        <div className="text-center py-8 text-gray-500">
          Loading transactions...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-center py-8 text-red-600">
          {error}
        </div>
      )}

      {/* Empty */}
      {!loading && !error && transactions.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No transactions found
        </div>
      )}

      {/* Table */}
      {!loading && !error && transactions.length > 0 && (
        <div className="overflow-x-auto">
          <div className="max-h-[420px] overflow-y-auto border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="p-3 text-left">User ID</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-center">Type</th>
                  <th className="p-3 text-center">Amount</th>
                  <th className="p-3 text-center">Balance</th>
                  <th className="p-3 text-left">Reason</th>
                  <th className="p-3 text-left">Done By</th>
                </tr>
              </thead>

              <tbody>
                {(() => {
                  let runningBalance = 0;

                  return transactions.map((tx) => {
                    runningBalance +=
                      tx.type === "credit"
                        ? tx.amount
                        : -tx.amount;

                    return (
                      <tr
                        key={tx._id}
                        className="border-t hover:bg-gray-50"
                      >
                        <td className="p-3">
                          {tx.userId.phone}
                        </td>
                        <td className="p-3">
                          {new Date(tx.createdAt).toLocaleString("en-IN")}
                        </td>

                        <td
                          className={`p-3 text-center font-semibold ${
                            tx.type === "credit"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {tx.type.toUpperCase()}
                        </td>

                        <td className="p-3 text-center">
                          ₹{tx.amount}
                        </td>

                        <td className="p-3 text-center font-semibold">
                          ₹{runningBalance}
                        </td>

                        <td className="p-3">
                          {tx.reason || "-"}
                        </td>
                         <td className="p-3">
                          {tx.doneBy.name || "Admin"}
                        </td>
                      </tr>
                    );
                  });
                })()}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transactions;
