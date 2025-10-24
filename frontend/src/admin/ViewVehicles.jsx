import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_VEHICLE_URL = "http://localhost:4000/api/vehicles";

  // Fetch all vehicles
  const fetchVehicles = async () => {
    try {
      const res = await axios.get(API_VEHICLE_URL);
      setVehicles(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching vehicles:", err);
      setLoading(false);
    }
  };

  // Delete vehicle
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this vehicle?")) {
      try {
        await axios.delete(`${API_VEHICLE_URL}/${id}`);
        setVehicles(vehicles.filter((v) => v._id !== id));
      } catch (err) {
        console.error("Error deleting vehicle:", err);
      }
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <div
      className="container my-0"
      style={{ height: "90vh", display: "flex", flexDirection: "column" }}
    >
      {/* Header - stays fixed */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-shrink-0">
        <h2 className="fw-bold text-primary">🚗 Vehicle Inventory</h2>
        <button
          className="btn btn-success d-flex align-items-center gap-2"
          onClick={() => navigate("/admin/vehicle/add")}
        >
          <FaPlus /> Add Vehicle
        </button>
      </div>

      {/* Scrollable Content */}
      <div style={{ overflowY: "auto", flexGrow: 1, paddingRight: "5px" }}>
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : vehicles.length === 0 ? (
          <p className="text-center text-muted mt-4">No vehicles found.</p>
        ) : (
          <div className="row g-4">
            {vehicles.map((v) => (
              <div key={v._id} className="col-md-4 col-lg-3">
                <div className="card vehicle-card shadow-sm border-0 h-100">
                  <div className="position-relative">
                    {v.image ? (
                      <img
                        src={`http://localhost:4000/uploads/vehicles/${v.image}`}
                        alt={v.model}
                        className="card-img-top rounded-top"
                        style={{
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        className="bg-light d-flex align-items-center justify-content-center"
                        style={{ height: "200px" }}
                      >
                        <span className="text-muted">No Image</span>
                      </div>
                    )}

                    {/* Edit/Delete Buttons */}
                    <div className="position-absolute top-0 end-0 m-2 d-flex flex-column">
                      <button
                        className="btn btn-light btn-sm mb-2 shadow-sm rounded-circle"
                        title="Edit Vehicle"
                        onClick={() =>
                          navigate(`/admin/vehicle/edit/${v._id || v.id}`)
                        }
                      >
                        <FaEdit className="text-primary" />
                      </button>
                      <button
                        className="btn btn-light btn-sm shadow-sm rounded-circle"
                        title="Delete Vehicle"
                        onClick={() => handleDelete(v._id)}
                      >
                        <FaTrashAlt className="text-danger" />
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-1">
                      {v.brand} {v.model}
                    </h5>
                    <p className="text-muted small mb-2">
                      {v.year} • {v.color}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-semibold text-success">
                        ${v.price.toLocaleString()}
                      </span>
                      <span className="badge bg-secondary">{v.vehicleType}</span>
                    </div>

                    <hr />

                    <div className="text-muted small">
                      <p className="mb-1">
                        <strong>Fuel:</strong> {v.fuelType}
                      </p>
                      <p className="mb-1">
                        <strong>Transmission:</strong> {v.transmissionType}
                      </p>
                      <p className="mb-1">
                        <strong>Mileage:</strong> {v.mileage} km
                      </p>
                      <p className="mb-0">
                        <strong>Origin:</strong> {v.origin}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Extra Styling */}
      <style>{`
        .vehicle-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border-radius: 16px;
        }

        .vehicle-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .vehicle-card img {
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }

        .btn-light:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default ViewVehicles;
