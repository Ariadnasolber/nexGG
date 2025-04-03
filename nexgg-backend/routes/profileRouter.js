const express = require("express");
const ProfileController = require("../controllers/profileController");

const router = express.Router();

router.get("/", ProfileController.getAll);
router.get("/:id", ProfileController.getById);
router.post("/", ProfileController.create);
router.put("/:id", ProfileController.update);
router.delete("/:id", ProfileController.delete);


module.exports = router;