import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const BrandManagement = () => {
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:4000/api/brands";

  const fetchBrands = async () => {
    try {
      const res = await axios.get(API_URL);
      setBrands(res.data);
    } catch (error) {
      console.error("Error fetching brands:", error);
      setMessage("Failed to fetch brands");
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleAddBrand = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await axios.post(API_URL, { name });
      setName("");
      setMessage("Brand added successfully");
      fetchBrands();
    } catch (error) {
      console.error("Error adding brand:", error);
      setMessage(error.response?.data?.error || "Failed to add brand");
    }
  };

  const handleEditBrand = (brand) => {
    setEditId(brand.id);
    setEditName(brand.name);
  };

  const handleUpdateBrand = async (id) => {
    if (!editName.trim()) return;

    try {
      await axios.put(`${API_URL}/${id}`, { name: editName });
      setEditId(null);
      setEditName("");
      setMessage("Brand updated successfully");
      fetchBrands();
    } catch (error) {
      console.error("Error updating brand:", error);
      setMessage(error.response?.data?.error || "Failed to update brand");
    }
  };

  const handleDeleteBrand = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMessage("Brand deleted successfully");
      fetchBrands();
    } catch (error) {
      console.error("Error deleting brand:", error);
      setMessage(error.response?.data?.error || "Failed to delete brand");
    }
  };

  return (
    <div className="container my-1 p-4 bg-white shadow rounded">
      <h2 className="text-primary mb-4">📦 Brand Management</h2>

      {message && <div className="alert alert-info">{message}</div>}

      {/* Add Brand */}
      <form onSubmit={handleAddBrand} className="mb-4 row g-2">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Enter brand name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-success w-100">
            Add Brand
          </button>
        </div>
      </form>

      {/* Brand List Table */}
      <table className="table table-bordered table-hover">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Brand Name</th>
            <th style={{ width: "200px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.id}>
              <td>{brand.id}</td>
              <td>
                {editId === brand.id ? (
                  <input
                    type="text"
                    className="form-control"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  brand.name
                )}
              </td>
              <td>
                {editId === brand.id ? (
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleUpdateBrand(brand.id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleEditBrand(brand)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteBrand(brand.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrandManagement;
