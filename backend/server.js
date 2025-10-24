const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const sequelize = require("./config/db");
const Admin = require("./models/Admin");
const Vehicle = require("./models/Vehicle");
const Brand = require("./models/Brand");
const adminAuthRoutes = require("./routes/adminAuth");
const vehicleRoutes = require("./routes/vehicleRoutes");
const brandRoutes = require("./routes/brandRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

// Static folder for uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/admin", adminAuthRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/brands", brandRoutes);

app.get("/", (req, res) => res.json({ message: "API running" }));

// Sync database and models
sequelize
  .sync()
  .then(() => {
    console.log("✅ Database & tables created");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ DB Sync Error:", err));
