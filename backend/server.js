// Require Express App
const express = require("express");

// Create App
const app = express();

// Import Path
const path = require("path");

// Import Morgan for log request and response
const morgan = require("morgan");

// Import Favicon
const favicon = require("serve-favicon");

// Import Dotenv in order to connect to our configuration file
const dotenv = require("dotenv");

// Require Mongoose to connect to database
const mongoose = require("mongoose");

//Use dotenv to connect to our config file
dotenv.config();

// Variable that will represnt databse
const DB = mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connect to database");
});

// MIddleware
app.use(morgan("dev"));

// Body parser
app.use(express.json());

// Create a port to listen for req/res cycle
const port = process.env.PORT;

// Get server running and listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
