import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";


const VehicleDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        fetchVehicleDetails();
    }, []);

    const fetchVehicleDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/api/vehicles/${id}`);
            setVehicle(res.data);
        } catch (err) {
            console.error("Error fetching vehicle details:", err);
        }
    };

    if (!vehicle) {
        return <p style={styles.loading}>Loading vehicle details...</p>;
    }

    return (
        <div style={styles.container}>
            <button style={styles.backButton} onClick={() => navigate(-1)}>
                ← Back to Vehicles
            </button>

            <div style={styles.detailsContainer}>
                <div style={styles.imageSection}>
                    <img
                        src={`http://localhost:4000/uploads/vehicles/${vehicle.image}`}
                        alt={vehicle.model}
                        style={styles.image}
                    />
                    <button style={styles.contactButton}>
                        <FiPhone style={{ marginRight: "5px" }} /> Contact Dealer
                    </button>
                </div>

                <div style={styles.infoSection}>
                    <h1 style={styles.title}>
                        {vehicle.brand} {vehicle.model}
                    </h1>
                    <p style={styles.price}>
                        ${Number(vehicle.price).toLocaleString()}
                    </p>

                    <div style={styles.infoCard}>
                        <p><strong>Year:</strong> {vehicle.year}</p>
                        <p><strong>Engine Capacity:</strong> {vehicle.engineCapacity} cc</p>
                        <p><strong>Fuel Type:</strong> {vehicle.fuelType}</p>
                        <p><strong>Transmission:</strong> {vehicle.transmissionType}</p>
                        <p><strong>Mileage:</strong> {vehicle.mileage} km/l</p>
                        <p><strong>Origin:</strong> {vehicle.origin}</p>
                        <p><strong>Color:</strong> {vehicle.color}</p>
                        <p><strong>Vehicle Type:</strong> {vehicle.vehicleType}</p>
                    </div>

                    <div style={styles.descriptionCard}>
                        <h3>Description</h3>
                        <p>{vehicle.description}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VehicleDetails;

const styles = {
    container: {
        marginTop: "40px",
        padding: "30px",
        fontFamily: "'Poppins', sans-serif",
        background: "#f9f9f9",
        minHeight: "100vh",
    },
    loading: { textAlign: "center", fontSize: "18px", paddingTop: "50px" },
    backButton: {
        background: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
        cursor: "pointer",
        marginBottom: "20px",
        fontSize: "16px",
        transition: "0.3s",
    },
    detailsContainer: {
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    imageSection: {
        flex: "1",
        minWidth: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
    },
    image: {
        width: "100%",
        maxWidth: "500px",
        borderRadius: "12px",
        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
    },
    infoSection: {
        flex: "1",
        minWidth: "350px",
        display: "flex",
        flexDirection: "column",
        // gap: "1px",
    },
    title: { fontSize: "28px", fontWeight: "600", marginBottom: "10px" },
    price: { fontSize: "22px", fontWeight: "bold", color: "#ff5722" },
    infoCard: {
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        fontSize: "16px",
    },
    descriptionCard: {
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        fontSize: "15px",
        lineHeight: "1.6",
        marginTop: "20px",
    },
    contactButton: {
        padding: "15px",
        margin: "40px",
        background: "#ff5722",
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        fontSize: "16px",
        cursor: "pointer",
        fontWeight: "600",
        transition: "0.3s",
        width: "500px",
    },
};
