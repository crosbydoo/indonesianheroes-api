const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyAndAuthorization, verifyToken, verifyAndAdmin } = require("../middleware/Auth");

// Update User
router.put("/:id", verifyAndAuthorization, userController.updateUser);

// dELETE User
router.delete("/:id", verifyAndAuthorization, userController.deleteUser);

// Get User
router.get("/:id", verifyAndAuthorization, userController.getUser);

// Get User
router.get("/", verifyAndAdmin, userController.getAllUser);




module.exports = router