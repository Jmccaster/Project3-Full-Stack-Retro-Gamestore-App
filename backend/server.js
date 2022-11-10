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

// Import User Route
const userRouter = require("./routes/api/users");

const videoGameRouter = require("./routes/api/videoGames");

//Use dotenv to connect to our config file
dotenv.config();

// Variable that will represent database
const DB = mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to database");
});

// Middleware
app.use(morgan("dev"));

// Body parser
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/videogames", videoGameRouter);

app.all("*", (request, response) => {
  response.send("Undefined route");
});

// Create a port to listen for req/res cycle
const port = 5000;

// Get server running and listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
