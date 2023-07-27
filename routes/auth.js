const router = require("express").Router();
const authController = require("../controllers/authController");
const { verifyAndAuthorization, verifyToken, verifyAndAdmin } = require("../middleware/Auth");

//login
router.post("/login", authController.loginUser);

module.exports = router