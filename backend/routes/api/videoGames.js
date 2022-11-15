const express = require("express");

const videoGameController = require("../../controllers/api/videoGameController");

const router = express.Router();

router.route("/seed").post(videoGameController.seedGames);

router.route("/").post(videoGameController.createGame);
router.route("/").get(videoGameController.getAllGames);
router.route("/1/:gameId").get(videoGameController.getOneGame);
router.route("/:platform").get(videoGameController.getGames);
router.route("/:gameId").put(videoGameController.updateGame);
router.route("/:gameId").delete(videoGameController.deleteGame);

module.exports = router;
