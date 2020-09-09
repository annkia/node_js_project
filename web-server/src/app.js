//starting point for app
//load express, configure up and start server

const express = require("express");

const app = express();

//sepcify server response when someone want to get specific route
app.get("", (req, res) => {
  res.send({
    fullName: "...",
    description: "...",
    cloneUrl: "...",
    stars: 0,
    createdAt: "...",
  });
});

//start server
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
