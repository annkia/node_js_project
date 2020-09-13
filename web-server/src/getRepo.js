const request = require("postman-request");

const getRepo = (owner, repository_name) => {
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
      console.log(
        `Stars ${info.stargazers_count}, full name ${info.full_name}, url ${info.url}, created ${info.created_at}`
      );
      repositoryInfo = {
        starts: info.stargazers_count,
        fullName: info.fullName,
        url: info.url,
        createdAt: info.created_at,
      };
      return repositoryInfo;
    } catch (error) {
      console.log(error.message);
    }
  };
  request(options, getDetails);
  return repositoryInfo;
};

module.exports = getRepo;
