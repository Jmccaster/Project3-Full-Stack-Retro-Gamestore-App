const Consoles = require("../../models/consoleModel");
const data = require("../../data/consoleData");

exports.seedConsoles = async (request, response) => {
  try {
    await Consoles.remove({});
    const newConsole = await Consoles.insertMany(data.consoleData);
    // console.log(gameData.gameData);

    response.status(201).json({
      status: "success",
      data: { newConsole },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.getAllConsoles = async (request, response) => {
  try {
    const allConsoles = await Consoles.find();
    response.status(200).json({
      status: "success",
      data: { allConsoles },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
};

exports.geConsoles = async (request, response) => {
  try {
    let category = request.params.platform;
    category = category[0].toUpperCase() + category.slice(1);

    // console.log(category);
    const allConsoles = await Consoles.find({ platform: category });
    response.status(200).json({
      status: "success",
      data: { allConsoles },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
};
