import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [brands, setBrands] = useState([]);
  const [vehicle, setVehicle] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const API_BRAND_URL = "http://localhost:4000/api/brands";
  const API_VEHICLE_URL = "http://localhost:4000/api/vehicles";

  // Fetch brands list
  const fetchBrands = async () => {
    try {
      const res = await axios.get(API_BRAND_URL);
      setBrands(res.data);
    } catch (err) {
      console.error("Error fetching brands:", err);
    }
  };

  // Fetch vehicle by ID
  const fetchVehicle = async () => {
    try {
      const res = await axios.get(`${API_VEHICLE_URL}/${id}`);
      setVehicle(res.data);
      if (res.data.image) {
        setImagePreview(`http://localhost:4000/uploads/vehicles/${res.data.image}`);
      }
    } catch (err) {
      console.error("Error fetching vehicle:", err);
    }
  };

  useEffect(() => {
    fetchBrands();
    fetchVehicle();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (const key in vehicle) {
        formData.append(key, vehicle[key]);
      }
      if (image) formData.append("image", image);

      const res = await axios.put(`${API_VEHICLE_URL}/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(res.data.message);
      setTimeout(() => navigate("/admin/vehicles"), 1200);
    } catch (err) {
      console.error("Error updating vehicle:", err);
      setMessage(err.response?.data?.message || "Failed to update vehicle");
    }
  };

  if (!vehicle) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <div className="container my-3 p-4 bg-white shadow rounded">
      <h2 className="text-primary mb-4">✏️ Edit Vehicle</h2>

      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit}>
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label className="form-label">Brand</label>
            <select
              className="form-select"
              name="brand"
              value={vehicle.brand}
              onChange={handleChange}
              required
            >
              <option value="">Select Brand</option>
              {brands.map((b) => (
                <option key={b.id} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">Model</label>
            <input
              type="text"
              name="model"
              className="form-control"
              value={vehicle.model}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Year</label>
            <input
              type="number"
              name="year"
              className="form-control"
              value={vehicle.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={vehicle.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Color</label>
            <input
              type="text"
              name="color"
              className="form-control"
              value={vehicle.color}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label className="form-label">Engine Capacity (cc)</label>
            <input
              type="number"
              name="engineCapacity"
              className="form-control"
              value={vehicle.engineCapacity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Transmission Type</label>
            <input
              type="text"
              name="transmissionType"
              className="form-control"
              value={vehicle.transmissionType}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Mileage (km)</label>
            <input
              type="number"
              name="mileage"
              className="form-control"
              value={vehicle.mileage}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Origin</label>
            <input
              type="text"
              name="origin"
              className="form-control"
              value={vehicle.origin}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Vehicle Type</label>
            <select
              name="vehicleType"
              className="form-select"
              value={vehicle.vehicleType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Coupe">Coupe</option>
              <option value="Pickup">Pickup</option>
              <option value="Muscle">Muscle</option>
              <option value="Convertible">Convertible</option>
              <option value="Crossover">Crossover</option>
              <option value="Sports Car">Sports Car</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Fuel Type</label>
            <select
              name="fuelType"
              className="form-select"
              value={vehicle.fuelType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          <div className="col-md-8">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              value={vehicle.description}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>
        </div>

        {/* Image Section */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Change Image (optional)</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="col-md-6 text-center">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="img-fluid rounded mt-2"
                style={{ maxHeight: "200px" }}
              />
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="row">
          <div className="col-md-12 text-end">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={() => navigate("/admin/vehicles")}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update Vehicle
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditVehicle;
