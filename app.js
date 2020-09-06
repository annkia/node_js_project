const request = require("request");

const url = "https://api.github.com/search/repositories";

request({ url: url, json: true }, (error, response) => {
  console.log("Repositories from github", response);
});
