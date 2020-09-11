const request = require("postman-request");

//endpoint
const url = "https://api.github.com/users";

//all githubapi requests must include a User-Agent header
const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36";

const options = {
  url: "https://api.github.com/repos/request/request",
  headers: {
    "User-Agent": userAgent,
  },
};

function getUsers(error, response, body) {
  try {
    const info = JSON.parse(body);
    console.log(
      `Stars ${info.stargazers_count}, full name ${info.full_name}, url ${info.url}, created ${info.created_at}`
    );
  } catch (error) {
    console.log(error.message);
  }
}

request(options, getUsers);
