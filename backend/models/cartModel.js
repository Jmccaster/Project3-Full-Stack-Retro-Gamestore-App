const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    Active: Boolean,
    ModifiedOn: Date,
    Product: [
      {
        Quantity: { type: String },
        title: { type: String, required: true },
        price: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
