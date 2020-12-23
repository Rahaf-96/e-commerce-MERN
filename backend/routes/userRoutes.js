const express = require("express");
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);
module.exports = router;
