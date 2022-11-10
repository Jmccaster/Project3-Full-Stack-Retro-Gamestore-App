const mongoose = require("mongoose");

const videoGameSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true],
    },
    genre: {
      type: String,
      required: [true],
    },
    platform: {
      type: String,
      trim: true,
      enum: {
        values: ["Nintendo", "Xbox", "Playstation"],
      },
    },
    description: {
      type: String,
      required: [true],
    },
    console: {
      type: String,
      required: [true],
    },
    price: {
      type: String,
      required: [true],
    },
    image: {
      type: String,
    },
    gameCheckedOut: Boolean,
  },
  { timestamps: true }
);

const Games = new mongoose.model("Games", videoGameSchema);

module.exports = Games;
