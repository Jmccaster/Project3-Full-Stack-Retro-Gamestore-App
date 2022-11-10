const express = require("express");

const videoGameController = require("../../controllers/api/videoGameController");

const router = express.Router();

router.route("/seed").post(videoGameController.seedGames);

router.route("/").get(videoGameController.getAllGames);
router.route("/:platform").get(videoGameController.getGames);

module.exports = router;
