import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AddVehicle = () => {
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmissionType, setTransmissionType] = useState("");
  const [mileage, setMileage] = useState("");
  const [origin, setOrigin] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState("");

  const API_BRAND_URL = "http://localhost:4000/api/brands";
  const API_VEHICLE_URL = "http://localhost:4000/api/vehicles";

  // Fetch brands from backend
  const fetchBrands = async () => {
    try {
      const res = await axios.get(API_BRAND_URL);
      setBrands(res.data);
    } catch (err) {
      console.error("Error fetching brands:", err);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("brand", brand);
      formData.append("model", model);
      formData.append("year", year);
      formData.append("price", price);
      formData.append("vehicleType", vehicleType);
      formData.append("engineCapacity", engineCapacity);
      formData.append("fuelType", fuelType);
      formData.append("transmissionType", transmissionType);
      formData.append("mileage", mileage);
      formData.append("origin", origin);
      formData.append("color", color);
      formData.append("description", description);
      if (image) formData.append("image", image);

      const res = await axios.post(API_VEHICLE_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(res.data.message);

      // Reset form
      setBrand("");
      setModel("");
      setYear("");
      setPrice("");
      setEngineCapacity("");
      setVehicleType("");
      setFuelType("");
      setTransmissionType("");
      setMileage("");
      setOrigin("");
      setColor("");
      setDescription("");
      setImage(null);
      setImagePreview(null);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred while adding vehicle");
    }
  };

  return (
    <div className="container my-3 p-4 bg-white shadow rounded">
      <h2 className="text-primary mb-4">🚗 Add Vehicle</h2>

      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit}>
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label className="form-label">Brand</label>
            <select
              className="form-select"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
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
              className="form-control"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Year</label>
            <input
              type="number"
              className="form-control"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Color</label>
            <input
              type="text"
              className="form-control"
              value={color}
              onChange={(e) => setColor(e.target.value)}
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
              className="form-control"
              value={engineCapacity}
              onChange={(e) => setEngineCapacity(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Transmission Type</label>
            <input
              type="text"
              className="form-control"
              value={transmissionType}
              onChange={(e) => setTransmissionType(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Mileage (km)</label>
            <input
              type="number"
              className="form-control"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Origin</label>
            <input
              type="text"
              className="form-control"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Vehicle Type</label>
            <select
              className="form-select"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
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
              className="form-select"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
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
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
            ></textarea>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="col-md-6">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="img-fluid rounded mt-2"
              />
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="row">
          <div className="col-md-12 text-end">
            <button type="submit" className="btn btn-success">
              Add Vehicle
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVehicle;
