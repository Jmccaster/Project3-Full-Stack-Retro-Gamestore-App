const Games = require("../../models/videoGamesModel");
const data = require("../../data/videoGameData");

exports.createGame = async (request, response) => {
  try {
    // Create new game
    const currentGame = await Games.create({
      title: request.body.title,
      genre: request.body.genre,
      description: request.body.description,
      console: request.body.console,
      platform: request.body.platform,
      image: request.body.image,
      gameCheckedOut: request.body.gameCheckedOut,
    });

    // Send JSON RESPONSE
    response.status(201).json({
      status: "success",
      data: {
        currentGame,
      },
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.seedGames = async (request, response) => {
  try {
    await Games.remove({});
    const newGame = await Games.insertMany(data.gameData);
    // console.log(gameData.gameData);

    response.status(201).json({
      status: "success",
      data: { newGame },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.getAllGames = async (request, response) => {
  try {
    const allGames = await Games.find();
    response.status(200).json({
      status: "success",
      data: { allGames },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
};

exports.getGames = async (request, response) => {
  try {
    let category = request.params.platform;
    category = category[0].toUpperCase() + category.slice(1);

    // console.log(category);
    const allGames = await Games.find({ platform: category });
    response.status(200).json({
      status: "success",
      data: { allGames },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
};
