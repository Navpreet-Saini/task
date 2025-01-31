const express = require("express");
const Car = require("../models/Car");
const router = express.Router();

// Add car
router.post("/", async (req, res) => {
    try {
        const car = new Car(req.body);
        await car.save();
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: "Error adding car" });
    }
});

// Get all cars
router.get("/", async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
});

// Delete multiple cars
router.delete("/", async (req, res) => {
    const { carIds } = req.body;
    await Car.deleteMany({ _id: { $in: carIds } });
    res.json({ message: "Cars deleted" });
});

// Update car
router.put("/:id", async (req, res) => {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCar);
});

module.exports = router;
