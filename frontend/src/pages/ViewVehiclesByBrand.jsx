import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ViewVehiclesByBrand = () => {
  const [vehicles, setVehicles] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();
  const { brand } = useParams(); // from URL

  useEffect(() => {
    fetchVehiclesByBrand();
  }, [brand]);

  const fetchVehiclesByBrand = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/vehicles/brand/${brand}`
      );
      setVehicles(res.data);
    } catch (err) {
      console.error("Error fetching vehicles:", err);
    }
  };

  const goToDetails = (id) => {
    navigate(`/vehicle/${id}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Vehicles of brand: {brand.charAt(0).toUpperCase() + brand.slice(1)}
      </h2>
      <div style={styles.grid}>
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              style={styles.card}
              onClick={() => goToDetails(vehicle.id)}
            >
              <img
                src={
                  vehicle.image
                    ? `http://localhost:4000/uploads/vehicles/${vehicle.image}`
                    : "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt={vehicle.model}
                style={styles.image}
              />
              <div style={styles.cardBody}>
                <h3 style={styles.vehicleName}>
                  {vehicle.brand} {vehicle.model}
                </h3>
                <p>
                  <strong>Year:</strong> {vehicle.year}
                </p>
                <p>
                  <strong>Price:</strong>{" "}
                  ${Number(vehicle.price).toLocaleString()}
                </p>
                <button
                  style={{
                    ...styles.moreDetailsButton,
                    ...(hoveredId === vehicle.id
                      ? styles.moreDetailsButtonHover
                      : {}),
                  }}
                  onMouseEnter={() => setHoveredId(vehicle.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent card click
                    goToDetails(vehicle.id);
                  }}
                >
                  More Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            No vehicles found for this brand.
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewVehiclesByBrand;

const styles = {
  container: {
    marginTop: "45px",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    fontFamily: "'Segoe UI', sans-serif",
    textAlign: "center",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "15px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  vehicleName: {
    margin: "0 0 10px 0",
    fontSize: "18px",
  },
  moreDetailsButton: {
    marginTop: "auto",
    padding: "10px 15px",
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  moreDetailsButtonHover: {
    background: "linear-gradient(135deg, #388E3C, #66BB6A)",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
  },
};
