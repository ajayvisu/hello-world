const express = require("express");

const app = express();

const port = 6600;

app.get("/", (req, res) => {
  return res.send("hello world");
  // console.log("server started")
});

app.listen(port, () => {
  console.log("server started");
});
