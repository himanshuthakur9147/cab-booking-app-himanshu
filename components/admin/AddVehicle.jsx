"use client";

import { useState, useCallback, useMemo } from "react";

const initialFormState = {
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
};

const AddVehicle = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Memoized options (optional in future if you use dropdowns or dynamic fields)
  const rentalKeys = useMemo(() => Object.keys(initialFormState.rental_service), []);

  // ✅ Handler optimized
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;

    if (name === "one_way") {
      setFormData((prev) => ({ ...prev, one_way: checked }));
    } else if (rentalKeys.includes(name)) {
      setFormData((prev) => ({
        ...prev,
        rental_service: { ...prev.rental_service, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }, [rentalKeys]);

  // ✅ Submit handler optimized
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const payload = {
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
      };

      const res = await fetch("/api/admin/add-cab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Vehicle added successfully");
        setFormData(initialFormState);
      } else {
        setMessage("❌ Failed to add vehicle");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">🚗 Add New Vehicle</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Vehicle Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="label">Vehicle Name</label>
            <input name="name" id="name" value={formData.name} onChange={handleChange} className="input" required />
          </div>
          <div>
            <label htmlFor="image" className="label">Image URL</label>
            <input name="image" id="image" value={formData.image} onChange={handleChange} className="input" required />
          </div>
          <div>
            <label htmlFor="seat_capacity" className="label">Seat Capacity</label>
            <input name="seat_capacity" id="seat_capacity" value={formData.seat_capacity} onChange={handleChange} type="number" className="input" required />
          </div>
          <div className="flex items-center gap-2 pt-6">
            <input type="checkbox" id="one_way" name="one_way" checked={formData.one_way} onChange={handleChange} />
            <label htmlFor="one_way" className="text-sm">Available for One Way</label>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="km_limit" className="label capitalize">Min. KM per day</label>
            <input name="km_limit" id="km_limit" value={formData.km_limit} onChange={handleChange} type="number" className="input" required />
          </div>
          <div>
            <label htmlFor="per_km_fare" className="label">Per KM Fare</label>
            <input name="per_km_fare" id="per_km_fare" value={formData.per_km_fare} onChange={handleChange} type="number" className="input" required />
          </div>
          <div>
            <label htmlFor="tada" className="label capitalize">TADA Charges per day</label>
            <input name="tada" id="tada" value={formData.tada} onChange={handleChange} type="number" className="input" required />
          </div>
          <div>
            <label htmlFor="night_charges" className="label capitalize">Night Charges per day</label>
            <input name="night_charges" id="night_charges" value={formData.night_charges} onChange={handleChange} type="number" className="input" required />
          </div>
          <div>
            <label htmlFor="extra_charge_per_km" className="label">Extra Fare Per KM</label>
            <input name="extra_charge_per_km" id="extra_charge_per_km" value={formData.extra_charge_per_km} onChange={handleChange} type="number" className="input" required />
          </div>
        </div>

        {/* Rental Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rentalKeys.map((key) => (
            <div key={key}>
              <label htmlFor={key} className="label">{key.replace("_", " ").toUpperCase()} Rate</label>
              <input name={key} id={key} value={formData.rental_service[key]} onChange={handleChange} type="number" className="input" required />
            </div>
          ))}
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
