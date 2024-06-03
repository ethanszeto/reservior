import request from "supertest";
import app from "../../../server/server.js";
import Connection from "../../../server/db/connection.js";
import logTestSuite from "../../util.js";
import { validCreateMemoryAbbot } from "../../test_data/memory.js";
import { abbotLoginToken, lysanderLoginToken, reginaldLoginToken, invalidLoginToken } from "../../test_data/token.js";

afterAll(async () => {
  await Connection.close();
});

describe("Memory tests", () => {
  test("Test create memory, abbot", async () => {
    const response = await request(app)
      .post("/memory/add")
      .send(validCreateMemoryAbbot)
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.memory ? console.log(response.body) : null;
    expect(response.statusCode).toBe(201);
  });
});
