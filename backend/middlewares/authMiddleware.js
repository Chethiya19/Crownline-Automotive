const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

const authenticateAdmin = (req, res, next) => {
  try {
    const token = req.cookies?.adminToken;
    if (!token) return res.status(401).json({ message: "Not authenticated" });

    const payload = jwt.verify(token, JWT_SECRET);
    req.admin = payload;
    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authenticateAdmin;
