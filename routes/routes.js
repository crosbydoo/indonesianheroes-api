const router = require("express").Router();
const pahlawanController = require("../controllers/pahlawanController");
const { verifyAndAdmin } = require("../middleware/Auth");

//CREATE DATA
router.post("/", verifyAndAdmin, pahlawanController.createData);

//UPDATE DATA
router.put("/:id", verifyAndAdmin, pahlawanController.updateData);

//DELETE DATA
router.delete("/:id",verifyAndAdmin, pahlawanController.deleteHeroes);

//GET HEROES
router.get("/:id", pahlawanController.getHeroes);

//GET ALL HEROES
router.get("/", pahlawanController.getAllHeroes);

module.exports = router;