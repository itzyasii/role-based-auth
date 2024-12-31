const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizedRoles = require("../middlewares/roleAccessMW");
const router = express.Router();

// Only Admin Can Access This Route
router.get("/admin", verifyToken, authorizedRoles("Admin"), (req, res) => {
  res.json({ Message: "Access of Admin Get route request." });
});

// Only Admin & Manager Can Access This Route
router.get(
  "/manager",
  verifyToken,
  authorizedRoles("Admin", "Manager"),
  (req, res) => {
    res.json({ Message: "Access of Manager Get route request." });
  }
);

// All Can Access This Route

router.get(
  "/user",
  verifyToken,
  authorizedRoles("Admin", "Manager", "User"),
  (req, res) => {
    res.json({ Message: "Access of User Get route request." });
  }
);

module.exports = router;
