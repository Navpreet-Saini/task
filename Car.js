const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    dealerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    image: String,
    description: [String],
    price: Number,
    color: String,
    mileage: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Car", CarSchema);
