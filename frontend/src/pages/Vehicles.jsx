import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/vehicles");
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
      <h2 style={styles.title}>Vehicle Collection</h2>

      <div style={styles.grid}>
        {vehicles.map((vehicle, index) => (
          <div
            key={vehicle.id}
            style={{
              ...styles.card,
              ...(hoveredId === vehicle.id ? styles.cardHover : {}),
              animationDelay: `${index * 0.1}s`, // Staggered animation
            }}
            onClick={() => goToDetails(vehicle.id)}
            onMouseEnter={() => setHoveredId(vehicle.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={`http://localhost:4000/uploads/vehicles/${vehicle.image}`}
              alt={vehicle.model}
              style={styles.image}
            />
            <div style={styles.cardBody}>
              <h3 style={styles.vehicleName}>
                {vehicle.brand} {vehicle.model}
              </h3>
              <p><strong>Year:</strong> {vehicle.year}</p>
              <p><strong>Price:</strong> ${Number(vehicle.price).toLocaleString()}</p>

              <button
                style={{
                  ...styles.moreDetailsButton,
                  ...(hoveredId === vehicle.id ? styles.moreDetailsButtonHover : {}),
                }}
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Inline animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .vehicle-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .vehicle-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Vehicles;

// CSS Styles (JS object)
const styles = {
  container: {
    marginTop: "50px",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "25px",
    color: "#222",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },
  card: {
    border: "none",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    animation: "fadeInUp 0.6s ease both",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  vehicleName: {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
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
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  moreDetailsButtonHover: {
    background: "linear-gradient(135deg, #388E3C, #66BB6A)",
    transform: "translateY(-3px)",
    boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
  },
};
