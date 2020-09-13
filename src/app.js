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
  };
  const getDetails = (error, response, body) => {
    try {
      const info = JSON.parse(body);
      console.log(
        `Stars ${info.stargazers_count}, full name ${info.full_name}, url ${info.url}, created ${info.created_at}`
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  request(options, getDetails);
};

module.exports = getRepo;
