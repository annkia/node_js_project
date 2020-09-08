const request = require("request-promise");

//endpoint
const url = "https://api.github.com/users";

//all githubapi requests must include a User-Agent header
const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36";

async function getUsers() {
  try {
    const response = await request({
      url: `${url}/annkia/repos`,
      method: "GET",
      headers: {
        "User-Agent": userAgent,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}
getUsers();
