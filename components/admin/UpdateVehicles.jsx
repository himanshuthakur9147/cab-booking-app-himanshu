"use client";

import { useState, useEffect } from "react";
import UpdateVehicleModal from "./UpdateVehicleModal";

const AllVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Fetch all vehicles
  const fetchVehicles = async () => {
    try {
      const res = await fetch("/api/admin/cabs");
      const data = await res.json();
      if (data.success) {
        setVehicles(data.cabs);
        setFiltered(data.cabs);
      }
    } catch (err) {
      console.error("Error fetching vehicles:", err);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  // Search handler
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setFiltered(
      vehicles.filter((cab) =>
        cab.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // Optional: Close modal on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedVehicle(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🚗 All Vehicles</h2>

      <input
        type="text"
        placeholder="Search by vehicle name..."
        value={search}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center">No vehicles found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm border">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Fare/km</th>
                <th className="p-2">Seat</th>
                <th className="p-2">Image</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((cab) => (
                <tr key={cab._id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-mono text-xs">{cab._id.slice(-6)}</td>
                  <td className="p-4">{cab.name}</td>
                  <td className="p-4">₹{cab.per_km_fare}</td>
                  <td className="p-4">{cab.seat_capacity}</td>
                  <td className="p-4">
                    <img
                      src={cab.image}
                      alt={cab.name}
                      className="w-14 h-10 object-cover rounded"
                    />
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => setSelectedVehicle(cab)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded shadow-sm transition"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Update Modal */}
      {selectedVehicle && (
        <UpdateVehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onUpdated={fetchVehicles}
        />
      )}
    </div>
  );
};

export default AllVehicles;
