const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");
const uploadVehicle = require("../middlewares/uploadVehicle");

// Add Vehicle (with image upload)
router.post("/", uploadVehicle.single("image"), vehicleController.addVehicle);

// Get all Vehicles
router.get("/", vehicleController.getAllVehicles);

// Get single Vehicle by ID
router.get("/:id", vehicleController.getVehicleById);

// Update Vehicle (with image upload)
router.put("/:id", uploadVehicle.single("image"), vehicleController.updateVehicle);

// Delete Vehicle
router.delete("/:id", vehicleController.deleteVehicle);

// Get vehicles by type
router.get("/type/:vehicleType", vehicleController.getVehicleByVehicleType);

// Get vehicles by type
router.get("/brand/:brand", vehicleController.getVehicleByBrand);

module.exports = router;
