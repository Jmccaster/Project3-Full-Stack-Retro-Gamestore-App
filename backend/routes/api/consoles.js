const express = require("express");

const consoleController = require("../../controllers/api/consoleController");

const router = express.Router();

router.route("/seed").post(consoleController.seedConsoles);

router.route("/").get(consoleController.getAllConsoles);
router.route("/:platform").get(consoleController.getConsoles);

module.exports = router;
