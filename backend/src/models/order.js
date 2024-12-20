const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ type: String, required: true }],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Order", orderSchema);
