const Brand = require("../models/Brand");

// Create a new brand
exports.createBrand = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Brand name is required" });
    }

    const existingBrand = await Brand.findOne({ where: { name } });
    if (existingBrand) {
      return res.status(409).json({ error: "Brand already exists" });
    }

    const brand = await Brand.create({ name: name.trim() });
    return res.status(201).json(brand);
  } catch (error) {
    console.error("Create brand error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Get all brands
exports.getBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll({ order: [["id", "ASC"]] });
    return res.status(200).json(brands);
  } catch (error) {
    console.error("Get brands error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Get brand by ID
exports.getBrandById = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await Brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({ error: "Brand not found" });
    }

    return res.status(200).json(brand);
  } catch (error) {
    console.error("Get brand by ID error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Update brand
exports.updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Brand name is required" });
    }

    const brand = await Brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({ error: "Brand not found" });
    }

    const existingBrand = await Brand.findOne({ where: { name } });
    if (existingBrand && existingBrand.id !== brand.id) {
      return res.status(409).json({ error: "Brand name already exists" });
    }

    brand.name = name.trim();
    await brand.save();

    return res.status(200).json(brand);
  } catch (error) {
    console.error("Update brand error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Delete brand
exports.deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await Brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({ error: "Brand not found" });
    }

    await brand.destroy();
    return res.status(200).json({ message: "Brand deleted successfully" });
  } catch (error) {
    console.error("Delete brand error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
