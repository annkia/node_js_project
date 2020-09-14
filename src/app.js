const request = require("postman-request");

const owner = "mojombo";
const repository_name = "grit";

const getRepo = (owner, repository_name) => {
  const options = {
    url: `https://api.github.com/repos/${owner}/${repository_name}`,
    //all githubapi requests must include a User-Agent header
    headers: {
      "User-Agent": "postman-request",
    },
    json: true,
  };

  const getDetails = (error, response, body) => {
    try {
      const info = body;
    } catch (error) {
      console.log(error.message);
    }
  };
  request(options, getDetails);
};

module.exports = getRepo;
