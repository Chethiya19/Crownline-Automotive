const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
const TOKEN_EXPIRES_IN = process.env.TOKEN_EXPIRES_IN || "1h";

const setTokenCookie = (res, token) => {
  const isProd = process.env.NODE_ENV === "production";
  res.cookie("adminToken", token, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    maxAge: 1000 * 60 * 60,
  });
};

exports.register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const existingAdmin = await Admin.findOne({ where: { email } });
    if (existingAdmin) return res.status(400).json({ message: "Admin already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      email,
      password: hashed,
      name: name || null,
    });

    return res.status(201).json({ message: "Admin created", adminId: admin.id });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const admin = await Admin.findOne({ where: { email } });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const payload = { id: admin.id, email: admin.email, name: admin.name };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRES_IN });

    setTokenCookie(res, token);

    return res.json({ message: "Login successful", admin: payload });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.dashboard = (req, res) => {
  return res.json({
    message: `Welcome to admin dashboard, ${req.admin.name || req.admin.email}`,
    admin: req.admin,
  });
};

exports.logout = (req, res) => {
  const isProd = process.env.NODE_ENV === "production";
  res.clearCookie("adminToken", {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
  });
  return res.json({ message: "Logged out" });
};
