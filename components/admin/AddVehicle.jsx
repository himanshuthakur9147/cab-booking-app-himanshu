"use client";

import { useState } from "react";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    name: "",
    km_limit: "",
    per_km_fare: "",
    tada: "",
    night_charges: "",
    seat_capacity: "",
    one_way: false,
    rental_service: {
      "8hr_80km": "",
      "12hr_120km": "",
    },
    extra_charge_per_km: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "one_way") {
      setFormData((prev) => ({ ...prev, one_way: checked }));
    } else if (name === "8hr_80km" || name === "12hr_120km") {
      setFormData((prev) => ({
        ...prev,
        rental_service: {
          ...prev.rental_service,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/admin/add-cab", {
        method: "POST",
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

      const data = await res.json();
      if (data.success) {
        setMessage("✅ Vehicle added successfully");
        setFormData({
          name: "",
          km_limit: "",
          per_km_fare: "",
          tada: "",
          night_charges: "",
          seat_capacity: "",
          one_way: false,
          rental_service: { "8hr_80km": "", "12hr_120km": "" },
          extra_charge_per_km: "",
          image: "",
        });
      } else {
        setMessage("❌ Failed to add vehicle");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Server error");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">🚗 Add New Vehicle</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Vehicle Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Vehicle Name</label>
            <input name="name" value={formData.name} onChange={handleChange} className="input" required />
          </div>
          <div>
            <label className="label">Image URL</label>
            <input name="image" value={formData.image} onChange={handleChange} className="input" required />
          </div>
          <div>
            <label className="label">Seat Capacity</label>
            <input name="seat_capacity" value={formData.seat_capacity} onChange={handleChange} type="number" className="input" required />
          </div>
          <div className="flex items-center gap-2 pt-6">
            <input type="checkbox" id="one_way" name="one_way" checked={formData.one_way} onChange={handleChange} />
            <label htmlFor="one_way" className="text-sm">Available for One Way</label>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label capitalize">Min. KM per day</label>
            <input name="km_limit" value={formData.km_limit} onChange={handleChange} type="number" className="input" required />
          </div>
          <div>
            <label className="label">Per KM Fare</label>
            <input name="per_km_fare" value={formData.per_km_fare} onChange={handleChange} type="number" className="input" required />
          </div>
          <div>
            <label className="label capitalize">TADA Charges per day</label>
            <input name="tada" value={formData.tada} onChange={handleChange} type="number" className="input" required />
          </div>
          <div>
            <label className="label capitalize">Night Charges per day</label>
            <input name="night_charges" value={formData.night_charges} onChange={handleChange} type="number" className="input" required />
          </div>
          <div>
            <label className="label">Extra Fare Per KM</label>
            <input name="extra_charge_per_km" value={formData.extra_charge_per_km} onChange={handleChange} type="number" className="input" required />
          </div>
        </div>

        {/* Rental Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">8HR / 80KM Rate</label>
            <input name="8hr_80km" value={formData.rental_service["8hr_80km"]} onChange={handleChange} type="number" className="input" required />
          </div>
          <div>
            <label className="label">12HR / 120KM Rate</label>
            <input name="12hr_120km" value={formData.rental_service["12hr_120km"]} onChange={handleChange} type="number" className="input" required />
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow"
          >
            {loading ? "Adding Vehicle..." : "Add Vehicle"}
          </button>

          {message && (
            <p className={`mt-3 text-sm font-medium ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </div>
      </form>

      <style jsx>{`
        .input {
          border: 1px solid #ccc;
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 0.95rem;
          outline: none;
          width: 100%;
        }
        .input:focus {
          border-color: #f97316;
        }
        .label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #444;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default AddVehicle;
