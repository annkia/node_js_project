//starting point for app
//load express, configure up and start server

const express = require("express");
const getRepo = require("./getRepo");

const app = express();

//specify server response when someone want to get specific route
app.get("/repositories", (req, res) => {
  //info about query string lives in req argument.
  if (!req.query.owner) {
    return res.send({
      message: "Please provide owner name",
    });
  }

  if (!req.query.repository_name) {
    return res.send({
      message: "Please  provide repository_name",
    });
  }

  getRepo(req.query.owner, req.query.repository_name);

  res.send({
    fullName: `${req.query.owner}/${req.query.repository_name}`,
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
