// server.js or app.js

require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Use environment variables
const port = process.env.PORT || 5000;
const dbUri = process.env.DB_URI;

const app = express();
app.use(cors());

// MongoDB connection
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Failed to connect MongoDB", err));

// Define routes
app.get('/', (req, res) => {
  res.send("Welcome to the API!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
