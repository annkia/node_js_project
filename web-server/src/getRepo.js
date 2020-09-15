const request = require("postman-request");

const getRepo = (owner, repository_name, callback) => {
  const options = {
    url: `https://api.github.com/repos/${owner}/${repository_name}`,
    headers: {
      "User-Agent": "postman-request",
    },
  };

  request(options, (error, response) => {
    const info = JSON.parse(response.body);
    const repositoryInfo = {
      fullName: info.full_name,
      description: info.description,
      url: info.url,
      stars: info.stargazers_count,
      createdAt: info.created_at,
    };

    if (error) {
      callback("Unable to connect with service");
    } else {
      callback(undefined, repositoryInfo);
    }
  });
};

module.exports = getRepo;
