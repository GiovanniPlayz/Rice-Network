const express = require("express");
const path = require("path");

const app = express();
var PORT = 3000;

app.use(express.static(path.join(__dirname, "web")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "web", "index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "web", "about.html"));
});

app.get("/shop", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "web", "shop.html"));
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});