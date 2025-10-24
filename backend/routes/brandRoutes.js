const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandController");

// Routes
router.post("/", brandController.createBrand);      // Create a brand
router.get("/", brandController.getBrands);        // Get all brands
router.get("/:id", brandController.getBrandById);  // Get brand by ID
router.put("/:id", brandController.updateBrand);   // Update brand
router.delete("/:id", brandController.deleteBrand);// Delete brand

module.exports = router;
