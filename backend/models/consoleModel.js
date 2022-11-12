const mongoose = require("mongoose");

const consoleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true],
    },
    description: {
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
    price: {
      type: String,
      required: [true],
    },
    image: {
      type: String,
    },
    availability: Boolean,
  },
  { timestamps: true }
);

const Consoles = new mongoose.model("Consoles", consoleSchema);

module.exports = Consoles;
