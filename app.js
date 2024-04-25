// app.js

// 1. Require express
const express = require("express");
// 2. Create the new express app instance for our API
const app = express();

// 3. Define the route for the GET /greet endpoint
app.get("/greet", (req, res) => {
  const name = req.query.name || "World";
  res.json({ message: `Hello, ${name}!` });
});

app.get("/", (req, res) => {
    res.json({message:`System is Up`});
});  

// 4. Export the app for testing later
module.exports = app;