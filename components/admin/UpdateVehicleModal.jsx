"use client";

import { useState } from "react";
import { useToast } from "@/context/ToastContext";

const UpdateVehicleModal = ({ vehicle, onClose, onUpdated }) => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    ...vehicle,
    rental_service: vehicle.rental_service || { "8hr_80km": "", "12hr_120km": "" },
    one_way: !!vehicle.one_way,
  });

  const [loading, setLoading] = useState(false);

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
        onUpdated(); // Refresh parent
        onClose();   // Close modal
      } else {
        showToast("❌ Failed to update vehicle", "error");
      }
    } catch (err) {
      console.error("Update error:", err);
      showToast("❌ Server error during update", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-4 text-gray-500 text-xl hover:text-black"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-5 text-gray-800">✏️ Update Vehicle</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>
              <input
                type={type}
                id={name}
                name={name}
                value={
                  name === "8hr_80km" || name === "12hr_120km"
                    ? formData.rental_service[name]
                    : formData[name]
                }
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-orange-400"
                required
              />
            </div>
          ))}

          <div className="flex items-center gap-2 col-span-2 pt-2">
            <input
              type="checkbox"
              id="one_way"
              name="one_way"
              checked={formData.one_way}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="one_way" className="text-sm text-gray-700">
              Available for One Way?
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`col-span-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
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
