const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authenticateAdmin = require("../middlewares/authMiddleware");

router.post("/register", adminController.register);
router.post("/login", adminController.login);
router.get("/dashboard", authenticateAdmin, adminController.dashboard);
router.post("/logout", adminController.logout);

module.exports = router;
