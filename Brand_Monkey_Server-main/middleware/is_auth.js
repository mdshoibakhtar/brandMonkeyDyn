const jwt = require("jsonwebtoken");
const Employees = require("../models/employee");
const dotenv = require("dotenv");

dotenv.config();


const isAuth = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      throw error;
    }
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }
    
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token." });
      }
      
      const user = await Employees.findById(decoded.id);
      if (!user) {
        return res.status(401).json({ message: "Employees not found." });
      }

      
      req.user = user;

      next();
    });
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};


const isAdmin = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      throw error;
    }
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }
    
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token." });
      }
      
      const user = await Employees.findById(decoded.id);
      if (!user) {
        return res.status(401).json({ message: "Employees not found." });
      }
      
      if (user.type === "admin" || user.type === "superadmin") {
        next(); 
      } else {
        res.status(403).json({ message: "Not admin." });
      }
    });
  } catch (error) {
    console.error("Admin check error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const isSuperAdmin = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      throw error;
    }
    const token = authHeader.split(" ")[1]; 
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }
    
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token." });
      }

      
      const { id } = decoded;

      
      const user = await Employees.findById(id);
      if (!user) {
        return res.status(401).json({ message: "Employee not found." });
      }
      
      if (user.type === "superadmin") {
        next(); 
      } else {
        res.status(403).json({ message: "Not superadmin." });
      }
    });
  } catch (error) {
    console.error("SuperAdmin check error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { isAuth, isAdmin, isSuperAdmin };
