const Vehicle = require("../models/Vehicle");
const fs = require("fs");
const path = require("path");

// Add a new vehicle
exports.addVehicle = async (req, res) => {
  try {
    const {
      brand,
      model,
      year,
      price,
      engineCapacity,
      vehicleType,
      fuelType,
      transmissionType,
      mileage,
      origin,
      color,
      description,
    } = req.body;

    const image = req.file ? req.file.originalname : null;

    const vehicle = await Vehicle.create({
      brand,
      model,
      year,
      price,
      engineCapacity,
      vehicleType,
      fuelType,
      transmissionType,
      mileage,
      origin,
      color,
      description,
      image,
    });

    res.status(201).json({
      message: "Vehicle added successfully",
      vehicle,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to add vehicle",
      error: error.message,
    });
  }
};

// Update a vehicle
exports.updateVehicle = async (req, res) => {
  try {
    const {
      brand,
      model,
      year,
      price,
      engineCapacity,
      vehicleType,
      fuelType,
      transmissionType,
      mileage,
      origin,
      color,
      description,
    } = req.body;

    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    let image = vehicle.image;

    if (req.file) {
      // Delete old image if exists
      if (image) {
        const oldImagePath = path.join(__dirname, "..", "uploads", "vehicles", image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      image = req.file.originalname;
    }

    await vehicle.update({
      brand,
      model,
      year,
      price,
      engineCapacity,
      vehicleType,
      fuelType,
      transmissionType,
      mileage,
      origin,
      color,
      description,
      image,
    });

    res.json({
      message: "Vehicle updated successfully",
      vehicle,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update vehicle", details: err.message });
  }
};

// Get all vehicles
exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
};

// Get single vehicle by ID
exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    res.json(vehicle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch vehicle" });
  }
};

// Delete a vehicle
exports.deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    // Delete associated image
    if (vehicle.image) {
      const imagePath = path.join(__dirname, "..", "uploads", "vehicles", vehicle.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await vehicle.destroy();

    res.json({ message: "Vehicle deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete vehicle", details: err.message });
  }
};

// Get vehicles by vehicleType
exports.getVehicleByVehicleType = async (req, res) => {
  try {
    const { vehicleType } = req.params;

    const vehicles = await Vehicle.findAll({ where: { vehicleType } });

    if (!vehicles.length) {
      return res.status(404).json({ message: "No vehicles found for this type" });
    }

    res.json(vehicles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch vehicles by type", details: err.message });
  }
};

// Get vehicles by brand
exports.getVehicleByBrand = async (req, res) => {
  try {
    const { brand } = req.params;

    const vehicles = await Vehicle.findAll({ where: { brand } });

    if (!vehicles.length) {
      return res.status(404).json({ message: "No vehicles found for this brand" });
    }

    res.json(vehicles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch vehicles by brand", details: err.message });
  }
};
