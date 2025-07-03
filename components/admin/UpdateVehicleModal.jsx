"use client";

import { useState } from "react";
import { useToast } from "@/context/ToastContext";

const UpdateVehicleModal = ({ vehicle, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({ ...vehicle });
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "one_way") {
      setFormData((prev) => ({ ...prev, one_way: checked }));
    } else if (name === "8hr_80km" || name === "12hr_120km") {
      setFormData((prev) => ({
        ...prev,
        rental_service: { ...prev.rental_service, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/update-cab/${vehicle._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          km_limit: Number(formData.km_limit),
          per_km_fare: Number(formData.per_km_fare),
          tada: Number(formData.tada),
          night_charges: Number(formData.night_charges),
          seat_capacity: Number(formData.seat_capacity),
          extra_charge_per_km: Number(formData.extra_charge_per_km),
          rental_service: {
            "8hr_80km": Number(formData.rental_service["8hr_80km"]),
            "12hr_120km": Number(formData.rental_service["12hr_120km"]),
          },
        }),
      });

      const result = await res.json();

      if (result.success) {
        showToast("✅ Vehicle updated successfully!", "success");
        onUpdated(); // Refresh list
        onClose();   // Close modal
      } else {
        showToast("❌ Update failed", "error");
      }
    } catch (err) {
      console.error("Update error:", err);
      showToast("❌ Server error during update", "error");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-full max-w-2xl rounded shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Update Vehicle</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {[
            { label: "Vehicle Name", name: "name" },
            { label: "Image URL", name: "image" },
            { label: "KM Limit", name: "km_limit", type: "number" },
            { label: "Fare per KM", name: "per_km_fare", type: "number" },
            { label: "TADA", name: "tada", type: "number" },
            { label: "Night Charges", name: "night_charges", type: "number" },
            { label: "Seat Capacity", name: "seat_capacity", type: "number" },
            { label: "Extra Fare per KM", name: "extra_charge_per_km", type: "number" },
            { label: "8hr 80km Rate", name: "8hr_80km", type: "number" },
            { label: "12hr 120km Rate", name: "12hr_120km", type: "number" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name} className="flex flex-col gap-1">
              <label htmlFor={name} className="font-medium text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                id={name}
                value={
                  name === "8hr_80km" || name === "12hr_120km"
                    ? formData.rental_service[name]
                    : formData[name]
                }
                onChange={handleChange}
                className="input border px-3 py-2 rounded-md"
              />
            </div>
          ))}

          <div className="flex items-center gap-2 col-span-2">
            <input
              type="checkbox"
              id="one_way"
              name="one_way"
              checked={formData.one_way}
              onChange={handleChange}
            />
            <label htmlFor="one_way" className="text-sm font-medium text-gray-700">
              Available for One Way?
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`col-span-2 bg-blue-600 text-white py-2 rounded-md font-semibold transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? "Updating..." : "Update Vehicle"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateVehicleModal;
