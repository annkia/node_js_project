const request = require("postman-request");

const getRepo = (owner, repository_name, callback) => {
  let repositoryInfo;
  const options = {
    url: `https://api.github.com/repos/${owner}/${repository_name}`,
    headers: {
      "User-Agent": "postman-request",
    },
  };
  const getDetails = (error, response, body) => {
    try {
      const info = JSON.parse(body);
      repositoryInfo = {
        fullName: info.full_name,
        description: info.description,
        url: info.url,
        stars: info.stargazers_count,
        createdAt: info.created_at,
      };
      callback(repositoryInfo);
    } catch (error) {
      console.log(error.message);
    }
  };
  request(options, getDetails);
};

module.exports = getRepo;
