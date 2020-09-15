const request = require("supertest");
const express = require("express");
const app = require("../web-server/src/app");
const server = express();

describe("app", () => {
  it("should return 200 status", async () => {
    await request(app)
      .get("/repositories?owner=facebook&repository_name=jest")
      .send()
      .expect(200);
  });

  it("should return json content", async () => {
    await request(app)
      .get("/repositories?owner=facebook&repository_name=jest")
      .send()
      .expect("Content-type", /json/);
  });
});

describe("server", () => {
  it("should return 404 status with unknown endpoint", async () => {
    await request(server).get("/reposit").expect(404);
  });
});
