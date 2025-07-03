"use client";
import { useToast } from "@/context/ToastContext"; // ✅ import toast context
import React, { useEffect, useState } from "react";
import Image from "next/image";

const AllVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState(null);
   const { showToast } = useToast(); // ✅ access toast
  const [isDeleting, setIsDeleting] = useState(false); // ✅ for disabling delete button

  // Fetch vehicles from API
  const fetchVehicles = async () => {
    try {
      const res = await fetch("/api/admin/cabs");
      const data = await res.json();
      if (data.success) {
        setVehicles(data.cabs);
      }
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  // Delete confirmed
  const handleDelete = async () => {
  setIsDeleting(true); // Disable button
  try {
    const res = await fetch(`/api/admin/delete-cab/${deleteTarget._id}`, {
      method: "DELETE",
    });
    const result = await res.json();

    if (result.success) {
      setVehicles((prev) => prev.filter((v) => v._id !== deleteTarget._id));
      setDeleteTarget(null);
      showToast("✅ Vehicle deleted successfully"); // ✅ show toast
    } else {
      showToast("❌ Failed to delete vehicle");
    }
  } catch (err) {
    console.error("Error deleting vehicle:", err);
    showToast("❌ Something went wrong");
  } finally {
    setIsDeleting(false); // Re-enable button
  }
};


  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        🚘 All Registered Vehicles
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading vehicles...</p>
      ) : vehicles.length === 0 ? (
        <p className="text-center text-gray-500">No vehicles found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle._id}
              className="bg-white border shadow rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-52">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  layout="fill"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-4 space-y-2">
                <h2 className="text-lg font-bold text-gray-800">
                  {vehicle.name}
                </h2>
                <p className="text-sm text-gray-600 font-mono">
                  ID: {vehicle._id}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-3 text-sm text-gray-700">
                  <div>
                    <strong>Fare/km:</strong> ₹{vehicle.per_km_fare}
                  </div>
                  <div>
                    <strong>Seat Capacity:</strong> {vehicle.seat_capacity}
                  </div>
                  <div>
                    <strong>KM Limit:</strong> {vehicle.km_limit}
                  </div>
                  <div>
                    <strong>TADA:</strong> ₹{vehicle.tada}
                  </div>
                  <div>
                    <strong>Night Charges:</strong> ₹{vehicle.night_charges}
                  </div>
                  <div>
                    <strong>Extra Charge/km:</strong> ₹
                    {vehicle.extra_charge_per_km}
                  </div>
                  <div>
                    <strong>One Way:</strong>{" "}
                    {vehicle.one_way ? "✅ Yes" : "❌ No"}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">
                    Rental Service:
                  </h4>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                    <li>
                      8hr 80km: ₹{vehicle.rental_service?.["8hr_80km"] || 0}
                    </li>
                    <li>
                      12hr 120km: ₹{vehicle.rental_service?.["12hr_120km"] || 0}
                    </li>
                  </ul>
                </div>

                <div className="flex justify-end mt-4 gap-2">
                  <button
                    onClick={() => setDeleteTarget(vehicle)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                  {/* You can add update button here if needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              Confirm Delete
            </h3>
            <p className="text-gray-700 mb-4">
              Are you sure you want to delete{" "}
              <strong>{deleteTarget.name}</strong>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-1 rounded border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
             <button
  onClick={handleDelete}
  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
  disabled={isDeleting}
>
  {isDeleting ? "Deleting..." : "Delete"}
</button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllVehicles;
